Ext.define('ProjectElantris.view.main.Main', {
	extend: 'Ext.panel.Panel',
	xtype: 'app-main',
	
	scrollable: false,
	
	requires : [ 
            	 'Ext.plugin.Viewport',
	             'ProjectElantris.view.main.MainController',
	             'ProjectElantris.view.main.MainModel',
	             'ProjectElantris.view.stream.Stream',
	             'ProjectElantris.view.stream.StreamController'
    ],
	
    title: 'Elantris',
    controller: 'main',
    iconCls: 'fa fa-diamond',
    //iconCls: 'fa fa-users',
    layout: 'border',
    
    viewModel: {
        type: 'main'
    },
    
    plugins: 'viewport',
    autoScroll: true,
    header: {
        items: [{
            xtype: 'button',
            text: 'User',
            iconCls: 'x-fa fa-paw',
            menu: [{            	
                text: 'Editar perfil',
                iconCls: 'x-fa fa-edit'

            }, {
                text: 'Cerrar sesión',
                iconCls: 'x-fa fa-sign-out'
            }]
        }]
    },

    items: [{
        region: 'west',        
        width: 250,
        reference: 'treelistContainer',
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        border: false,                
        items: [{
            xtype: 'treelist',
            reference: 'treelist',
            expanderOnly: false,            
            singleExpand: true,            
            listeners: {
                selectionchange: 'onSelectionChange'
            },
            flex: 1,
            bind: '{navItems}',
            
            style: {
            	'padding': '0 10px',
            	
            	
            	// Black-ish background color
            	'background-color': '#32404e',
            	'toolstrip-background-color': '#32404e',

            	'tool-selected-color': '#f0f0f0',
            	'tool-selected-background-color': '#5fa2dd',

            	'tool-float-indicator-width': '4px',
            	'tool-float-indicator-color': '#5fa2dd',

            	// Darker background for expanded subtrees
            	'item-expanded-background-color': '#2c3845',

            	// Taller line height
            	'item-line-height ': '80px',

            	// Off-white text
            	'item-icon-color': '#ADB3B8',
            	'item-expander-color': '#ADB3B8',
            	'item-text-color': '#FFF',

            	// Brighter when hovered
            	'row-over-background-color': '#4f606f',
            	'item-icon-over-color': '#fff',
            	'item-expander-over-color': '#fff',
            	'item-text-over-color': '#fff',

            	'row-indicator-width': '6px',
            	'row-indicator-selected-color': '#5fa2dd',
            	'row-indicator-selected-over-color': 'lighten(#5fa2dd, 10%)',
            	'row-indicator-over-color': 'lighten(#5fa2dd, 10%)',

            	// Various sizes for the pieces:
            	'item-icon-font-size': '18px',
            	'item-icon-width': '24px',
            	'item-expander-font-size': '16px',
            	'item-expander-width': '24px',

            	'row-selected-background-color': '#3f505f'
            }
        }],
        
        dockedItems: [{
             xtype: 'toolbar',
             cls: 'minimize',
             items:[{
		          xtype: 'button',
		          iconCls: 'x-fa fa-chevron-circle-left',
		          cls: 'minimizebutton',
		          enableToggle: true,
		          toggleHandler: 'onToggleMicro'  
		      }]
        }]
    }, {
        region: 'center',
        name:  'contentPanel',
        reference: 'contentPanel',
        layout: 'card',
        items: [
            {
            	//html: 'Conversacion 1'
            	xtype: 'conversation'
			},
			{
				html:'Conversacion 2'
			}
        ]
    }]
});