describe('Controller: MainCtrl', function(){
  beforeEach(module('notesApp'));
  var ctrl;

  beforeEach(inject(function($controller){
    ctrl  = $controller('MainCtrl');
  }));

  it('should have items available on load', function(){
    expect(ctrl.tab).toEqual('first');
  });

});
