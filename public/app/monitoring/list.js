var render = require('render');
var HTML = {
  list: require('./views/list.html'),
  item: require('./views/list-item.html')
};

module.exports = function(){
  var list = [
    {
      name: 'One',
      url: '/monitoring/one'
    },
    {
      name: 'Two',
      url: '/monitoring/two'
    }
  ];

  var itemsHTML = list.map(function(item){
    return HTML.item.substitute({
      name: item.name,
      url: item.url
    });
  }).join('');

  render(HTML.list.substitute({
    items: itemsHTML
  }));

};
