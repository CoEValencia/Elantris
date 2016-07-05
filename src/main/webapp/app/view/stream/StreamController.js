Ext.define('ProjectElantris.view.stream.StreamController', {    
    extend: 'Ext.app.ViewController',
    alias: 'controller.stream',
    
    closeStream: function(){
    	var view = this.getView();
    	var conv = view.lookupReference('conversation');
    	var task = conv.task;    
    	var contentPanel = Ext.ComponentQuery.query('panel[name=contentPanel]')[0];
    	contentPanel.getLayout().setActiveItem(0);    	    	
    	Ext.TaskManager.stop(task);
    	var treeStore= Ext.ComponentQuery.query('treelist[name=conversationtree]')[0].getStore();
    	var record = treeStore.findRecord('text', view.getTitle());
    	var parentNode = record.parentNode;
    	parentNode.removeChild(record);
    	if(parentNode.childNodes.length < 1){
    		parentNode.parentNode.removeChild(parentNode);
    	}
    	// Avisar a negocio para que desactive la conversacion
    	
    }
    	
});