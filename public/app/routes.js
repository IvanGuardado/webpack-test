function load(_section, _params){
  var args = Array.prototype.slice.apply(arguments);
  var section = args.shift();

  return function(module){
    module[section].apply(null, args);
  };
}

module.exports = {
  '/monitoring': function(){
    require(['./monitoring'], load('list'));
  },

  '/monitoring/:id': function(id){
    require(['./monitoring'], load('report', id));
  },

  '/campaings': function(){
    require(['./campaigns'], load('list'));
  },

  '/': function(){
    require(['./home'], load('show'));
  }
};


