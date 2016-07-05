Ext.define('ProjectElantris.store.stream.MessageStore', {
	extend: 'Ext.data.Store',
	alias: 'store.message',
	model: 'ProjectElantris.model.stream.MessageModel',

	proxy: {
        type: 'ajax',
        actionMethods: {
            read: 'POST'
        },
        url: '/getnewmessages',
        reader: {
            type: 'json',
            rootProperty: 'mensajes'
        }
    },
    autoLoad: false
	
});		