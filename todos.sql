DROP TABLE IF EXISTS todo;
/* sql标准中存在bool或者boolean类型；但是，在Mysql这两种类型，最终转化成了tinyint(1)类型 */
CREATE TABLE todo
(
  id int(10)
  unsigned NOT NULL AUTO_INCREMENT,
  title varchar
  (255) NULL,
  isCompleted tinyint
  (1) NOT NULL,
  PRIMARY KEY
  (id)
)ENGINE=InnoDB AUTO_INCREMENT=1 CHARSET=utf8;
  INSERT INTO todo
    (title,isCompleted)
  values('上海', true);