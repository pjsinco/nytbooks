var Backbone = require('backbone');
$ = require('jquery');
var _ = require('underscore');
var SearchView = require('./search.js');

var AppView = Backbone.View.extend({

    el: '#nytBooksTemplate',

    initialize: function(options) {
        this.searchView = new SearchView(); 
        this.searchView.render(); 
    },

    template: _.template(
        $('#nytBooksTemplate').html()
    ),
        
    render: function () {
        this.$el.html(this.template());
    },



});

module.exports = AppView;

