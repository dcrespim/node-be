############################################################
# Dockerfile para configurar aplicación en node.js - Express
############################################################

# Establece la imagen base
FROM node

# Información de Metadata
LABEL "com.logalty.appNode"="dcrespim"
LABEL maintainer="dcrespim@gmail.com"
LABEL version="1.0"


# Crear directorio de trabajo
RUN mkdir -p /opt/app

# Se estable el directorio de trabajo
WORKDIR /opt/app

# Instalación de Nodemon en forma Global
# Al realizarse cambios reiniciar el servidor
RUN npm install -g nodemon

# No instalar typescript en forma Global ya que se produce un error en la instancia del docker
# arrancar la aplicación
# RUN npm install typescript -g

# No instalar ts-node en forma Global ya que se produce un error en la instancia del docker
# arrancar la aplicación
# RUN npm install ts-node -g

# Copia la Aplicación
COPY . .

# Instala los paquetes existentes en el package.json
# COPY package.json .
RUN npm install --quiet

# Expone la aplicación en el puerto 8000
EXPOSE 8000

# Inicia la aplicación al iniciar al contenedor
#nodemon -L --watch . app.js
#CMD nodemon --ext ts --exec ts-node --delay 3 ./src/server.ts 
CMD npm run start-dev
