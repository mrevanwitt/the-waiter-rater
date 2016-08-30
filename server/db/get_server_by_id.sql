select * from server_data

join server on (server.id = server_data.server_id)

where server_id = $1;
