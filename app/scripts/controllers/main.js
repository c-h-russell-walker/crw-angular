'use strict';

angular.module('crwApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

angular.module('crwApp')
  .controller('CrwCtrl', function () {

    this.tab = 1;

    this.selectTab = function(setTab) {
        this.tab = setTab;
    };

    this.isSelected = function(checkTab) {
        return this.tab === checkTab
    };
    
    // Markup in the form of properties - might revisit on the best way to do this
    this.main = {
        about: 'I\'m a web developer, cook, musician & amateur brewer of beer and kombucha.  I live in Brooklyn, NY. and when not pursuing these ventures I enjoy cycling, reading, traveling, kickboxing and laughing at anything funny.'
      };
  });
