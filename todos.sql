DROP TABLE IF EXISTS todo_tb;
CREATE TABLE todo_tb
(
  id int(10)
  unsigned NOT NULL AUTO_INCREMENT,
  title varchar
  (255) NULL,
  isCompleted bit NOT NULL,
  PRIMARY KEY
  (id)
)ENGINE=InnoDB AUTO_INCREMENT=1 CHARSET=utf8;
INSERT INTO todo_tb(title,isCompleted) values('上海',true);