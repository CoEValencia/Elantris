Ext.define('ProjectElantris.view.stream.Conversation', {
	extend: 'Ext.panel.Panel',
	xtype: 'conversation',
	
	controller: 'conversation',
	layout: 'fit',
	scrollable: 'y',
	flex: 1,
	
	items: [
//	        {
//		xtype: 'message',		
//		reference: 'myMessage',		
//		store: Ext.create('ProjectElantris.store.stream.MessageStore',{name:'storemessages_' + this.itemId, id: 'store-' + this.itemId })
//	}
	],
	
	addMessage: function(message){
		var store = this.items.items[0].getStore();		
		store.add(message);		
		this.items.items[0].refresh();
		this.scrollBy(0, 999999, true);
	},
	
	setName: function(name){
		this.name = name;
	},
	
	startCheck: function(){
				
		var me = this;
		this.task = Ext.TaskManager.start({
		    run: function() {		
		    	var catId = me.getItemId().replace("-conversation", "").replace("Conv", "");
		    	var params = {user: User.user, idConversation: catId};
		    	Ext.Ajax.request({
					url: '/getnewmessages',
					method: 'POST',
					jsonData: params,
					success: function(response, opts){						
						var store = me.items.items[0].getStore();
						var messages = Ext.decode(response.responseText).mensajes;
						for(var i=0; i<messages.length; i++){
							if(messages[i].userName != User.user){
								store.add(messages[i]);							
								me.scrollBy(0, 999999, true);
								me.items.items[0].refresh();			
							}
						}						
//						Ext.TaskManager.stop(me.task);
					},
					failure: function(response, opts){
						Ext.Msg.alert('Failure', 'No se ha comprobar nuevos mensajes');
					}
		    	});
		    			    			    	
		    },
		    interval: 1000,
		    scope: this
		});		
		
	}
	
});