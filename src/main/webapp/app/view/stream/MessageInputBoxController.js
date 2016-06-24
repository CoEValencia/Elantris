Ext.define('ProjectElantris.view.stream.MessageInputBoxController', {    
    extend: 'Ext.app.ViewController',
    alias: 'controller.messagebox',
    
    control: {
        'messagebox > textarea#messageArea': {
        	keypress: 'checkKey',
        	specialkey: 'checkSpecialKey'
        }
    },
    
	checkKey: function(field, e){
        // e.HOME, e.END, e.PAGE_UP, e.PAGE_DOWN,
        // e.TAB, e.ESC, arrow keys: e.LEFT, e.RIGHT, e.UP, e.DOWN
        if (!e.shiftKey && e.getKey() == e.ENTER) {
        	var content = field.getValue();
        	var jsonString = {id: 3, imageSrc: User.profilePic, userName: User.user, timestamp: new Date(), messageText: field.getValue()};
        	
        	var jsonOb = Ext.util.JSON.encode(jsonString);
        	var store = Ext.ComponentQuery.query('message[name=converation1]')[0].getStore();
        	store.add(Ext.create('ProjectElantris.model.stream.MessageModel', jsonOb));
        	
        	field.reset();
        	var stop;
        }
    	
	},
	
	checkSpecialKey: function(field, ev){
        if ((ev.shiftKey || ev.ctrlKey) && ev.getKey() === ev.ENTER ) {
            //field.setValue(field.getValue() + '\n');
        }
    }
});