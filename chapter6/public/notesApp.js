angular.module('notesApp', [])
  .controller('MainCtrl', ['$http', '$log', function($http, $log){
    var self = this;
    self.items = [];

    var fetchTodos = function(){
      return $http.get('/api/note').then(function(successResponse){
      self.items = successResponse.data;
    }, function(failResponse){
      $log.error("failed response status" + failResponse.status);
    })};

    fetchTodos();

    self.add = function(){
      $http.post('/api/note', self.newTodo)
      .then(fetchTodos)
      .then(function(response){
        self.newTodo = {};
      })
    }
  }]);
