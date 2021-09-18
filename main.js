'use strict'

/*
	WEB 303
	Starting file for Assignment 1 
	Adam Campeau - 0085438
*/

$("document").ready(function() {
	
	$('#salary'&&'#percent').on('change', function() {
		
		var $salary = parseInt($('#salary').val());
		var $percent = parseInt($('#percent').val());
		var $spend = 0;
	
		$spend = $salary * $percent / 100;
		$("#spend").text("$" + $spend);
	});
	
});