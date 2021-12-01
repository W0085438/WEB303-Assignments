
$(document).ready(function() {
	
	$.getJSON("matrix.json", function (data){
		
		
		
			var character = ''; 
            $.each(data, function (key, value) {
				
				character += '<tr>';
                character += '<td class="name">' + 
				value.name + '</td>';
  
                character += '<td class="bd">' + 
                value.birthdate + '</td>';
  
                character += '<td class="pill">' + 
                value.pill + '</td>';
  
                character += '<td class="sex">' + 
                value.sex + '</td>';
  
                character += '</tr>';
               });
                          
                $('#charlist').append(character);    
		});	
	$('#nSort').on('click', function() {
			var nameText = [];
			var names = nameText.push($('.name').text());
			console.log(names);
	
		});	
});
