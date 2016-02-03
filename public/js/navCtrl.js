angular.module('app')
.controller('navCtrl', function($scope){


var menuLeft = document.getElementById( 'cbp-spmenu-s1' );
var showLeftPush = document.getElementById( 'showLeftPush' );
var body = document.body;

showLeftPush.onclick = function() {
	classie.toggle( this, 'active' );
	classie.toggle( body, 'cbp-spmenu-push-toright' );
	classie.toggle( menuLeft, 'cbp-spmenu-open' );
};




});
