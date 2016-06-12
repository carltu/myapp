/*jshint undef: false, unused: false, indent: 2*/
/*global angular: false */

'use strict';

angular.module('myappApp').controller('KanbanController', ['$scope', 'BoardService', 'BoardDataFactory', function ($scope, BoardService, BoardDataFactory) {

  $scope.kanbanBoard = BoardService.kanbanBoard(BoardDataFactory.kanban);

  $scope.kanbanSortOptions = {

    //restrict move across columns. move only within column.
    /*accept: function (sourceItemHandleScope, destSortableScope) {
     return sourceItemHandleScope.itemScope.sortableScope.$id === destSortableScope.$id;
     },*/
    itemMoved: function (event) {
      //possible attributes

      //console.log('event.source.index = ' + event.source.index);
      //console.log('event.dest.index = ' + event.dest.index);
      //console.log(event.source.sortableScope.$parent.column.name);
      //console.log(event.dest.sortableScope.$parent.column.name);


      console.log(event.dest.sortableScope.$parent.column.cards[event.dest.index].id + 
                    ' From ' + event.source.sortableScope.$parent.column.name + ' ' + 
                    ' To ' + event.dest.sortableScope.$parent.column.name);
      
  
      //console.log(event.source.itemScope.modelValue);

      var moveSuccess, moveFailure;

      /**
       * Action to perform after move success.
       */
      moveSuccess = function() {};

      /**
       * Action to perform on move failure.
       * remove the item from destination Column.
       * insert the item again in original Column.
       */
      moveFailure = function() {   
           event.dest.sortableScope.removeItem(event.dest.index);
           event.source.itemScope.sortableScope.insertItem(event.source.index, event.source.itemScope.modelValue);
      };

      if (event.dest.sortableScope.$parent.column.cards[event.dest.index].id == 2) {
        moveFailure();
      } else {
        event.source.itemScope.modelValue.status = event.dest.sortableScope.$parent.column.name;
      }


    },
    orderChanged: function (event) {
      //test git commit and see what happens
    },
    containment: '#board'
  };

  $scope.removeCard = function (column, card) {
    BoardService.removeCard($scope.kanbanBoard, column, card);
  };

  $scope.addNewCard = function (column) {
    BoardService.addNewCard($scope.kanbanBoard, column);
  }
}]);

