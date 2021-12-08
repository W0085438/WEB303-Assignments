$(document).ready(function(){
    // The form
  var userName = document.getElementById('username');     // Username input
  var submit = document.getElementById('submit');  // Submit button
  var submitted = false;                            // Has form been submitted?
  submit.disabled = true;                           // Disable submit button
  submit.className = 'disabled';                    // Style submit button
 
 
	 $('#confirm').on('input', function() {
		 var form = document.getElementById('testForm');
		 var pwd = document.getElementById('password');
		 var conf = document.getElementById('confirm');
		 
		 
		if(pwd.value === conf.value){
			//console.log("IT WORKED!!")
			submit.disabled = false;
			submit.className = 'enabled';
			return true;
		} else {
			//console.log("NO MATCH!!");
			return false;
		}
		});
		
		function addEvent(country, change) { // Change select box
		if (this.value === 'sel') { // No selection made
			console.log("CHOOSE A COUNTRY!!");
		
		};
		//var choose = document.getElementById(''); 
		/* if(country.selectedIndex = 'sel'){
			console.log("CHOOSE A COUNTRY!!");
		} else {
			console.log("YOU CHOSE A COUNTRY!!");
		} */
	};

  // On input: Check whether or not to enable the submit button
  /* addEvent(userName, 'input', function (e) {         // On input of password
    var target = e.target || e.srcElement;          // Target of event
    submit.disabled = submitted || !target.value;   // Set disabled property
    // If form has been submitted or username has no value set CSS to disabled
    submit.className = (submitted || !target.value) ? 'disabled' : 'enabled';
  }); */
  
});
