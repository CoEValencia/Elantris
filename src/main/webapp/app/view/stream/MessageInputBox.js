Ext.define('ProjectElantris.view.stream.MessageInputBox', {
	extend: 'Ext.toolbar.Toolbar',
	xtype: 'messagebox',        
    
	controller: 'messagebox',
	
    items: [{
    	xtype: 'textarea',
    	itemId: 'messageArea', 
    	enableKeyEvents: true,
    	emptyText: 'Escribe mensaje',
    	flex: 1
    },{
    	iconCls: 'x-fa fa-paper-plane',
    	itemId: 'confirmButton',
    	cls: 'round-button-circle',        	
    }]
	
	
});
