angular.module('filterArrayApp', [])
  .controller('filterCtrl', function(){
    this.notes = [
      {label: 'FC Todo', type: 'chore', done: false},
      {label: 'FT Todo', type: 'task', done: false},
      {label: 'FF Todo', type: 'fun', done: true},
      {label: 'SC Todo', type: 'chore', done: true},
      {label: 'ST Todo', type: 'task', done: true},
      {label: 'SF Todo', type: 'fun', done: true},
      {label: 'TC Todo', type: 'chore', done: false},
      {label: 'TT Todo', type: 'task', done: false},
      {label: 'TF Todo', type: 'fun', done: false}
    ];
    this.sortOrder = ['-type','-label'];

    this.filterOptions = {
      "string": '',
      "object": {done: false, label: 'C'}
    };
    this.currentFilter = 'string';
  });
