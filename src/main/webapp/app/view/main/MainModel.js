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
        	}

//            root: {
//                expanded: true,                   
//                style: 'color:red',
//                children: [{
//                	text: 'Categoria 1',
//                	iconCls: 'x-fa fa-comments-o',            		
//            		children: [{            			
//            			text: 'Conversacion 1',
//            			iconCls: 'x-fa fa-comment-o',
//            			leaf: true
//            		}]
//                },{
//                	text: 'Categoria 2',
//            		iconCls: 'x-fa fa-comments-o', 
//            		children: [{
//            			text: 'Conversacion 2',
//            			iconCls: 'x-fa fa-comment-o', 
//            			leaf: true
//            		}]
//                }]
//            }
        	
        	
        	
        }
    }
});