var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var Books = require('../collections/books.js');

var SearchView = Backbone.View.extend({

    el: '#search',

    events: {
        'submit' : 'search'
    },

    initialize: function(options) {
        if (options && options.router) {
            this.router = options.router;
        }

        if (options && options.collection) {
            this.collection = options.collection;
        }

        this.listenTo(this.collection, 'reset', function() {
            console.log('reset books');
        });

    },

    template: _.template(
        $('#nytBooksSearchTemplate').html()
    ),
        
    render: function () {
        this.$el.html(this.template());
    },

    search: function(evt) {
        evt.preventDefault();        
        var queryString = this.$el.find('form').serialize();

        this.router.navigate('/results?' + queryString, { trigger: true, });
    },

});

module.exports = SearchView;

