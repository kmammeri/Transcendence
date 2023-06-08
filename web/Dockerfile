# Utilisation de l'image Node.js officielle
FROM node:latest

# Définition du répertoire de travail
WORKDIR /app

# Copier les fichiers du projet dans le conteneur
COPY ./site .

# Installation des dépendances
RUN npm install

# Construction de l'application
RUN npm run build

# Exposer le port sur lequel le serveur Next.js va écouter
EXPOSE 3000

# Démarrer le serveur Next.js
CMD ["npm", "run", "dev"]
# ! dev pour le développement, start pour la production
