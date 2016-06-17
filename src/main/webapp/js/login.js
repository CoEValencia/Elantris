var myForm = document.getElementById('loginForm');
myForm.addEventListener('submit', function(e)
{
	e.preventDefault();
	
	var data = {}
	data["name"] = $("#loginName").val();
	data["password"] = $("#loginPassword").val();
	
	$.ajax({
		type : "POST",
		contentType : "application/json",
		url : "login",
		data : JSON.stringify(data),
		dataType : 'json',
		timeout : 100000,
		success : function(data) {						
			window.location = '/indext.html?session&'+ data.session;			
		},
		error : function(e) {
			console.log("ERROR: ", e);
			display(e);
		},
		done : function(e) {
			console.log("DONE");
		}
	});
}); 