-- Création de la base de données
CREATE DATABASE POSTGRES_DB;

-- Utilisation de la base de données
\connect POSTGRES_DB;

-- Création de l'utilisateur administrateur
CREATE USER POSTGRES_USER WITH PASSWORD 'POSTGRES_PASSWORD';

-- Attribution des privilèges d'administrateur à l'utilisateur
ALTER USER POSTGRES_USER WITH SUPERUSER;

-- userDB
CREATE TABLE users (
  userID SERIAL PRIMARY KEY,
  userName VARCHAR(255) NOT NULL,
  userPswdHash VARCHAR(255) NOT NULL,
  userNick VARCHAR(255),
  userPicture VARCHAR(255),
  userElo INTEGER,
  userNbWin INTEGER,
  userNbLose INTEGER,
  userFriends INTEGER[],
  userStatus INTEGER,
  userHistory INTEGER[],
  userChannels INTEGER[]
);

-- gameDB
CREATE TABLE games (
  gameID SERIAL PRIMARY KEY,
  gamePlayers INTEGER[],
  gameStatus INTEGER,
  gameScore INTEGER[],
  gameDate DATE,
  gameType INTEGER
);

-- channelDB
CREATE TABLE channels (
  chanId SERIAL PRIMARY KEY,
  chanName VARCHAR(255),
  chanOwner INTEGER,
  chanDate DATE,
  chanOp INTEGER[],
  chanMode INTEGER,
  chanMembers INTEGER[],
  chanChats JSONB[],
  chanPswdHash VARCHAR(255),
  chanBanned INTEGER[],
  chanMuted INTEGER[]
);
