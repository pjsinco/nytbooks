var Backbone = require('backbone');
$ = require('jquery');
var _ = require('underscore');
var SearchView = require('./search.js');
var Books = require('../collections/books.js');
var ResultsView = require('../views/results.js');

var AppView = Backbone.View.extend({

    initialize: function(options) {

        if (options && options.books) {
            this.books = options.books;
        }

        this.resultsView = new ResultsView({ collection: this.books });

        if (options && options.router) {
            this.router = options.router;

            this.searchView = new SearchView({ 
                collection: this.books,
                router: this.router 
            }); 
            this.searchView.render(); 
        }

        this.listenTo(this.books, 'reset', function(collection) {
            this.resultsView.render(collection);
        });
    },

//    template: _.template(
//        $('#nytBooksTemplate').html()
//    ),
//        
//    render: function () {
//        this.$el.html(this.template());
//    },



});

module.exports = AppView;

