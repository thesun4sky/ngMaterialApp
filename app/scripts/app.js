'use strict';

/**
 * @ngdoc overview
 * @name smapleAppApp
 * @description
 * # smapleAppApp
 *
 * Main module of the application.
 */
angular
  .module('smapleAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial'
  ])
  .config(function ($routeProvider,$mdThemingProvider, $mdIconProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/my', {
        templateUrl: 'views/my.html',
        controller: 'myCtrl'
      })
      .when('/friend', {
        templateUrl: 'views/friend.html',
        controller: 'FriendCtrl'  //TODO FriendCtrl작성
      })
      .when('/favorite', {
        templateUrl: 'views/favorite.html',
        controller: 'FavoriteCtrl'  //TODO FavoriteCtrl작성
      })
      .when('/event', {
        templateUrl: 'views/event.html',
        controller: 'EventCtrl'  //TODO EventCtrl작성
      })
      .otherwise({
        redirectTo: '/'
      });
    $mdThemingProvider.theme('forest')
      .primaryPalette('brown')
      .accentPalette('green');
    $mdIconProvider
      .defaultIconSet('img/icons/sets/social-icons.svg', 24);
  })
  .controller('DemoCtrl', DemoCtrl)
  .controller('gridListDemoCtrl', function($scope) {
    this.tiles = buildGridModel({
      icon : "avatar:svg-",
      title: "요즘같이 습한날엔 필수탬! 다음에도 꼭 사야지!!",
      background: ""
    });
    function buildGridModel(tileTmpl){
      var it, results = [ ];
      for (var j=0; j<8; j++) {
        it = angular.extend({},tileTmpl);
        it.icon  = it.icon + (j+1);
        it.title = it.title + (j+1);
        it.span  = { row : 1, col : 1 };
        it.num = j%4 +1;   //임시로 4개 아이템순서대로 넣음
        switch(j+1) {
          case 1:
            it.background = "red";
            it.span.row = it.span.col = 2;
            break;
          case 2: it.background = "green";         break;
          case 3: it.background = "darkBlue";      break;
          case 4:
            it.background = "blue";
            it.span.col = 2;
            break;
          case 5:
            it.background = "yellow";
            it.span.row = it.span.col = 2;
            break;
          case 6: it.background = "pink";          break;
          case 7: it.background = "darkBlue";      break;
          case 8: it.background = "purple";        break;
          case 9: it.background = "deepBlue";      break;
          case 10: it.background = "lightPurple";  break;
          case 11: it.background = "yellow";       break;
        }
        results.push(it);
      }
      return results;
    }
  })

  .directive('userCard', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/userCard.tmpl.html',
      scope: {
        name: '@',
        theme: '@'
      },
      controller: function ($scope) {
        $scope.theme = $scope.theme || 'default';
      }
    }
  });



function DemoCtrl ($timeout, $q, $log) {
  var self = this;
  self.simulateQuery = false;
  self.isDisabled    = false;
  self.repos         = loadAll();
  self.querySearch   = querySearch;
  self.selectedItemChange = selectedItemChange;
  self.searchTextChange   = searchTextChange;
  // ******************************
  // Internal methods
  // ******************************
  /**
   * Search for repos... use $timeout to simulate
   * remote dataservice call.
   */
  function querySearch (query) {
    var results = query ? self.repos.filter( createFilterFor(query) ) : self.repos,
      deferred;
    if (self.simulateQuery) {
      deferred = $q.defer();
      $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
      return deferred.promise;
    } else {
      return results;
    }
  }
  function searchTextChange(text) {
    $log.info('Text changed to ' + text);
  }
  function selectedItemChange(item) {
    $log.info('Item changed to ' + JSON.stringify(item));
  }
  /**
   * Build `components` list of key/value pairs
   */
  function loadAll() {
    var repos = [
      {
        'name'      : '리얼픽 그리미 립스틱',
        'maker'       : '이니스프리',
        'price'  : '10,000',
        'watchers'     : '16,175'
      },
      {
        'name'      : '화산송이 클레어 무스 마스크',
        'maker'       : '이니스프리',
        'price'  : '8,000',
        'watchers'     : '16,175'
      },
      {
        'name'      : '애플 쥬시 클렌징오일',
        'maker'       : '이니스프리',
        'price'  : '8,000',
        'watchers'     : '16,175'
      },
      {
        'name'      : '제주한란 인텐스크림',
        'maker'       : '이니스프리',
        'price'  : '9,900',
        'watchers'     : '16,175'
      }
    ];
    return repos.map( function (repo) {
      repo.value = repo.name.toLowerCase();
      return repo;
    });
  }
  /**
   * Create filter function for a query string
   */
  function createFilterFor(query) {
    var lowercaseQuery = angular.lowercase(query);
    return function filterFn(item) {
      return (item.value.indexOf(lowercaseQuery) === 0);
    };
  }
}
