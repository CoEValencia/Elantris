Ext.application({
    name: 'ProjectElantris',  
  
    launch: function () {
    	var query = window.location.search.substring(1);    	
    	var session = query.split('&')[1];
    	var params = {session: session};
    	//getsession
    	Ext.Ajax.request({
			url: '/getsession'+'?session='+session,
			method: 'GET',
//			jsonData: params,
			success: function(response, opts){
				var resp = Ext.decode(response.responseText);
				User.user = resp.user;
				User.profilePic = resp.profilePic;
				User.logged = resp.logged;
				Ext.create('ProjectElantris.view.main.Main').show(); 
			},
			failure: function(response, opts){
				Ext.Msg.alert('Error', 'Su session ha caducado');
//				history.back();
			}
    	});
//        Ext.create('ProjectElantris.view.main.Main').show(); 
    }
});

Ext.define('User', { 
    singleton: true, 
    profilePic: 'img/scooby.png',
    logged: false,
    user: 'Scooby Doo'
}); 