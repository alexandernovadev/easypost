#!/bin/bash

# Función para incrementar el número de versión de revisión
increment_version() {
    local version="$1"
    local major="${version%%.*}"
    local minor="${version#*.}"
    local revision="${minor#*.}"
    minor="${minor%%.*}"

    ((revision++))

    new_version="$major.$minor.$revision"
}

# Ruta al archivo de versión
version_file="version.txt"
package_version_file="package.version"

# Leer la versión actual desde el archivo o usar el valor por defecto
current_version=$(cat "$version_file" 2>/dev/null)
default_version="1.0.0"
version="${3:-$current_version}"
version="${version:-$default_version}"

# Verificar si se proporcionó la versión
if [ -z "$version" ]; then
    echo "Papi, ¿y la versión?"
    exit 1
fi

# Verificar la opción proporcionada (-f para 'front' o -b para 'backend')
if [ "$1" == "-f" ]; then
    branch="front"
    files=("front/*")
elif [ "$1" == "-b" ]; then
    branch="backend"
    files=("back/*")
else
    echo "Opción no válida. Uso: $0 [-f|-b] [versión]"
    exit 1
fi

# Incrementar el número de versión de revisión
increment_version "$version"

# Guardar la nueva versión en el archivo (solo si se proporcionó -f)
if [ "$branch" == "front" ]; then
    echo "$new_version" > "$version_file"
fi

# Actualizar el valor de la versión en "package.version"
if [ -f "$package_version_file" ]; then
    jq '.version = $new_version' --arg new_version "$new_version" "$package_version_file" > tmpfile && mv tmpfile "$package_version_file"
else
    echo "{ \"version\": \"$new_version\" }" > "$package_version_file"
fi

# Crear un directorio temporal
tmpdir=$(mktemp -d)

# Copiar los archivos correspondientes al directorio temporal
cp -r "${files[@]}" "$tmpdir"

# Cambiar a la rama correspondiente
if git checkout "$branch"; then
    cp -r "$tmpdir"/* .
    rm -rf "${files[@]}" node_modules README.md
    git add .
    git commit -m "Actualización de la versión a '$new_version'"
    git push origin "$branch"
    git checkout develop
    echo "¡Actualización y subida correctas a la rama '$branch' con nueva versión '$new_version'!"
else
    echo "No se pudo cambiar a la rama '$branch'. Operación abortada."
fi

rm -rf "$tmpdir"
