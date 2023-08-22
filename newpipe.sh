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

# Leer la versión actual desde el archivo
current_version=$(cat "$version_file")

# Número de versión por defecto
default_version="1.0.0"

# Obtener la versión como argumento o usar el valor por defecto
version="${1:-$default_version}"

# Ramas 'front'
front_branch="front"
backend_branch="backend"
# Incrementar el número de versión de revisión
increment_version "$current_version"

# Guardar la nueva versión en el archivo
echo "$new_version" > "$version_file"

# Crear un directorio temporal
tmpdir=$(mktemp -d)

# Copiar todo desde 'backend' al directorio temporal
cp -r backend/* "$tmpdir"

if git checkout "$front_branch"; then
    cp -r "$tmpdir"/* .
    rm -rf back front node_modules README.md
    git add .
    git commit -m "Actualización de la versión a '$new_version'"
    git push origin "$front_branch"
    git checkout main
    echo "¡Actualización y subida correctas a la rama '$front_branch' con nueva versión '$new_version'!"
else
    echo "No se pudo cambiar a la rama '$front_branch'. Operación abortada."
fi

# Eliminar el directorio temporal
rm -rf "$tmpdir"
