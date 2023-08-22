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

# Nombre de la rama 'front'
front_branch="front"

# Nombre de la rama 'backend'
backend_branch="backend"

# Incrementar el número de versión de revisión
increment_version "$current_version"

# Guardar la nueva versión en el archivo
echo "$new_version" > "$version_file"

# Crear un directorio temporal
tmpdir=$(mktemp -d)

# Copiar todo desde 'backend' al directorio temporal
cp -r backend/* "$tmpdir"

# Cambiar a la rama 'front'
if git checkout "$front_branch"; then
    # Copiar los archivos desde el directorio temporal a la raíz
    cp -r "$tmpdir"/* .

    # Borrar las carpetas 'backend', 'frontend' y 'node_modules'
    rm -rf backend frontend node_modules README.md

    # Agregar los cambios a Git
    git add .

    # Hacer una confirmación con un mensaje
    git commit -m "Actualización de la versión a '$new_version'"

    # Empujar los cambios a la rama 'front' en el repositorio remoto
    git push origin "$front_branch"

    # Volver a la rama 'main'
    git checkout main

    # Mostrar mensaje de actualización exitosa
    echo "¡Actualización y subida correctas a la rama '$front_branch' con nueva versión '$new_version'!"
else
    echo "No se pudo cambiar a la rama '$front_branch'. Operación abortada."
fi

# Eliminar el directorio temporal
rm -rf "$tmpdir"
