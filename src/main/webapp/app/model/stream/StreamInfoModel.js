Ext.define('ProjectElantris.model.stream.StreamInfoModel', {
	extend: 'Ext.data.Model',
	alias: 'model.streaminfo',	
	
	fields: [
	         {name: 'id', type: 'int'},
	         {name: 'stream', type: 'string'},
	         {name: 'category', type: 'string'}
    ]	
});		
