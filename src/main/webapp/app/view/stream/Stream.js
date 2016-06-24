Ext.define('ProjectElantris.view.stream.Stream', {
	extend: 'Ext.panel.Panel',
	xtype: 'stream',
	
	scrollable: false,
	
	title: 'Conversacion ##',
	
	controller: 'main',
	padding: 10,
	
	items: [{
		xtype: 'conversation'		
	}],
	
	dockedItems: [{
        xtype: 'messagebox',
        dock: 'bottom'
    }]
});