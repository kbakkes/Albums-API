var express = require('express'),
    mongoose = require('mongoose'),
    bluebird = require('bluebird');
bodyParser = require('body-parser');
require('mongoose-paginate');




mongoose.Promise = bluebird;

// Local
var db = mongoose.connect('mongodb://localhost/albumAPI');

// schoolserver
//     var db = mongoose.connect('mongodb://145.24.222.21:27017');

var Album  = require('./models/albumModel');
albumRouter = require('./Routes/albumRoutes')(Album);


var app = express();
var port = process.env.PORT || 3000;

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'origin, content-type, accept');
    if (req.accepts('json' || 'xml' || 'x-www-form-urlencoded')) {
        next();
    } else {
        res.sendStatus(406);
    }
});

app.use('/api/albums', albumRouter);
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());




app.use('/api', albumRouter);



app.get('/',function(req, res){
    res.send('welcome to my Albums API');
});

app.listen(port, function(){
    console.log('Gulp is running my app on PORT:  ' + port);
});

