angular.module('notesApp', [])
  .controller('MainCtrl', ['$http', '$log', function($http, $log){
    var self = this;
    self.items = [];
    $http.get('/api/note').then(function(successResponse){
      self.items = successReponse.data;
    }, function(failResponse){
      $log.error("failed response status" + failResponse.status);
    });
  }]);
