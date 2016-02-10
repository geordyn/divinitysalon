angular.module('app', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {


  $stateProvider
  ///////USER VIEWS///////
    .state('home', {
      url: '/',
      templateUrl: '/views/homeTmpl.html',
      controller: 'mainCtrl',
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
      controller: 'contactCtrl'
    })
    .state('login', {
      url: '/login',
      templateUrl: '/views/loginTmpl.html',
      controller: 'loginCtrl'
    })

  ///////ADMIN VIEWS/////

  .state('scheduleAdmin', {
    url: '/scheduleAdmin',
    templateUrl: '/views/admin/scheduleAdmin.html',
    controller: 'scheduleAdminCtrl'
    // resolve: {
    //   user: function($state, loginService) {
    //     return loginService.getCurrentUser()
    //       .then(function(res) {
    //         if (res.status != 200) {
    //           console.log('brack');
    //           alert('Unauthorized');
    //           $state.go('home');
    //
    //         } else {
    //           return res.data;
    //         }
    //       }, function(err) {
    //         console.log('brack');
    //         alert('Unauthorized');
    //         $state.go('home');
    //
    //       });
    //   }
    // }
  })

  .state('clientAdmin', {
    url: '/clientAdmin',
    templateUrl: '/views/admin/clientAdmin.html',
    controller: 'clientCtrl',
    // resolve: {
    //   user: function($state, loginService) {
    //     return loginService.getCurrentUser()
    //       .then(function(res) {
    //         if (res.status != 200) {
    //           console.log('brack');
    //           alert('Unauthorized');
    //           $state.go('home');
    //
    //         } else {
    //           return res.data;
    //         }
    //       }, function(err) {
    //         console.log('brack');
    //         alert('Unauthorized');
    //         $state.go('home');
    //
    //       });
    //   }
    // }
  })

  .state('productAdmin', {
    url: '/productAdmin',
    templateUrl: '/views/admin/productAdmin.html',
    controller: 'productAdminCtrl',
    // resolve: {
    //   user: function($state, loginService) {
    //     return loginService.getCurrentUser()
    //       .then(function(res) {
    //         if (res.status != 200) {
    //           console.log('brack');
    //           alert('Unauthorized');
    //           $state.go('home');
    //
    //         } else {
    //           return res.data;
    //         }
    //       }, function(err) {
    //         console.log('brack');
    //         alert('Unauthorized');
    //         $state.go('home');
    //
    //       });
    //   }
    // }
  })

  .state('teamAdmin', {
    url: '/teamAdmin',
    templateUrl: '/views/admin/teamAdmin.html',
    controller: 'teamAdminCtrl',
    // resolve: {
    //   user: function($state, loginService) {
    //     return loginService.getCurrentUser()
    //       .then(function(res) {
    //         if (res.status != 200) {
    //           console.log('brack');
    //           alert('Unauthorized');
    //           $state.go('home');
    //
    //         } else {
    //           return res.data;
    //         }
    //       }, function(err) {
    //         console.log('brack');
    //         alert('Unauthorized');
    //         $state.go('home');
    //
    //       });
    //   }
    // }
  });
  $urlRouterProvider.otherwise('/');

})

.directive('navDir', function() {
    return {
      templateUrl: './dirs/navDir.html',
      restrict: 'E', //directive can only be used as a full element
      //restrict: 'A' restricts attributes
      //can also use both 'EA'
    };
  })
  .directive('calendar-dir', function() {
      return {
        templateUrl: './dirs/calendarDir.html',
        restrict: 'E', //directive can only be used as a full element
        //restrict: 'A' restricts attributes
        //can also use both 'EA'
      };
    })
  .directive('addAptDir', function() {
    return {
      templateUrl: './dirs/addAptDir.html',
      restrict: 'E', //directive can only be used as a full element
      //restrict: 'A' restricts attributes
      //can also use both 'EA'
    };
  });
