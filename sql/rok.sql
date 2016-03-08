CREATE DATABASE ROK;
CREATE USER rok WITH PASSWORD 'rok';
CREATE TABLE EMAIL(id serial, username varchar(40), password varchar(40));
GRANT ALL PRIVILEGES ON TABLE email TO rok;
GRANT ALL PRIVILEGES ON SEQUENCE email_id_seq TO rok;
CREATE TABLE USERS(id serial, username varchar(40), password varchar(100));
GRANT ALL PRIVILEGES ON TABLE users TO rok;
GRANT ALL PRIVILEGES ON SEQUENCE users_id_seq TO rok;