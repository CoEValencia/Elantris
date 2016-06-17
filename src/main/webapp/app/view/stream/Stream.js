Ext.define('ProjectElantris.view.stream.Stream', {
	extend: 'Ext.panel.Panel',
	xtype: 'conversation',
	
	scrollable: false,
	
	title: 'Conversacion ##',
	
	controller: 'main',
	padding: 10,
	
	items: [{
		
	}],
	
	dockedItems: [{
        xtype: 'toolbar',
        dock: 'bottom',        
        
        items: [{
        	xtype: 'textarea',
        	emptyText: 'Escribe mensaje',
        	flex: 1
        },{
        	iconCls: 'x-fa fa-paper-plane',
        	cls: 'round-button-circle',        	
        }]
    }]
});