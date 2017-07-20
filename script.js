var app = angular.module('wordUp', []);

app.controller('wordCtrl', function($scope) {

var wordList = ['Hi', 'Hungry', 'Food', 'Mommy', 'Daddy',];
var phraseList = ['Yeah Yeah Yeah Yeah', 'Take That Take That', 'Been around the world', 'Mo words mo problems', 'Im the macoroni with the cheese'];
var goodLooks = ['one', 'two', 'three', 'four', 'five'];

  $scope.wordSim =[];

  $scope.addWord = function(){
      var random = wordList[Math.floor(Math.random()*wordList.length)];
      var newRandom = {name: random};
      $scope.wordSim.push({name: random});
    };
    $scope.addWordDeco = function(){
      var random = wordList[Math.floor(Math.random()*wordList.length)];
      var decorations = goodLooks[Math.floor(Math.random()*goodLooks.length)];
      $scope.wordSim.push({name: random, cls: decorations});
    };
    $scope.addMoreWords = function(){
      var random = phraseList[Math.floor(Math.random()*phraseList.length)];
      $scope.wordSim.push({name: random});
    };
    $scope.addMoreWordsDeco = function(){
      var random = phraseList[Math.floor(Math.random()*phraseList.length)];
      var decorations = goodLooks[Math.floor(Math.random()*goodLooks.length)];
      $scope.wordSim.push({name: random, cls: decorations});
    };



  })
