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
	             'ProjectElantris.store.stream.StreamInfoStore',
	             'ProjectElantris.model.stream.StreamInfoModel',
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
	            minChars: 3,		            
	        	displayField: 'stream',
	        	tpl:  '<tpl for="."><div class="x-boundlist-item">{stream} - {category}</div></tpl>',
				displayTpl:  '<tpl for=".">{stream} - {category}</tpl>',
	        	valueField: 'id',
        		typeAhead: true,
	        	queryMode: 'remote',
	        	forceSelection:true,
	        	store: {
	        		type: 'streaminfo'
	        	},
	        	listeners: {
	        		select: 'loadStream'
	        	}
	        },{
	            xtype: 'button',
	            text: User.user,
	            cls: 'elantris-user-btn',
	            iconCls: 'x-fa fa-user',
	            menu: [{            	
	                text: 'Editar perfil',
	                iconCls: 'x-fa fa-edit'
	                	
	            }, {
	                text: 'Cerrar sesión',
	                iconCls: 'x-fa fa-sign-out',
	                handler: 'closeSession'
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
       }]
    }, {
        region: 'center',
        name:  'contentPanel',
        reference: 'contentPanel',
        layout: 'card',
        items: [
            {
            	html: 'Aca va la pantalla de inicio'
//            },
//            {
//            	xtype: 'stream'            	
//			},
//			{
//				html:'Conversacion 2'
			}
        ],
        listeners: {
        	remove: 'conversationClose' 
        }
    }]
});