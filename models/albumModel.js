var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


var albumModel = new Schema({

    name:   {type: String, required: true},
    artist: {type: String, required: true},
    year:   {type: String, required: true},
    genre:  {type: String, required: true}
});

module.exports = mongoose.model('Album', albumModel);
