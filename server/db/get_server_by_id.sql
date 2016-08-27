select * from server_data

-- join server on (server_data.server_id = server.id);

where server_id = $1;
