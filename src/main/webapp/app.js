Ext.application({
    name: 'ProjectElantris',  
  
    launch: function () {
        Ext.create('ProjectElantris.view.main.Main').show(); 
    }
});

Ext.define('Shelter', { 
    singleton: true, 

    logged: false,
    user: null
}); 