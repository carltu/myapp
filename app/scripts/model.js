/*jshint undef: false, unused: false, indent: 2*/
/*global angular: false */

'use strict';
function Board(name, numberOfColumns) {
  return {
    name: name,
    numberOfColumns: numberOfColumns,
    columns: [],
    backlogs: []
  };
}

function Column(name) {
  return {
    name: name,
    cards: []
  };
}

function Backlog(name) {
  return {
    name: name,
    phases: []
  };
}

function Phase(name) {
  return {
    name: name,
    cards: []
  };
}

function Card(id, title, status, details) {
  this.id = id;
  this.title = title;
  this.status = status;
  this.details = details;
  return this;
}
