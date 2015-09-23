'use strict';

angular.module('crwApp')
  .config(['$compileProvider', function($compileProvider) {
    $compileProvider.debugInfoEnabled(false);
  }])
  .controller('CrwCtrl', function () {

    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    };

    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };
  });
