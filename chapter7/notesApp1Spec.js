describe('ItemCtrl with mock ItemService', function(){
  beforeEach(module('notesApp1'));

  var ctrl, mockService;

  beforeEach(module(function($provide){
    mockService = {
      list: function(){
        return [{id:1 , label: 'Mock'}];
      }
    };
    $provide.value('ItemService', mockService);
  }));

  beforeEach(inject(function($controller){
    ctrl = $controller('ItemCtrl');
  }));

  it('Testing mock service', function(){
    expect(ctrl.items).toEqual([{id:1 , label: 'Mock'}]);
  });

});
