angular.module( 'strifecore.wiki', [
  'ui.router'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'wiki', {
    url: '/wiki',
    views: {
      "main": {
        controller: 'WikiCtrl',
        templateUrl: 'wiki/wiki.tpl.html'
      }
    },
    data:{ pageTitle: 'Wiki' }
  });
})

.controller( 'WikiCtrl', function WikiController( $scope ) {
})

;

