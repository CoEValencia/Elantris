Ext.define('ProjectElantris.view.stream.MessageInputBox', {
	extend: 'Ext.toolbar.Toolbar',
	xtype: 'messagebox',        
    cls: 'stream-message-box',
    
	controller: 'messagebox',
	
    items: [{
    	xtype: 'textarea',
    	itemId: 'messageArea',
    	reference: 'messageArea',
    	enableKeyEvents: true,
    	emptyText: 'Escribe mensaje',
    	flex: 1
    },{
    	iconCls: 'x-fa fa-paper-plane',
    	itemId: 'confirmButton',
    	cls: 'round-button-circle'
    }]
	
	
});
