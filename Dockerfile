 #imagen base de docker: Dockerhub
FROM node:18

#ruta donde se crea la aplicacion

RUN mkdir -p /home/app

# COPIAMOS ESA RUTA Y LE INDICAMOS EN LA RUTA DEL CONTENEDOR DONDE SE VA A GUARDAR LA APP
COPY . /home/app

# HACER UNA COPIA DEL package.json y package-lock.json
# en lo que docker crea la capa de aplicación este proceso solo se hace una vez
COPY package*.json ./

#SI NUESTRO PACKAGE.JSON NO CAMBIA, no tendremos que ejecutar el npm install 
RUN npm install

# Exponemos nuestro servidor en el puerto 3005 para poder acceder a nuestro contenedor
# o al contenedor
EXPOSE 3005

# COMANDOS PARA CORRER NUESTRO CONTENEDOR
# LO GUARDAMOS EN UNA MATRIZ (UN ARREGLO) PARA TENERLO POR SEPARADO 
CMD [ "node", "/home/app/index.js" ]
# SI UTILZAMOS NODEMON 
# CMD ["npm", "run", "start"]