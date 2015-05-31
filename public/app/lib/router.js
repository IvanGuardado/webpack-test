var Router = function(){ };

function urlToRegExp(url){
  var r = "^"+url.replace(/\/(:[^\/]+)/gi, "/([^\\/]+)")+"$";
  return new RegExp(r, "i");
}


Router.prototype.set = function(routes) {
  this.routes = routes;
};

Router.prototype.processHash = function() {
  var _this = this;
  var path = window.location.hash.substring(1);
  Object.keys(_this.routes).each(function(route){
    var regexp = urlToRegExp(route);
    if(regexp.test(path)){
      var args = path.match(regexp).slice(1);
      _this.routes[route].apply(null, args);
    }
  });
};

Router.prototype.start = function() {
  var _this = this;

  window.onhashchange = function(e){
    _this.processHash();
  };

  window.onload = function(){
    _this.processHash();
  };
};

module.exports = Router;
