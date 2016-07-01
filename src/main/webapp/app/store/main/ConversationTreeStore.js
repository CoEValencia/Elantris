Ext.define('ProjectElantris.store.main.ConversationTreeStore', {
	extend: 'Ext.data.TreeStore',
	alias: 'store.conversationtree',
	model: 'ProjectElantris.model.main.ConversationTreeModel',

	proxy: {
	    type: 'ajax',
	    actionMethods: {
	        read: 'POST'
	    },        
	    paramsAsJson: true,
	    jsonData: '{userName: '+ User.user + ', session: ' + 1212 + '}',
	    url: '/getopenconversations',
	    folderSort: true 
	}	
});