var express = require('express');
var bodyparser = require('body-parser');
var cors = require('cors');
var massive = require('massive');
var connectionString = 'postgres://EvanWitt:1234@localhost/waiterrater';

var app = module.exports = express();
var massiveInstance = massive.connectSync({
    connectionString: connectionString
});
app.set('db', massiveInstance);
var db = app.get('db');

app.use(bodyparser.json());
app.use(cors());
app.use(express.static(__dirname + './../public'));

app.get('/restaurant', function(req, res, next) {
    db.get_all_restaurants(function(err, resuaurants) {
        res.status(200).send(resuaurants);
    });
});

app.get('/restaurant/:id', function(req, res, next) {
    db.get_restaurant_by_id(req.params.id, function(err, restaurant) {
        res.status(200).send(restaurant);
    });
});

app.get('/server/restaurant/:id', function(req, res, next) {
    db.get_all_servers_by_restaurant_id(req.params.id, function(err, servers) {
        res.status(200).send(servers);
    });
});

app.get('/server/:id', function(req, res, next) {
    db.get_server_by_id(req.params.id, function(err, server) {
        res.status(200).send(server);
    });
});

app.post('/addServer', function(req, res, next) {
    db.post_server(req.body.restaurant_id, req.body.first_name, req.body.last_name, req.body.first_name_last_initial, function(err) {
        res.status(200);
    });
});

// app.get('/serverdata/restaurant/:id', function(req, res, next) {
//     db.get_server_data_by_restaurant_id(req.params.id, function(err, serverData) {
//         res.status(200).send(serverData);
//     });
// });

app.get('/serverdata/:id', function(req, res, next) {
  db.get_server_data_by_id(req.params.id, function(err, serverData) {
    //console.log(serverData)
    res.status(200).send(serverData)
  })
})

app.get('/manager', function(req, res, next) {
    db.get_manager(function(err, manager) {
        res.status(200).send(manager);
    });
});

app.get('/serverdata/manager/:id', function(req, res, next) {
    db.get_server_data_by_manager_id(req.params.id, function(err, serverData) {
        res.status(200).send(serverData);
    });
});

app.get('/serverdata/server/:id', function(req, res, next) {
    db.get_server_data_by_server_id(req.params.id, function(err, serverData) {
        //console.log(err);
        res.status(200).send(serverData);
    });
});

app.get('/serverdata/:id', function (req, res) {
  console.log("hit");
  db.server_data.findOne({id: req.params.id}, function (err, serverData) {
    //console.log("SERVER DATA: ", err, serverData);
    res.send(serverData);
  });
});

app.get('/waiter/:id', function (req, res, next) {
  db.get_server_by_id(req.params.id, function(err, server) {
    res.status(200).send(server)
  })
})

app.post('/serverdata', function(req, res, next) {
    db.server_data.insert({
        server_id: req.body.server_id,
        date_created: req.body.date_created,
        customer_service_rating: req.body.customer_service_rating,
        appearance_rating: req.body.appearance_rating,
        drinks_rating: req.body.drinks_rating,
        timeliness_rating: req.body.timeliness_rating,
        accuracy_rating: req.body.accuracy_rating,
        highest_percent: req.body.highest_percent,
        lowest_percent: req.body.lowest_percent,
        bill_total: req.body.bill_total,
        tip_percent: req.body.tip_percent,
        tip_amount: req.body.tip_amount,
        final_bill_total: req.body.final_bill_total,
        feedback: req.body.feedback,
        average: req.body.average
    }, function(err, newServerData) {
        res.send(newServerData);
    });
});

app.delete('/server', function(req, res, next) {
    console.log('delete user by id');
});

app.listen(2814, function() {
    console.log('listening on port 2814');
});
