# Utilisation de l'image Node.js officielle en tant que base
FROM node:latest

# Définition du répertoire de travail
WORKDIR /back

# Copier les fichiers du projet dans le conteneur
COPY ./back .

# Installation des dépendances
RUN npm install

# Construction de l'application
RUN npm run build

# Exposition du port sur lequel l'application écoute
EXPOSE 3001

# Commande pour démarrer l'application
CMD [ "npm", "run", "start:dev" ]
