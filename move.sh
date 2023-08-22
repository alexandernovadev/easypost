#!/bin/bash

# Entrar a la carpeta 'front'
cd front

# Cambiar a la rama 'front'
if git checkout front; then
    # Copiar todo desde 'front' a la raíz
    cp -r * 

    # Volver a la carpeta raíz
    cd ..

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
