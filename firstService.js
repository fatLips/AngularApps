angular.module('notesApp', [])
  .controller('MainCtrl', [function () {
    var self = this;
    self.tab = 'first';
    self.open = function(tab){
      self.tab = tab;
    };
  }])
  .controller('SubCtrl', ['ItemService', function(ItemService){
    var self = this;
    self.list = function(){
      var temp = ItemService.list();
      return temp;
    };
    self.add = function(){
      ItemService.add(
        {id: ItemService.list().length, label: 'ITEM ' + ItemService.list().length}
      );
    };
  }])
  .factory('ItemService', ['$log', function($log){
    var items = [
      {id:1, label: 'ITEM 0'},{id:2, label: 'ITEM 1'}
    ];
    return {
      list: function(){
        return items;
      },
      add: function(item){
        items.push(item);
      }
    };
  }]);
