// WEB303 Assignment 2
// Adam Campeau (0085438)



$("document").ready(function() {
	$("a#vprospect").click(function() {
		$("#solution").load("prospect.html").hide().fadeIn(500);
	})
	$("a#vconvert").click(function() {
		$("#solution").load("convert.html");
	})
	$("a#vretain").click(function() {
		$("#solution").load("retain.html");
	})
});


