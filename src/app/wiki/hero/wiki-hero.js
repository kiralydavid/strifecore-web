angular.module( 'strifecore.wiki.hero', [
  'ui.router'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'wiki-hero', {
    url: '/wiki/hero',
    views: {
      "main": {
        controller: 'WikiHeroCtrl',
        templateUrl: 'wiki/hero/wiki-hero.tpl.html'
      }
    },
    data:{ pageTitle: 'Heroes' }
  });
})

.controller( 'WikiHeroCtrl', function WikiHeroController( $scope ) {
})

;

