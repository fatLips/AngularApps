angular.module('filterApp',[])
  .controller('FilterCtrl',[function(){
    this.amount = 8833;
    this.totalCost = 32933;
    this.name = 'Yoori Lee';
    this.startTime = new Date().getTime();
  }]);
