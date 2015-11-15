var Backbone = require('backbone');
var Book = require('../models/book.js');

var Books = Backbone.Collection.extend({

    initialize: function(options) {

        if (options && options.queryString) {
            this.queryString = options.queryString;
        }

        this.apiKey = '177789c72485f5e8e83d51f7baad56f3:12:51288792';
    },

    parse: function(response) {
        return response.results;
    },

    model: Book,

    url: "http://api.nytimes.com/svc/books/v3/reviews.json",

    sync: function(method, collection, options) {
        if (method === 'read') {
            options.url = this.url + '?api-key=' + 
                this.apiKey + '&' + options.queryString;
            return Backbone.sync('read', collection, options)
        }
    }
});

module.exports = Books;

