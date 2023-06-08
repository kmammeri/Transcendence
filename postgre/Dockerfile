# Utilisation de l'image PostgreSQL officielle
FROM postgres:latest

# Copie du fichier SQL contenant les commandes de création de la base de données
COPY conf/init.sql /docker-entrypoint-initdb.d/

# Définition des variables d'environnement pour l'utilisateur administrateur
ENV ADMIN_USERNAME admin
ENV ADMIN_PASSWORD admin123
ENV DATABASE_NAME mydatabase

# Exécution des commandes SQL pour initialiser la base de données
RUN chmod 755 /docker-entrypoint-initdb.d/init.sql
