-- create tables
create table if not exists mydb.sports
(
    id int auto_increment not null primary key,
    name varchar(50) not null,
    status boolean not null default true,
    recUpdatedAt timestamp not null default current_timestamp on update current_timestamp,
    createdAt timestamp not null default current_timestamp
);

create table if not exists mydb.tours
(
    id int auto_increment not null primary key,
    name varchar(50) not null,
    sportId int not null,
    status boolean not null default true,
    startTime timestamp not null,
    endTime timestamp not null,
    recUpdatedAt timestamp not null default current_timestamp on update current_timestamp,
    createdAt timestamp not null default current_timestamp,
    foreign key (sportId) references sports(id)
);

create table if not exists mydb.matches
(
    id int auto_increment not null primary key,
    name varchar(50) not null,
    tourId int not null,
    status boolean not null default true,
    format varchar(50) not null,
    startTime timestamp not null,
    endTime timestamp not null,
    recUpdatedAt timestamp not null default current_timestamp on update current_timestamp,
    createdAt timestamp not null default current_timestamp,
    foreign key (tourId) references tours(id)
);



-- seed data

insert ignore into mydb.sports (id, name) values (1, 'Cricket');
insert ignore into mydb.sports (id, name) values (2, 'Football');

insert ignore into mydb.tours (id, name, sportId, startTime, endTime) values (1, 'Indian Premier League, 2023', 1, '2023-04-09 00:00:00', '2023-05-30 00:00:00');
insert ignore into mydb.tours (id, name, sportId, startTime, endTime) values (2, 'India Super League, 2023', 2, '2023-04-21 00:00:00', '2023-06-20 00:00:00');
insert ignore into mydb.tours (id, name, sportId, startTime, endTime) values (3, 'India Tour of West Indies, 2023', 1, '2023-06-10 00:00:00', '2023-06-29 00:00:00');
insert ignore into mydb.tours (id, name, sportId, startTime, endTime) values (4, 'English Premier League, 2022', 2, '2022-04-09 00:00:00', '2022-05-30 00:00:00');

insert ignore into mydb.matches (name, tourId, format, startTime, endTime) values ('GT vs RCB', 1, 'T20', '2023-04-09 18:00:00', '2023-04-09 23:00:00');
insert ignore into mydb.matches (name, tourId, format, startTime, endTime) values ('CSK vs MI', 1, 'T20', '2023-04-10 18:00:00', '2021-04-10 23:00:00');
insert ignore into mydb.matches (name, tourId, format, startTime, endTime) values ('LSG vs KXIP', 1, 'T20', '2023-04-11 18:00:00', '2023-04-11 23:00:00');
insert ignore into mydb.matches (name, tourId, format, startTime, endTime) values ('RR vs SRH', 1, 'T20', '2023-04-12 18:00:00', '2023-04-12 23:00:00');
insert ignore into mydb.matches (name, tourId, format, startTime, endTime) values ('BLR vs BEN', 2, 'soccer', '2023-04-29 18:00:00', '2023-04-29 23:00:00');
insert ignore into mydb.matches (name, tourId, format, startTime, endTime) values ('ATK vs MCFC', 2, 'soccer', '2023-04-21 18:00:00', '2023-04-21 23:00:00');
insert ignore into mydb.matches (name, tourId, format, startTime, endTime) values ('KER vs JFC', 2, 'soccer', '2023-04-22 18:00:00', '2023-04-22 23:00:00');
insert ignore into mydb.matches (name, tourId, format, startTime, endTime) values ('IND vs WI', 3, 'ODI', '2023-06-10 10:00:00', '2023-06-10 23:00:00');
insert ignore into mydb.matches (name, tourId, format, startTime, endTime) values ('IND vs WI', 3, 'ODI', '2023-06-12 10:00:00', '2023-06-12 23:00:00');
insert ignore into mydb.matches (name, tourId, format, startTime, endTime) values ('IND vs WI', 3, 'ODI', '2023-06-14 10:00:00', '2023-06-14 23:00:00');
insert ignore into mydb.matches (name, tourId, format, startTime, endTime) values ('KER vs JFC', 4, 'soccer', '2022-04-09 18:00:00', '2022-04-09 23:00:00');




-- PROBLEM 1
CREATE INDEX tour_name_index ON tours(name);


-- PROBLEM 3
create table if not exists mydb.news
(
    id int auto_increment not null primary key,
    matchId int,
    tourId int not null,
    title varchar(50) not null,
    description varchar(50) not null,

    recUpdatedAt timestamp not null default current_timestamp on update current_timestamp,
    createdAt timestamp not null default current_timestamp,
    foreign key (matchId) references matches(id),
    foreign key (tourId) references tours(id)
);


insert ignore into mydb.news (title, description, matchId, tourId) values ('Match 1 is live', "Match started at 3.30pm", 1, 1);
insert ignore into mydb.news (title, description, matchId, tourId) values ('Match 2 will start after Match 1', "Match 1 will be over by 5.30pm", 2, 1);
insert ignore into mydb.news (title, description, matchId, tourId) values ('Today IPL has 2 games, Match & Match 2', "Desc 3", null, 1);
insert ignore into mydb.news (title, description, matchId, tourId) values ('Match 3 has umpire X', "X has 20 year of experience", 5, 2);
insert ignore into mydb.news (title, description, matchId, tourId) values ('Match 4 will held bw GT vs CSK', "2nd game between GT & CSK", 6, 2);
insert ignore into mydb.news (title, description, matchId, tourId) values ('Match 5 will held bw MI vs RCB', "11th game of the tournament", 7, 2);
insert ignore into mydb.news (title, description, matchId, tourId) values ('IPL final will happen at 8.00pm', "Grand Opening at 6.00 pm", null, 2);
insert ignore into mydb.news (title, description, matchId, tourId) values ('Match 5 will held bw MI vs RCB', "11th game of the tournament", 10, 3);
insert ignore into mydb.news (title, description, matchId, tourId) values ('IPL semi-final 1 winner CSK', "CSK beat MI by 12 runs",null, 3);
insert ignore into mydb.news (title, description, matchId, tourId) values ('Match 5 will held bw MI vs RCB', "11th game of the tournament", 11, 4);
insert ignore into mydb.news (title, description, matchId, tourId) values ('IPL semi-final 2 winner GT', "GT won by 4 wicket", null, 4);




