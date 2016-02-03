angular.module('app', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider){


$stateProvider
///////USER VIEWS///////
.state('home', {
  url: '/',
  templateUrl: '/views/homeTmpl.html',
  controller: 'mainCtrl',
})
.state('calendar', {
  url: '/',
  templateUrl: '/views/calendarTmpl.html',
  controller: 'calendarCtrl'
})
  .state('about', {
    url: '/about',
    templateUrl: '/views/aboutTmpl.html',
    controller: 'mainCtrl',
  })
  .state('services', {
    url: '/services',
    templateUrl: '/views/serviceTmpl.html',
    controller: 'mainCtrl'
  })
  .state('team', {
    url: '/team',
    templateUrl: '/views/teamTmpl.html',
    controller: 'mainCtrl'
  })
  .state('products', {
    url: '/products',
    templateUrl: '/views/productTmpl.html',
    controller: 'mainCtrl'
  })
  .state('contact', {
    url: '/contact',
    templateUrl: '/views/contactTmpl.html',
    controller: 'mainCtrl'
  })
  .state('login', {
    url: '/login',
    templateUrl: '/views/loginTmpl.html',
    controller: 'loginCtrl'
  })

///////ADMIN VIEWS///////
  .state('overviewAdmin', {
    url: '/overviewAdmin',
    templateUrl: '/views/admin/overviewAdmin.html',
    controller: 'overviewCtrl'
  })
  .state('scheduleAdmin', {
    url: '/scheduleAdmin',
    templateUrl: '/views/admin/scheduleAdmin.html',
    controller: 'scheduleCtrl'
  })
  .state('clientAdmin', {
    url: '/clientAdmin',
    templateUrl: '/views/admin/clientAdmin.html',
    controller: 'clientCtrl'
  })
  .state('productAdmin', {
    url: '/productAdmin',
    templateUrl: '/views/admin/productAdmin.html',
    controller: 'productAdminCtrl'
  })
  .state('teamAdmin', {
    url: '/teamAdmin',
    templateUrl: '/views/admin/teamAdmin.html',
    controller: 'teamAdminCtrl'
  });
  $urlRouterProvider.otherwise('/');

})

.directive('navDir', function(){
  return {
    templateUrl: './dirs/navDirTmpl.html',
    restrict: 'E', //directive can only be used as a full element
    //restrict: 'A' restricts attributes
    //can also use both 'EA'
  };
})
.directive('addAptDir', function(){
  return {
    templateUrl: './dirs/addAptDir.html',
    restrict: 'E', //directive can only be used as a full element
    //restrict: 'A' restricts attributes
    //can also use both 'EA'
  };
});
