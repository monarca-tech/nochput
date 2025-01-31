create database if not exists 'noch';
use 'noch';

create table if not exists tasks (
    id_task int not null auto_increment,
    task varchar(255) not null,
    complete boolean not null default false,
    primary key (id_task)
);
insert into tasks (task,complete) values ('task 1',false)
update tasks set task = ifnull(?,task) , complete = ifnull(?,complete)