Ext.define('ProjectElantris.view.stream.MessageInputBoxController', {    
    extend: 'Ext.app.ViewController',
    alias: 'controller.messagebox',
    
    control: {
        'messagebox > textarea#messageArea': {
        	keyup: 'checkKey',
        	specialkey: 'checkSpecialKey'
        },
        
        'messagebox > button#confirmButton': {
        	click: 'sendMessage'
        }
    },
    
	checkKey: function(field, e){
        // e.HOME, e.END, e.PAGE_UP, e.PAGE_DOWN,
        // e.TAB, e.ESC, arrow keys: e.LEFT, e.RIGHT, e.UP, e.DOWN
        if (!e.shiftKey && e.getKey() == e.ENTER) {
        	var content = field.getValue();
        	var jsonString = [{messageId: 3, imageSrc: User.profilePic, userName: User.user, timestamp: new Date(), messageText: field.getValue()}];
        	
        	var dataView = Ext.ComponentQuery.query('message[name=converation1]')[0];
        	var store = dataView.getStore();
        	store.add(jsonString);
        	dataView.up().scrollBy(0, 999999, true);
        	dataView.refresh();
        	field.reset();    
        	this.sendMessage(content);
        }
    	
	},
	
	checkSpecialKey: function(field, ev){
        if ((ev.shiftKey || ev.ctrlKey) && ev.getKey() === ev.ENTER ) {
            //field.setValue(field.getValue() + '\n');
        }
    },
	
	sendMessage: function(message) {
//		var message = Ext.ComponentQuery.query('textarea[itemId=messageArea]')[0].getValue();
		
		var params = {messageId: null, imageSrc: User.profilePic, userName: User.user, timestamp: "24-06-2016 16:53", messageText: message};
		
		
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
		
		
//		Ext.Ajax.request({
//			url: '/addnewmessage',
//			method: 'POST',
//			success: function(response, opts){    								
//				Ext.Msg.alert('Success', 'El alta realizado con éxito');
//				
//			},
//			failure: function(response, opts){
//				
//			},
//			jsonData: params
//		});
	}
});