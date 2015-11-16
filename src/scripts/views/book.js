var Backbone = require('backbone');
var _ = require('underscore');

var BookView = Backbone.View.extend({

    events: {
        
    },

    initialize: function () {
        
    },

    template: _.template(
        $('#nytBooksBookTemplate').html()
    ),
          

    render: function () {
        return this.template(this.model.toJSON());
    }

});

module.exports = BookView;

