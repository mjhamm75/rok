CREATE DATABASE ROK;
CREATE USER rok WITH PASSWORD 'rok';
CREATE TABLE EMAIL(id serial, username varchar(40), password varchar(40));
GRANT ALL PRIVILEGES ON TABLE email TO rok;
GRANT ALL PRIVILEGES ON SEQUENCE email_id_seq TO rok;
CREATE TABLE USERS(id serial, username varchar(40), password varchar(100));
GRANT ALL PRIVILEGES ON TABLE users TO rok;
GRANT ALL PRIVILEGES ON SEQUENCE users_id_seq TO rok;
CREATE TABLE SVG(id serial primary key, title varchar(50));
GRANT ALL PRIVILEGES ON TABLE svg TO rok;
GRANT ALL PRIVILEGES ON SEQUENCE svg_id_seq TO rok;
CREATE TABLE PATH(id serial, svg_id integer references svg(id), path_id integer, amount decimal(12, 2), customer varchar(50));
GRANT ALL PRIVILEGES ON TABLE path TO rok;
GRANT ALL PRIVILEGES ON SEQUENCE path_id_seq TO rok;
CREATE TABLE DONATION(id serial, email varchar(125), amount decimal(12, 2));
GRANT ALL PRIVILEGES ON TABLE donation TO rok;
GRANT ALL PRIVILEGES ON SEQUENCE donation_id_seq TO rok;

UPDATE PATH p set
  amount = d.amount
from (VALUES
  (62, 100)
) AS d(path_id, amount) WHERE p.svg_id = (SELECT id FROM SVG s WHERE title = 'b1')
AND p.path_id = d.path_id;
