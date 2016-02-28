describe('ItemCtrl with spies', function(){
  beforeEach(module('notesApp1'));
  var ctrl, itemService;

  beforeEach(inject(function($controller, ItemService){
    spyOn(ItemService, 'list').and.callThrough();
    ctrl = $controller('ItemCtrl');
    itemService = ItemService;
  }));

  it('Should load mocked out items', function(){
    expect(itemService.list).toHaveBeenCalled();
    expect(itemService.list.calls.count()).toEqual(1);
  });
});
