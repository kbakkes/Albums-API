"use strict";
require('mongoose-pagination');

var albumController = function(Album) {


    var post = function (req, res) {

        let album = new Album();


        if (req.body.name && req.body.artist && req.body.year && req.body.genre == "") {
            res.status(400);
            res.send("Fill in all field")
        }
        else {

            album.name = req.body.name;
            album.artist = req.body.artist;
            album.genre = req.body.genre;
            album.year = req.body.year;

            album.save(function (err, album) {
                res.status(201).send(album);
            })

        }
    };


    var get = function (req, res) {

        var page = parseInt(req.query.start) || 1;
        var query = {};

        if (req.query.genre) {
            query.genre = req.query.genre;
        }


        Album.find(query, function (err, albums) {
            if (err)
                res.status(500).send(err);
            else
                var returnAlbums = [];

            albums.forEach(function (element, index, array) {
                var newAlbum = element.toJSON();
                newAlbum.links = {};
                newAlbum.links.details = 'http://' + req.headers.host + '/api/' + newAlbum._id;

                returnAlbums.push(newAlbum);
            });
            res.json(returnAlbums);
        });
    };


    var options = function (req, res) {
        res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
        res.header('Access-Control-Allow-Origin', '*');
        res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
        res.end();
    };


    return {

        post: post,
        get: get,
        options: options


    }
};

    module.exports = albumController;

