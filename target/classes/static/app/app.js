angular.module('myApp',[
    'ionic',
    'controllers',
    'myServices',
    'directives'
    ])
    .config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider){
		$ionicConfigProvider.platform.ios.tabs.style('standard');
		$ionicConfigProvider.platform.ios.tabs.position('bottom');
		$ionicConfigProvider.platform.android.tabs.style('standard');
		$ionicConfigProvider.platform.android.tabs.position('bottom');
		$ionicConfigProvider.platform.ios.navBar.alignTitle('center');
		$ionicConfigProvider.platform.android.navBar.alignTitle('center');
		$ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
		$ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');
		$ionicConfigProvider.platform.ios.views.transition('ios');
		$ionicConfigProvider.platform.android.views.transition('android');
		
        $stateProvider
            .state('login',{
                url:'/login',
                templateUrl:"app/templates/login.html",
                controller:'loginCtrl'
            })
            /*.state('main',{
                url:'/main',
                abstract:'true',
                templateUrl:'app/templates/main.html',
                controller:'mainCtrl'
            })
            .state('main.chat',{
                url:'/chat',
                views:{
                    'main-chat':{
                        templateUrl:'app/templates/tabs/chat.html',
                        controller:'chatCtrl'
                    }
                }
            })
            .state('main.contacts',{
                url:'/contact',
                views:{
                    'main-contact':{
                        templateUrl:'app/templates/tabs/contact.html',
                        controller:'contactCtrl'
                    }
                }
            })
            .state('main.discovery',{
                url:'/discovery',
                views:{
                    'main-discovery':{
                        templateUrl:'app/templates/tabs/discovery.html',
                        controller:'discovCtrl'
                    }
                }
            })
            .state('main.personal',{
                url:'/personal',
                views:{
                    'main-personal':{
                        templateUrl:'app/templates/tabs/personal.html',
                        controller:'personCtrl'
                    }

                }
            })
            .state('chatDetail',{
                url:'/chatDetail/:id:name',
                templateUrl:'app/templates/chatDetail.html',
                controller:'chatDetailCtrl'
            })
            .state('personDetail',{
                url:'/personDetail',
                templateUrl:'app/templates/personDetail.html',
                controller:'personDetailCtrl'
            })
            .state('searchDetail',{
                url:'/searchDetail',
                templateUrl:'app/templates/searchDetail.html',
                controller:'searchCtrl'
            })
            .state('friendShip',{
                url:'/friendShip',
                templateUrl:'app/templates/friendShip.html',
                controller:'friendCtrl'
            });*/
        $urlRouterProvider.otherwise('login');
    });