
$(document).ready(function() {
	
	$.getJSON("matrix.json", function (data){
		
		console.log(data);
		
			var character = ''; 
            $.each(data, function (key, value) {
				
				character += '<tr>';
                character += '<td id="name">' + 
				value.name + '</td>';
  
                character += '<td id="bd">' + 
                value.birthdate + '</td>';
  
                character += '<td id="pill">' + 
                value.pill + '</td>';
  
                character += '<td id="sex">' + 
                value.sex + '</td>';
  
                character += '</tr>';
               });
                          
                $('#charlist').append(character);              
            });
	$('#nSort').on('click', function() {
		var nameText = $('#name');
		var names = $('#charlist').find(nameText).text();
		console.log(names);
	});		
			
});
