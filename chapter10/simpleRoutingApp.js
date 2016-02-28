angular.module('simpleRoutingApp',['ngRoute'])
  .value('Constant', {MAGIC_NUMBER: 42})
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
      .when('/', {
        template: '<h5>This is the default route</h5>'
      }).when('/second', {
        template: '<h5>This is the second route</h5>'
      }).when('/protected', {
        template: '<h2>Protected PAge</h2>',
        resolve: {
          immediate: ['Constant', function(Constant){
            return Constant.MAGIC_NUMBER *4;
          }],
          async: ['$http', function($http){
            return $http.get('/api/note');
          }]
        },
        controller: ['$log', 'immediate', 'async'
              , function($log, immediate, async){
                $log.log('Immdeiate is ' + immediate);
                $log.log('asysnc is ' + async.data);
              }]
      }).when('/detail/:detailId',{
           template: '<h2>detail page: {{myCtrl.q}} - {{myCtrl.detailId}}</h2>',
           controller: ['$routeParams', function($routeParams){
              this.detailId = $routeParams.detailId;
              this.q = $routeParams.q;
           }],
           controllerAs: 'myCtrl'
      })
      .otherwise({redirectTo: '/'});
  }]);
