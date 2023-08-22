# Entrar a la carpeta 'front'
cd front

# Copiar todo desde 'front' a la raíz
cp -r * ..

# Volver a la carpeta raíz
cd ..

# delete
rm -rf back front node_modules

git checkout front

git add .

git commit -m "new version front"

git push origin front