angular.module( 'strifecore.loginbox', [
        'ngLadda',
        'ngAnimate'
    ])
    .config(['$httpProvider', function($httpProvider) {

    }])
    .factory('LoginService', function($http){
        return {
            login: function(username, password) {
                return $http.post('/api/v1/login', {
                    username: username,
                    password: password
                });
            }
        };
    })
    .directive('loginBox', ['LoginService', function(LoginService){
        return {
            scope: {
                user: '=userHolder'
            },
            templateUrl: 'loginbox/loginbox.tpl.html',
            link: function LoginBoxController( $scope ) {
                $scope.loginError = false;
                $scope.loading = false;

                $scope.login = function() {
                    $scope.loginError = false;
                    $scope.loading = true;
                    LoginService.login($scope.username, $scope.password)
                        .success(function(data, status, headers, config) {
                            $scope.username = "";
                            $scope.password = "";
                            $scope.user = {
                                name: data.name,
                                isAdmin: false
                            };
                        })
                        .error(function(data, status, headers, config) {
                            if(status == 401) {
                                $scope.loginError = true;
                            } else {
                                $scope.loginError = true;
                            }
                        })
                        ['finally'](function(data, status, headers, config){
                        $scope.loading = false;
                    });
                };

                $scope.logout = function() {
                    $scope.user = undefined;
                };
            }
        };
    }])

;

