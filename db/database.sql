CREATE DATABASE IF NOT EXISTS combanydb;


use combanydb;

CREATE table empleado(
    id int(11) not null auto_increment,
    name varchar(45) default null,
    salario int(5) default null,
    primary key(id)
)


DESCRIBE empleado

INSERT INTO empleado VALUES
(1,"Joe",1000),
(2,"Henry",1000),
(3,"Juan",1400),
(4,"Andres",1500),
