var render = require('render');
var html   = require('./views/report.html');


module.exports = function(reportID){
  render(html.substitute({
    name: reportID
  }));
};
