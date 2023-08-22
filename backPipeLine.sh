#!/bin/bash

# Crear un directorio temporal
tmpdir=$(mktemp -d)

# Copiar todo desde 'front' al directorio temporal
cp -r back/* "$tmpdir"

# Cambiar a la rama 'front'
if git checkout backend; then
    # Copiar los archivos desde el directorio temporal a la raíz
    cp -r "$tmpdir"/* .

    # Borrar las carpetas 'back', 'front' y 'node_modules'
    rm -rf back front node_modules README.md

    # Agregar los cambios a Git
    git add .

    # Hacer una confirmación con un mensaje
    git commit -m "Actualización de la versión de 'Back 1.3.2'"

    # Empujar los cambios a la rama 'front' en el repositorio remoto
    git push origin backend
else
    echo "No se pudo cambiar a la rama 'back'. Operación abortada."
fi

# Eliminar el directorio temporal
rm -rf "$tmpdir"
