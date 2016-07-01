Ext.define('ProjectElantris.view.stream.Stream', {
	extend: 'Ext.panel.Panel',
	xtype: 'stream',
	
	scrollable: false,
	
	title: 'Conversacion ##',
	
	controller: 'main',
	padding: 10,
	layout: {
		type: 'vbox',
		align: 'stretch'
	},
	
	items: [{
		xtype: 'conversation',
		reference: 'conv1'
	}],
	
	dockedItems: [{
        xtype: 'messagebox',
        dock: 'bottom'
    }],
    
    setTitle: function(title){
    	this.title = title;
//    	this.items.items[0].setName(title+'_conv');
    },
    
    listeners: {
    	afterrender:  function(){
	    	var item = Ext.ComponentQuery.query('conversation[reference=conv1]')[0];
	    	item.startCheck();
    	}
    }
});