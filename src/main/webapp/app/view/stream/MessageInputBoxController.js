Ext.define('ProjectElantris.view.stream.MessageInputBoxController', {    
    extend: 'Ext.app.ViewController',
    alias: 'controller.messagebox',
    
    control: {
        'messagebox > textarea#messageArea': {
        	keyup: 'checkKey',
        	specialkey: 'checkSpecialKey'
        },
        
        'messagebox > button#confirmButton': {
        	click: 'getMessage'
        }
    },
    
	checkKey: function(field, e){
        // e.HOME, e.END, e.PAGE_UP, e.PAGE_DOWN,
        // e.TAB, e.ESC, arrow keys: e.LEFT, e.RIGHT, e.UP, e.DOWN
        if (!e.shiftKey && e.getKey() == e.ENTER) {
        	if(field.getValue().length > 1){
	        	var content = linkifyHtml(field.getValue(), null);        	
	        	var jsonString = [{messageId: 3, imageSrc: User.profilePic, userName: User.user, timestamp: new Date(), messageText: content}];
	        	var view = this.getView();
	        	var catId = view.getItemId().replace("-messageBox", "").replace("Conv", "");
	        	var convItemId = view.getItemId().replace("-messageBox", "-conversation");
	        	var dataView = Ext.ComponentQuery.query('conversation[name='+convItemId+']')[0];
	        	var store = dataView.lookupReference("myMessage").getStore();
	        	store.add(jsonString);
	        	dataView.lookupReference("myMessage").up().scrollBy(0, 999999, true);
	        	dataView.lookupReference("myMessage").refresh();        	
	        	this.sendMessage(content, catId);
        	}
        	
        	field.reset();    
        }
    	
	},
	
	checkSpecialKey: function(field, ev){
        if ((ev.shiftKey || ev.ctrlKey) && ev.getKey() === ev.ENTER ) {            
        	//field.setValue(field.getValue() + '\n');
        } else {
	        if(ev.getKey() === ev.ENTER) {
	        	ev.preventDefault();
        	}
        }
    },
    
    getMessage: function(){
    	var view = this.getView();
    	var field = view.lookupReference('messageArea');
    	var content = linkifyHtml(field.getValue(), null);        	
    	var jsonString = [{messageId: 3, imageSrc: User.profilePic, userName: User.user, timestamp: new Date(), messageText: content}];
    	var view = this.getView();
    	var catId = view.getItemId().replace("-messageBox", "").replace("Conv", "");
    	var convItemId = view.getItemId().replace("-messageBox", "-conversation");
    	var dataView = Ext.ComponentQuery.query('conversation[name='+convItemId+']')[0];
    	var store = dataView.lookupReference("myMessage").getStore();
    	store.add(jsonString);
    	dataView.lookupReference("myMessage").up().scrollBy(0, 999999, true);
    	dataView.lookupReference("myMessage").refresh();
    	field.reset();
    	this.sendMessage(content, catId);
    },
	
	sendMessage: function(message, conversation) {
		var params = {messageId: null, imageSrc: User.profilePic, userName: User.user, timestamp: "24-06-2016 16:53", messageText: message, conversationId: conversation};
		
		Ext.Ajax.request({
			url: '/addnewmessage',
			method: 'POST',
			jsonData: params,
			success: function(response, opts){
				
			},
			failure: function(response, opts){
				Ext.Msg.alert('Failure', 'No se ha podido enviar el mensaje');
			}
    	});
	}
});