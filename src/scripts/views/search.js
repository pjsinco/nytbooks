var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');

var SearchView = Backbone.View.extend({

    el: '#nytBooks',

    events: {
        'submit' : 'search'
    },

    initialize: function () {
    },

    template: _.template(
        $('#nytBooksSearchTemplate').html()
    ),
        
    render: function () {
        this.$el.append(this.template());
    },

    search: function() {
debugger;
        evt.preventDefault();        
    },

});

module.exports = SearchView;

