var render = require('render');
var html   = require('./views/home.html');

module.exports = {
  show: function(){
    render(html);
  }
};
