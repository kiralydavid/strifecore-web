angular.module( 'strifecore', [
  'templates-app',
  'templates-common',
  'ui.router',
  'strifecore.home',
  'strifecore.wiki',
  'strifecore.wiki.hero',
  'strifecore.loginbox'
])

.config( function myAppConfig ( $locationProvider, $stateProvider, $urlRouterProvider, $httpProvider ) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise( '/home' );

  var interceptor = function ($rootScope, $q, $location) {

      function success(response) {
          return response;
      }

      function error(response) {

          var status = response.status;
          var config = response.config;
          var method = config.method;
          var url = config.url;

          if (status == 401 && url.indexOf("login") == -1) {
              $location.path( "/login" );
          } else {
              $rootScope.error = method + " on " + url + " failed with status " + status;
          }

          return $q.reject(response);
      }

      return function (promise) {
          return promise.then(success, error);
      };
  };
  $httpProvider.responseInterceptors.push(interceptor);
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {

  $scope.user = undefined;

  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | StrifeCore' ;
    }
  });
})

;

