var Backbone = require('backbone');
var AppView = require('../views/app.js');
var Books = require('../collections/books.js');
var ResultsView = require('../views/results.js');

var AppRouter = Backbone.Router.extend({

    routes: {
        '': 'index',
        'results?*queryString': 'searchResults'
    },

    initialize: function() {
        this.books = new Books();
        this.appView = new AppView({ 
            router: this,
            books: this.books,
        });        
    },

    index: function() {
    },

    searchResults: function(options) {
        this.books.fetch({ 
            queryString: options,
            reset: true 
        });
    },


});

module.exports = AppRouter;
