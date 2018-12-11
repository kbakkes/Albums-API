var express = require ('express');

var routes = function(Album){

    var albumRouter = express.Router(); 

    var albumController = require('../controllers/albumController')(Album);

    albumRouter.route('/Albums')
        .post(albumController.post)
        .get(albumController.get)
        .options(albumController.options);



    albumRouter.use('/albums/:_id',function(req,res,next){
       Album.findById(req.params._id, function(err,album){
           if (err)
               res.status(500).send(err);
           else if(album)
           {
               req.album = album;
               next();
           }
               else {
                   res.status(404).send('No Album Found');
           }

       });


   });
    albumRouter.route('/albums/:albumId')
      .get(function(req,res) {

          var returnAlbum = req.album.toJSON();


          returnAlbum.links = {};
          var newLink = 'http://' + req.headers.host + '/api/albums/?genre=' + returnAlbum.genre;
          returnAlbum.links.FilterByThisGenre = newLink.replace('&','%26');
          returnAlbum.links.back = 'http://' + req.headers.host + '/api/albums';
          returnAlbum.links.self = 'http://' + req.headers.host + '/api/' + returnAlbum._id;

          res.json(returnAlbum);

      })


      .put(function(req,res){
          if (req.body.name && req.body.artist && req.body.year && req.body.genre) {
              req.album.name = req.body.name;
              req.album.artist = req.body.artist;
              req.album.genre = req.body.genre;
              req.album.year = req.body.year;
              req.album.save();
              res.json(req.album);
          }
          else {
              res.status(422).send("Some fields are empty")
          }
          })

        .delete(function(req, res){
            req.album.remove(function (err) {
                if (err) {
                    res.status(500).send(err);
                }
                else {
                    res.send(204)
                }
            });
        })

        .options(function (req, res) {
            res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, DELETE, OPTIONS');
            res.header('Allow', 'GET, PATCH, PUT, DELETE, OPTIONS');
            res.sendStatus(200);
        });


    return albumRouter;
};


module.exports = routes;