#!/bin/bash

cd front

rm -rf node_modules

cd ..

# Crear un directorio temporal
tmpdir=$(mktemp -d)

# Copiar todo desde 'front' al directorio temporal
cp -r front/* "$tmpdir"

# Cambiar a la rama 'front'
if git checkout front; then
    # Copiar los archivos desde el directorio temporal a la raíz
    cp -r "$tmpdir"/* .

    # Borrar las carpetas 'back', 'front' y 'node_modules'
    rm -rf back front node_modules

    # Agregar los cambios a Git
    git add .

    # Hacer una confirmación con un mensaje
    git commit -m "Actualización de la versión de 'front'"

    # Empujar los cambios a la rama 'front' en el repositorio remoto
    git push origin front
else
    echo "No se pudo cambiar a la rama 'front'. Operación abortada."
fi

# Eliminar el directorio temporal
rm -rf "$tmpdir"
