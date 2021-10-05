$(function usingJson() {
	$.getJSON("team.json").done(function (data){
		console.log(data);
		$.each(data.teammembers, function(index, value){
			var memName = $("<h2></h2>").text(value.name); 
			var memTitle = $("<h4></h4>").text(value.title);
			var memBio = $('<p></p>').text(value.bio);
			$(`div#team`).append(memName);
			$(`div#team`).append(memTitle);
			$(`div#team`).append(memBio);
		});
	});
});

$(function usingAjax() {
	$.ajax({url: "team.json", success: function(data){
		$.each(data.teammembers, function(index, value){
			var memName = $("<h2></h2>").text(value.name); 
			var memTitle = $("<h4></h4>").text(value.title);
			var memBio = $('<p></p>').text(value.bio);
			$(`div#team`).append(memName);
			$(`div#team`).append(memTitle);
			$(`div#team`).append(memBio);
		});
	}});
});