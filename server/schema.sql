create table restaurant (
  id serial primary key not null,
  restaurant_name varchar(100),
  longitude double precision,
  latitude double precision,
  address varchar(100),
  phone_number varchar(20)
);

insert into restaurant
  (restaurant_name, longitude, latitude, address, phone_number)
values
  ('Panda Node Express', 0, 0, 0, 0);

create table server (
  id serial primary key not null,
  restaurant_id int references restaurant(id),
  first_name varchar(30),
  last_name varchar(30),
  first_name_last_initial varchar(35)
);

insert into server
  (restaurant_id, first_name, last_name, first_name_last_initial)
values
  (3, 'Lightning', 'McQueen', 'Lightning M.');

create table server_data (
  id serial primary key not null,
  server_id int references server(id),
  date_created timestamp,
  customer_service_rating int,
  appearance_rating int,
  drinks_rating int,
  timeliness_rating int,
  accuracy_rating int,
  highest_percent int,
  lowest_percent int,
  bill_total money,
  tip_percent double precision,
  tip_amount money,
  final_bill_total money,
  receipt_number varchar(20)
);

insert into server_data
  (server_id, date_created, customer_service_rating, appearance_rating, drinks_rating, timeliness_rating, accuracy_rating, highest_percent, lowest_percent, bill_total, tip_percent, tip_amount, final_bill_total, feedback)
values
  ($1 $2 $3 $4 $5 $6 $7 $8 $9 $10 $11 $12 $13 $14);

create table manager (
  id serial primary key not null,
  restaurant_id int references restaurant(id),
  username varchar(50),
  first_name varchar(30),
  last_name varchar(30)
);

insert into manager
  (restaurant_id, username, first_name, last_name)
values
  (3, 'testmanager', 'Test', 'Manager');


  select * from restaurant
  join server on (server.restaurant_id = restaurant.id)
  join server_data on (server_data.server_id = server.id)
  join manager on (manager.restaurant_id = restaurant.id)
  where restaurant.id = 1

  select * from manager
  join restaurant on (restaurant.id = manager.restaurant_id)
  join server on (server.restaurant_id = restaurant.id)
  join server_data on (server_data.server_id = server.id)
  where manager.id = $1
