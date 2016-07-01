Ext.define('ProjectElantris.view.stream.Conversation', {
	extend: 'Ext.panel.Panel',
	xtype: 'conversation',
	
	controller: 'conversation',
	name: 'nombre1',	
	layout: 'fit',
	scrollable: 'y',
	flex: 1,
	
	items: [{
		xtype: 'message',		
		name: 'converation1',		
		store: Ext.create('ProjectElantris.store.stream.MessageStore')
	}],
	
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
		var task;		
		var me = this;
		task = {
		    run: function() {
		    	Ext.Ajax.request({
					url: '/getnewmessages',
					method: 'POST',					
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
//						Ext.TaskManager.stopAll();
//						var stop;
					},
					failure: function(response, opts){
						Ext.Msg.alert('Failure', 'No se ha comprobar nuevos mensajes');
					}
		    	});
		    			    			    	
		    },
		    interval: 5000
		};
		
		Ext.TaskManager.start(task);
		
	}
	
});