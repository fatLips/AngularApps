describe('ItemCtrl with global Mock', function(){
  var ctrl;
  beforeEach(module('notesApp1'));
  beforeEach(module('notesApp1Mocks'));

  beforeEach(inject(function($controller){
    ctrl = $controller('ItemCtrl');
  }));

  it('Testing mock service', function(){
    expect(ctrl.items).toEqual([{id:1 , label: 'Mock'}]);
  });
});
