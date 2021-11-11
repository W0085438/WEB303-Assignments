

$(document).ready(function(){
	$('.accordion').on('click', '.accordion-control', function(e){
		e.preventDefault();
		
		
		
		$(this)
			.toggleClass('active')
			
			.next('.accordion-panel') 
			
			.slideToggle();
		
		/* $('.accordion-panel').each(function( index ) {
			if(!$(this).hasClass(' .active')) {
			
			$(this)
				.slideToggle();
			}
		})	 */	
		
	});
	
	$('.tab-list').each(function() { 				//Find list of tabs
		var $this = $(this);		 				//Store this list
		var $tab = $this.find('li.active');			//Get the active li
		var $link = $tab.find('a');					//Get its link
		var $panel = $($link.attr('href'));			//Get active panel
		
		$this.on('click', '.tab-control', function(e) {		//Click tab
			e.preventDefault();								//Prevent link
			var $link = $(this);							//Store current link
			var id = this.hash;								//Get clicked tab
			
			if(id && !$link.parent().is('.active')) {		//If not active, make panel and tab inactive
				$panel.removeClass('active');
				$tab.removeClass('active');
				$panel = $(id).addClass('active');			//Make new panel and tab active
				$tab = $link.parent().addClass('active');
			}
		});
	});
});