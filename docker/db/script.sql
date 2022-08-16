CREATE DATABASE IF NOT EXISTS frame2;
USE frame2;

CREATE TABLE IF NOT EXISTS dogs (
  id INT(11) AUTO_INCREMENT,
  name VARCHAR(255),
  age int(10),
  PRIMARY KEY (id)
);

INSERT INTO dogs VALUE(0, 'bruto', 5);
INSERT INTO dogs VALUE(0, 'coragem', 2);
