var Router = require('./lib/router');
var routes = require('./routes');

var Mainapp = new Class({
  initialize: function(){
    this.router = new Router();
    this.router.set(routes);
    this.router.start();
  },

  test: function(){
    console.log('test');
  }
});


module.exports = new Mainapp();

