var Backbone = require('backbone');

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
var length = this.collection.length;
        this.$el.html(length);
    }

});

module.exports = ResultsView;

