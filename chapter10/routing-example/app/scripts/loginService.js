angular.module('fifaApp', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/', {
      templateUrl: 'views/team_list.html'
    }).when('/login', {
      templateUrl: 'views/login.html'
    });
    $routeProvider.otherwise({
      templateUrl: 'views/login.html'
    });
  }])
  .factory('LoginService', ['$http', function($http){
     var service = {
      isLoggedIn: false,

      session: function() {
        return $http.get('/api/session')
              .then(function(response) {
          service.isLoggedIn = true;
          return response;
        });
      },

      login: function(user) {
        return $http.post('/api/login', user)
          .then(function(response) {
            service.isLoggedIn = true;
            return response;
        });
      }
    };
    return service;

    /*
    var service = {
      isLoggedIn: false,
      session: function(){
          return $http.get('api/session').then(function(response){
                    isLoggedIn = true;
                    return response;
                  });
      },
      login: function(user){
        return $http.post('api/login', user).then(function(success){
          isLoggedIn = true;
          return success;
        });
      }
    };
    return service;
    */
  }]);
