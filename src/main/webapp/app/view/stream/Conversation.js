Ext.define('ProjectElantris.view.stream.Conversation', {
	extend: 'Ext.panel.Panel',
	xtype: 'conversation',
	
	controller: 'conversation',
	
	scrollable: true,
	
	items: [{
		xtype: 'message',
		name: 'converation1',
		store: Ext.create('ProjectElantris.store.stream.MessageStore')
	}]
	
});