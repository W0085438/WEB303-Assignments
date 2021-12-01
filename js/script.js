
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
		
		$('.charlist').each(function() {
			var $table = $(this);
			var $tbody = $table.find('tbody');
			var $controls = $table.find('a');
			var rows = $tbody.find('tr').toArray();
		
		$controls.on('click', function() {
			var $anchor = $(this);
			var order = $anchor.data('sort');
	
		});	
	});
});
