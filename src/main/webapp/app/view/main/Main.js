Ext.define('ProjectElantris.view.main.Main', {
	extend: 'Ext.container.Viewport',	
	xtype: 'app-main',
	
	cls: 'elantris-title-bar',
	scrollable: false,
	
	requires : [ 
            	 'Ext.plugin.Viewport',
	             'ProjectElantris.view.main.MainController',
	             'ProjectElantris.view.main.MainModel',
	             'ProjectElantris.view.stream.Stream',
	             'ProjectElantris.view.stream.StreamController',
	             'ProjectElantris.view.stream.Message',
	             'ProjectElantris.view.stream.MessageInputBox',
	             'ProjectElantris.view.stream.MessageInputBoxController',
	             'ProjectElantris.view.stream.Conversation',
	             'ProjectElantris.view.stream.ConversationController',
	             'ProjectElantris.store.stream.MessageStore',
	             'ProjectElantris.model.stream.MessageModel',
	             'ProjectElantris.store.main.ConversationTreeStore',	             
	             'ProjectElantris.model.main.ConversationTreeModel'	                      
    ],
    
    viewModel: {
        type: 'main'
    },
	
    controller: 'main',
    
    //iconCls: 'fa fa-users',
    layout: 'border',

    defaultType: 'panel',
    
    items: [{
    	title: 'Elantris',
        iconCls: 'fa fa-diamond',
        region: 'north', 
    	tools:[{
	        xtype: 'toolbar',	        
	        items:[{
	        	xtype: 'combo',
	        	width: 250,
	        	hideTrigger: true,
	            minChars: 5,		            
	        	displayField: 'nombre',
	        	valueField: 'id',
        		typeAhead: true,
	        	queryMode: 'remote',
	        	forceSelection:true
//	        	,
//	        	store: {
//	        		type: 'streamlist'
//	        	}
	        },{
	            xtype: 'button',
	            text: 'User',
	            cls: 'elantris-user-btn',
	            iconCls: 'x-fa fa-user',
	            menu: [{            	
	                text: 'Editar perfil',
	                iconCls: 'x-fa fa-edit'
	                	
	            }, {
	                text: 'Cerrar sesión',
	                iconCls: 'x-fa fa-sign-out'
	            }]
	        }]
    	}]
   },{ 
	   region: 'west',
	   title: 'Conversaciones',
       width: 250,
       name: 'conversationtreepanel',
       collapseDirection: 'left',
       collapsible: true,
       cls: 'left-tree-panel',
       //split: true,
       reference: 'treelistContainer',
       layout: {
           type: 'vbox',
           align: 'stretch'
       },
       border: false,                
       items: [{
			xtype: 'treelist',
			name: 'conversationtree',
			expanderOnly: false,
			selectOnExpander: false,
			singleExpand: false,            
			listeners: {
				selectionchange: 'onSelectionChange'
			},
			flex: 1,			
			bind: '{navItems}',
	        collapsible: true,	        
	        rootVisible: false,
	    	reference: 'treelist',
	    	cls: 'left-tree-panel'
//	    		,
//	    	style: {
//            	'padding': '0 10px',
//            	            	
//            	// Black-ish background color
//            	'background-color': '#32404e',
//            	'toolstrip-background-color': '#32404e',
//
//            	'tool-selected-color': '#f0f0f0',
//            	'tool-selected-background-color': '#5fa2dd',
//
//            	'tool-float-indicator-width': '4px',
//            	'tool-float-indicator-color': '#5fa2dd',
//
//            	// Darker background for expanded subtrees
//            	'item-expanded-background-color': '#2c3845',
//
//            	// Taller line height
//            	'item-line-height ': '80px',
//
//            	// Off-white text
//            	'item-icon-color': '#ADB3B8',
//            	'item-expander-color': '#ADB3B8',
//            	'item-text-color': '#FFF',
//            	
//            	'item-selected-background-color': '#5fa2dd',
//
//            	// Brighter when hovered
//            	'row-over-background-color': '#4f606f',
//            	'item-icon-over-color': '#fff',
//            	'item-expander-over-color': '#fff',
//            	'item-text-over-color': '#fff',
//
//            	'row-indicator-width': '6px',
//            	'row-indicator-selected-color': '#5fa2dd',
//            	'row-indicator-selected-over-color': 'lighten(#5fa2dd, 10%)',
//            	'row-indicator-over-color': 'lighten(#5fa2dd, 10%)',
//
//            	// Various sizes for the pieces:
//            	'item-icon-font-size': '18px',
//            	'item-icon-width': '24px',
//            	'item-expander-font-size': '16px',
//            	'item-expander-width': '24px',
//
//            	'row-selected-background-color': '#3f505f'
//            		
//            }	      
       }]
    }, {
        region: 'center',
        name:  'contentPanel',
        reference: 'contentPanel',
        layout: 'card',
        items: [
            {
//            	html: 'Conversacion 1'
            	xtype: 'stream'            	
			},
			{
				html:'Conversacion 2'
			}
        ]
    }],
    
    listeners: {
    	afterrender: function(){    
    		var treePanel = Ext.ComponentQuery.query('treepanel[name=conversationtreepanel]')[0]; 
//    		treePanel.store = new ProjectElantris.store.main.ConversationTreeStore();    		    		    	
    		
//    		
////    		var jsonString = '{userName: '+ User.user + ', session: ' + 1212 + '}'; 
//    		var jsonString = {};
//    		jsonString.userName = User.user;
//    		jsonString.session = 1212;
//    		var store = Ext.ComponentQuery.query('treepanel[name=conversationtreepanel]')[0].getStore();
//    		store = new ProjectElantris.store.main.ConversationTreeStore();
////    		store.load({
////        		jsonData: jsonString //415 (Unsupported Media Type)
////    		});
//    		
//    		
//    		Ext.Ajax.request({
//    			url: '/getopenconversations',
//    			method: 'POST',    			
//    			jsonData: Ext.encode(jsonString),
//    			success: function(response, opts){
//    				var treePanel = Ext.ComponentQuery.query('treepanel[name=conversationtreepanel]')[0]; 
//    	    		treePanel.store = new ProjectElantris.store.main.ConversationTreeStore();
//    				var resp = Ext.decode(response.responseText).categories;    				
//    				
//    				treePanel.getStore().add(Ext.encode(resp));    				
//    			},
//    			failure: function(response, opts){
//    				Ext.Msg.alert('Failure', 'No se ha podido enviar el mensaje');
//    			}
//        	});	
    	}
    }
});