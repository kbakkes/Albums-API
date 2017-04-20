var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');
    require('mongoose-paginate');




// Local
var db = mongoose.connect('mongodb://localhost/albumAPI');

// schoolserver
//     var db = mongoose.connect('mongodb://145.24.222.217/albumAPI');

var Album  = require('./models/albumModel');

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

albumRouter = require('./Routes/albumRoutes')(Album);


app.use('/api', albumRouter);





app.get('/',function(req, res){
    res.send('welcome to my Traphuys API');
});

app.listen(port, function(){
    console.log('Gulp is running my app on PORT:  ' + port);
});

