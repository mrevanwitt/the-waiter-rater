select * from restaurant
restaurant.restaurant_name as 'asdfasdf'
join server on (server.restaurant_id = restaurant.id)
join server_data on (server_data.server_id = server.id)
join manager on (manager.restaurant_id = restaurant.id)

where restaurant.id = 1;
