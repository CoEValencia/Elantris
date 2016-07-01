Ext.define('ProjectElantris.view.main.MainController', {    
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',
	
	onSelectionChange: function(tree, node, opts) {
		var panel = this.lookupReference('contentPanel');
		var opcion = node.getData().text;
		
		switch(opcion){
		case 'Conversacion 1':
			panel.setActiveItem(0);
			break;
		case 'Conversacion 2':
			panel.setActiveItem(1);
			break;
		}			
    },
	
	repaintList: function(treelist, microMode) {
	    treelist.getStore().getRoot().cascadeBy(function(node) {
	        var item, toolElement;
	        
	        item = treelist.getItem(node);
	        
	        if (item && item.isTreeListItem) {
	            if (microMode) {
	                toolElement = item.getToolElement();
	                
	                if (toolElement && toolElement.isVisible(true)) {
	                    toolElement.syncRepaint();
	                }
	            }
	            else {
	                if (item.element.isVisible(true)) {
	                    item.iconElement.syncRepaint();
	                    item.expanderElement.syncRepaint();
	                }
	            }
	        }
	    });
	}

});
