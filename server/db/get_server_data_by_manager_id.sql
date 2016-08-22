select * from manager
join restaurant on (restaurant.id = manager.restaurant_id)
join server on (server.restaurant_id = restaurant.id)
join server_data on (server_data.server_id = server.id)
where manager.id = $1
