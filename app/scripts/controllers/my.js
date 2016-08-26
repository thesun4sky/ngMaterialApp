/**
 * Created by Hosea on 2016-08-26.
 */
angular.module('smapleAppApp')
  .controller('myCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.repos = [
      {
        'name' : '리얼픽 그리미 립스틱',
        'maker' : '이니스프리',
        'review' : '좋아요',
        'image' : 'grid01.PNG'
      },
      {
        'name'      : '화산송이 클레어 무스 마스크',
        'maker'       : '이니스프리',
        'review' : '좋아요',
        'image' : 'grid02.PNG'
      },
      {
        'name'      : '애플 쥬시 클렌징오일',
        'maker'       : '이니스프리',
        'review' : '느들 써봤니?',
        'image' : 'grid03.PNG'
      },
      {
        'name'      : '제주한란 인텐스크림',
        'maker'       : '이니스프리',
        'review' : '군대서 마니씀',
        'image' : 'grid04.PNG'
      }
    ];
  });
