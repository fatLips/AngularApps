angular.module('serverApp', [])
  .controller('MainCtrl', ['$http', '$log', function($http, $log){
    var self = this;
    self.items = [];
    self.errorMessage = '';

    var fetchTodos = function(){
      return $http.get('/api/note').then(function(successResponse){
      self.items = successResponse.data;
    }, function(failResponse){
      self.errorMessage = failResponse.data.msg;
    })};

    fetchTodos();
  }]);
