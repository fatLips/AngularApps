angular.module('fifaApp')
  .controller('LoginCtrl', ['LoginService', '$location', function(LoginService, $location){
    var self = this;

    self.user = {userName: '' , password: ''};

    self.login = function(){
      LoginService.login(self.user).then(
        function(response){
        $location.path('/team');
      },function(error){
        self.errorMsg = error.data.msg;
      });
    };
  }]);
