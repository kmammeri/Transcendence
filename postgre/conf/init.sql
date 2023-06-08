-- Créer un utilisateur administrateur
CREATE ROLE $ADMIN_USERNAME WITH LOGIN PASSWORD '$ADMIN_PASSWORD';
ALTER ROLE $ADMIN_USERNAME CREATEDB;
GRANT ALL PRIVILEGES ON DATABASE $DATABASE_NAME TO $ADMIN_USERNAME;

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
