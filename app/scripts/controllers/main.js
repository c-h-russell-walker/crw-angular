'use strict';

angular.module('crwApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })

  .controller('ngBindHtmlCtrl', ['$scope', function ngBindHtmlCtrl($scope) {
      $scope.appHTML =
         'I am an <code>HTML</code>string with <a href="#">links!</a> and other <em>stuff</em>';
    }])

  .controller('CrwCtrl', function () {

    this.tab = 1;

    this.selectTab = function(setTab) {
        this.tab = setTab;
      };

    this.isSelected = function(checkTab) {
        return this.tab === checkTab;
      };
    
    // Markup in the form of properties - might revisit on the best way to do this
    this.main = {
        about: {
            paragraphs: [
                'I\'m a web developer, cook, musician & amateur brewer of beer and kombucha.  I live in Brooklyn, NY. and when not pursuing these ventures I enjoy cycling, reading, traveling, kickboxing and laughing at anything funny.',
                '<<<Update SinglePlatform>>>.  I work at &lt;a href="http://www.nutraclick.com" target="_blank"&gt;<strong>NutraClick</strong></a> as a full stack developer tackling things small, large and extraordinary.  The challenges encountered so far have strengthened my skills and solidified my commitment to becoming the most well rounded developer I can be.  I\'ve worked for a web development and design company located in New York - <a href="http://www.zooluweb.com" title="website design shop"><strong>Zoolu Web Solutions</strong></a> as well as a financial consulting firm <a href="http://www.truebridge.com"><strong>Truebridge</strong></a> expanding on a browser based CRM.  These jobs complemented my learning while completing my CS degree from BU and playing as much music as I could.',
                'XXX - More updates'
              ]
            }
          };
  });
