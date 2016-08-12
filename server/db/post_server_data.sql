insert into server_data
  (server_id, date_created, customer_service_rating, appearance_rating, drinks_rating, timeliness_rating, accuracy_rating, highest_percent, lowest_percent, bill_total, tip_percent, tip_amount, final_bill_total, feedback)
values
  ($1 $2 $3 $4 $5 $6 $7 $8 $9 $10 $11 $12 $13 $14);
