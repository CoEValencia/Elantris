Ext.define('ProjectElantris.store.stream.StreamInfoStore', {
	extend: 'Ext.data.Store',
	alias: 'store.streaminfo',
	model: 'ProjectElantris.model.stream.StreamInfoModel',

	proxy: {
        type: 'ajax',        
        url: '/getstreams',
        reader: {
            type: 'json',
            rootProperty: 'streams'
        }
    },
    autoLoad: true
	
});		