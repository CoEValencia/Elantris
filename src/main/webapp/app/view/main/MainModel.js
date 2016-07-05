Ext.define('ProjectElantris.view.main.MainModel', {
	extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    stores: {
        navItems: {
            type: 'tree',            
            fields: [
                     {name: 'conversationId', type: 'int'},
                     {name: 'text', type: 'string'},
                     {name: 'iconCls', type: 'string'}
             ],            
            root: {
                expanded: true
            },
            autoload: true,
            proxy: {
        	    type: 'ajax',
        	    actionMethods: {
        	        read: 'POST'
        	    },        
        	    paramsAsJson: true,
        	    jsonData: '{userName: '+ User.user + ', session: ' + 1212 + '}',
        	    url: '/getopenconversations',
        	    folderSort: true,
        	    reader: {
        	    	type: 'json',
    	    	}
        	},
            listeners: {
            	load: function(store, records, successful, eOpts){    
               		var treePanel = Ext.ComponentQuery.query('treelist[name=conversationtree]')[0]; 
               		var contentPanel = Ext.ComponentQuery.query('panel[name=contentPanel]')[0];
               		for(var i=0; i < records.length; i++){
               		    var record = records[i];
               		    var cat = record.data.children;
               		    for(var j=0; j < cat.length; j++){
               		        console.log(cat[j].conversationId + ' - ' + cat[j].text);
               		        var conv = Ext.create('ProjectElantris.view.stream.Stream', { itemId: 'Conv'+cat[j].conversationId, title: cat[j].text});
               		        contentPanel.add(conv);
               		    }
               		}               		
               	}
            }        	
        }
    }
});