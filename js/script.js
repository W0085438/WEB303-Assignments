// WEB303 Assignment 2
// Adam Campeau (0085438)



$("document").ready(function() {
	$("a#vprospect").click(function() {
		$("#solution").load("prospect.html").hide().fadeIn(1000);
	})
	$("a#vconvert").click(function() {
		$("#solution").load("convert.html").hide().fadeIn(1000);
	})
	$("a#vretain").click(function() {
		$("#solution").load("retain.html").hide().fadeIn(1000);
	})
});


