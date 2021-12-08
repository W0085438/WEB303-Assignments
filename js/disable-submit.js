$(document).ready(function(){
    
  var userName = document.getElementById('username');    
  var submit = document.getElementById('submit'); 
  var terms = document.getElementById('terms');
  var submitted = false;                            
  submit.disabled = true;                         
  submit.className = 'disabled';                  
 
 
	 $('#username').on('input', function confirmUsername(){
		if(userName.value != ""){
			console.log("IT WORKZ!")
			return true;
		} else {
			console.log("IT NO WORK!");
			return false;
		}
	 });
	 
	 $('#confirm').on('input', function confirmPwd() {
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
		
		function addEvent(country, change) { 
		if (this.value === 'sel') { 
			console.log("CHOOSE A COUNTRY!!");
		
		};
		
		};
		
		$('#terms').on ('chk', function confirmTerms(){
			console.log("HOORAH!!")
		});
		
		(function() {
			addEvent(form, 'submit', function(e) {
				e.preventDefault();
				var elements = this.elements;
				var msg = 'Welcome ' + userName + 'The country code you selected is: ' + countryCode;
			})
		})

  
});
