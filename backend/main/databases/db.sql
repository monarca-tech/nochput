create database if not exists 'noch';
use 'noch';

create table if not exists tasks (
    id_task serial primary key
    task varchar(255) not null,
    complete boolean not null default false,
);
insert into tasks (task,complete) values ('task 1',false)
update tasks set task = ifnull(?,task) , complete = ifnull(?,complete)