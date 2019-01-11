create database database_links;
use database_links;

create table users(
    id int(11) not null primary key AUTO_INCREMENT,
    username varchar(50) not null,
    password varchar(100) not null,
    fullname varchar(100) not null
);


create table links(
    id int(11) not null primary key AUTO_INCREMENT,
    title varchar(150) not null,
    url varchar(255) not null,
    description text null,
    user_id int(11)  null,
    create_at timestamp not null default current_timestamp
);
alter table links add constraint fk_user FOREIGN key (user_id) REFERENCES users(id);


