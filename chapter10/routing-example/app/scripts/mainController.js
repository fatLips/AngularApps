angular.module('fifaApp')
  .controller('MainCtrl', ['LoginService',
    function(LoginService){
      var self = this;
      self.loginService = LoginService;
      LoginService.session();
  }]);
