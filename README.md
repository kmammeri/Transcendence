# Projet ft_transcendence
Ce projet consiste à créer un pong.

## Infos sur le projet:
- url du front : `http://localhost:3000/`
- url du back : `http://localhost:3001/`

# Connexion à la base de données:
- db inline : `docker exec -it ft_transcendence_db_1 psql -h localhost -p 5432 -U myusername -d mydatabase`
- bash : `docker exec -it db|web|postgre bash`
- delete database : `rm -rf /path/to/postgre/data`

## Deux containers:
- Un container pour le serveur
- Un container pour la base de données

## List des containers:
- `docker ps -a`

## Lancement du projet:
- `docker-compose up --build`

## Lancement du projet en mode détaché:
- `docker-compose up --build -d`

## Arrêt du projet:
- `docker-compose down`
