var Backbone = require('backbone');
var Book = require('../models/book.js');

var Books = Backbone.Collection.extend({

    initialize: function() {
        this.apiKey = '177789c72485f5e8e83d51f7baad56f3:12:51288792';
    },

    model: Book,

    url: "http://api.nytimes.com/svc/books/v3/reviews.json",


});

module.exports = Books;

