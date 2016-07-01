Ext.application({
    name: 'ProjectElantris',  
  
    launch: function () {
        Ext.create('ProjectElantris.view.main.Main').show(); 
    }
});

Ext.define('User', { 
    singleton: true, 
    profilePic: 'img/scooby.png',
    logged: false,
    user: 'Scooby Doo',
    openConversations: {}
}); 