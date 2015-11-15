var Backbone = require('backbone');
Backbone.$ = require('jquery');
var Book = require('./models/book.js');
var AppRouter = require('./routers/router.js');

Backbone.$(document).ready(function() {

    console.log('hiya');

    var router = new AppRouter();
    
    Backbone.history.start();

});
