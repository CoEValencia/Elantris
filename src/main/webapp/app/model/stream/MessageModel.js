Ext.define('ProjectElantris.model.stream.MessageModel', {
	extend: 'Ext.data.Model',
	alias: 'model.message',	
	
	fields: [
	         {name: 'messageId', type: 'int'},
	         {name: 'imageSrc', type: 'string'},
	         {name: 'userName', type: 'string'},
	         {name: 'timestamp', type: 'date', dateFormat: 'd-m-Y H:i'},
	         {name: 'messageText', type: 'string'},
	         {name: 'conversationId', type: 'int'}
    ]
	
});		