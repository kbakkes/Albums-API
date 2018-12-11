"use strict";
require('mongoose-pagination');

var albumController = function(Album) {


    var post = function (req, res) {

        let album = new Album();


        if (req.body.name && req.body.artist && req.body.year && req.body.genre) {
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


    var get = function (req, res, next) {
        console.log("get");
        var page = parseInt(req.query.start) || 1;
        var query = {};

        if (req.query.client) {
            query.client = req.query.client;
        }

        Album.find().exec((err, countData) => {
            if (err) {
                return next(err);
            }
            var countItems = countData.length;
            var limit = parseInt(req.query.limit) || countItems;
            var albums = {};
            var exclude = {__v: 0};

            Album.find({}, exclude)
                .exec((err, albums) => {
                    if (err) {
                        res.status(500).send(err);
                    } else {
                        let returnAlbums = [];
                        let collection = {
                            'items': [],
                            '_links': [],
                            'pagination': []
                        };
                            albums.forEach(function (element, index, array) {
                                let newAlbums = element.toJSON();
                                newAlbums._links = {};
                                newAlbums._links.self = 'http://' + req.headers.host + '/api/albums/Albums/' + newAlbums._id;
                                newAlbums._links.collection = 'http://' + req.headers.host + '/api/albums/';

                                returnAlbums.push(newAlbums);
                                collection.items = returnAlbums;
                            });

                        collection._links = {};
                        collection._links.self= {
                            'href' : 'http://' + req.headers.host + '/api/albums/'
                        };
                        collection.pagination = {};
                        collection.pagination.First = 'http://' + req.headers.host + '/api/albums/';
                        collection.pagination.Last = 'http://' + req.headers.host + '/api/albums/';
                        collection.pagination.Previous = 'http://' + req.headers.host + '/api/albums/';
                        collection.pagination.Next = 'http://' + req.headers.host + '/api/albums/';
                        res.json(collection);
                        }
                });
        });
    };


    var options = function (req, res) {
        console.log("options");
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

