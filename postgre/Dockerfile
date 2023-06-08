# Utilisation de l'image PostgreSQL officielle
FROM postgres:latest

# Copie du fichier SQL contenant les commandes de création de la base de données
COPY ./conf/init.sql /docker-entrypoint-initdb.d/

# Copie du fichier de configuration de PostgreSQL
# COPY ./conf/pg_hba.conf /docker-entrypoint-initdb.d/

# Remplacement du nom de la base de données dans le fichier init.sql : `${POSTGRES_DB}` to `mydb`
RUN sed -i "s/POSTGRES_DB/mydb/g" /docker-entrypoint-initdb.d/init.sql
RUN sed -i "s/POSTGRES_USER/myuser/g" /docker-entrypoint-initdb.d/init.sql
RUN sed -i "s/POSTGRES_PASSWORD/mypass/g" /docker-entrypoint-initdb.d/init.sql

# Exécution des commandes SQL pour initialiser la base de données
RUN chmod 755 /docker-entrypoint-initdb.d/init.sql

CMD ["docker-entrypoint.sh", "postgres"]