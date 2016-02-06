angular.module('app')
.controller('navCtrl', function($scope, loginService){


var menuLeft = document.getElementById( 'cbp-spmenu-s1' );
var showLeftPush = document.getElementById( 'showLeftPush' );
var body = document.body;

showLeftPush.onclick = function() {
	classie.toggle( this, 'active' );
	classie.toggle( body, 'cbp-spmenu-push-toright' );
	classie.toggle( menuLeft, 'cbp-spmenu-open' );
};


//////log in & log out shit/////


// loginService.getCurrentUser().then(function(result, loggedIn){
// 	$scope.user = result.data;
// });

// $scope.logout = function() {
// 	loginService.logout()
// 	.then( function(res){
//
// 	});
// };



});
