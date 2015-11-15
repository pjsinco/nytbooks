var Backbone = require('backbone');
var AppView = require('../views/app.js');

var AppRouter = Backbone.Router.extend({

    routes: {
        '': 'index'
    },

    initialize: function() {

    },

    index: function() {
        var appView = new AppView({ router: this });        
        appView.render();
    },

});

module.exports = AppRouter;
