Ext.define('ProjectElantris.view.stream.Stream', {
	extend: 'Ext.panel.Panel',
	xtype: 'stream',
	
	scrollable: false,	
	
	autoDestroy: true,
	
	controller: 'stream',
	padding: 5,
	layout: {
		type: 'vbox',
		align: 'stretch'
	},
	
	items: [{
		xtype: 'conversation',
		reference: 'conversation'
	}],
	
	dockedItems: [{
        xtype: 'messagebox',
        dock: 'bottom',
        reference: 'messagebox'
    }],
    
    tools: [{
    	xtype: 'button',
    	iconCls: 'x-fa fa-times',
    	handler: 'closeStream'
    }],
    
    setTitle: function(title){
    	this.title = title;
//    	this.items.items[0].setName(title+'_conv');
    },
    
    listeners: {
    	afterrender:  function(){
    		var me = this;
	    	var conv = this.lookupReference('conversation');
	    	var catId = this.itemId.replace("Conv", "");
	    	conv.itemId = this.itemId + '-conversation';
	    	conv.name = this.itemId + '-conversation';
	    	var messages = Ext.create('ProjectElantris.view.stream.Message', 
	    	{	    		
	    		reference: 'myMessage',		
	    		store: Ext.create('ProjectElantris.store.stream.MessageStore',{name:'storemessages_' + conv.itemId, id: 'store-' + conv.itemId })
	    	});
	    	
	    	var params = {user: User.user, idConversation: catId};
	    	Ext.Ajax.request({
				url: '/getnewmessages',
				method: 'POST',
				jsonData: params,
				success: function(response, opts){
					var newMessages = Ext.decode(response.responseText).mensajes;
					messages.getStore().loadData(newMessages);
					conv.add(messages);
			    	var messageBox = me.lookupReference('messagebox');
			    	messageBox.itemId = me.itemId + '-messageBox';
			    	messageBox.name = me.itemId + '-messageBox';
			    	conv.startCheck();
				},
				failure: function(response, opts){
					Ext.Msg.alert('Failure', 'No se han podido obtener los mensajes');
				}
	    	});
	    	
//	    	conv.add(messages);
//	    	var messageBox = this.lookupReference('messagebox');
//	    	messageBox.itemId = this.itemId + '-messageBox';
//	    	messageBox.name = this.itemId + '-messageBox';
//	    	conv.startCheck();
    	}
    }    
});