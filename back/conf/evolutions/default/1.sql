# Firstname schema

# --- !Ups

CREATE TABLE item (
  id       SERIAL  PRIMARY KEY,
  content  VARCHAR(256) NOT NULL UNIQUE
);

INSERT INTO 
  item (content)
  VALUES
    ('Veto1'),
    ('Prenom6'),
    ('Prenom8'),
    ('Veto2'),
    ('Prenom2'),
    ('Prenom4'),
    ('Prenom10'),
    ('Prenom9'),
    ('Prenom1'),
    ('Prenom7'),
    ('Prenom3'),
    ('Veto3'),
    ('Prenom5')
;

CREATE TABLE preference (
  who INT,
  better SERIAL REFERENCES item(id),
  lesser SERIAL REFERENCES item(id)
);

# --- !Downs

DROP TABLE item;
DROP TABLE preference;
