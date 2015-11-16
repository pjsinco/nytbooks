var Backbone = require('backbone');
var _ = require('underscore');
var BookView = require('./book.js');

var ResultsView = Backbone.View.extend({

    el: '#searchResults',

    events: {
        
    },

    initialize: function(options) {
        if (options && options.collection) {
            this.collection = options.collection;
        }
        
    },

    render: function() {

        var html = '';
        _.each(this.collection.models, function(model, index) {
            var bookView = new BookView({ model: model });
            html += bookView.render();
        });

        this.$el.html(html);
        
        return this;

    },

    template: _.template(
        $('#nytBooksResultsTemplate').html()
    ),

    addBook: function(book, index) {
        var bookView = new BookView({ model: book });
        this.$el.find('.books').append(bookView.render());
        
    },

});

module.exports = ResultsView;

