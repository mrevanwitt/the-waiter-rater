select * from restaurant
join server on (server.restaurant_id = restaurant.id)
join server_data on (server_data.server_id = server.id)

where restaurant.id = $1;
