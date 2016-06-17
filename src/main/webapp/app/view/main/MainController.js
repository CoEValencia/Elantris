Ext.define('ProjectElantris.view.main.MainController', {    
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',

	onToggleConfig: function (menuitem) {
	    var treelist = this.lookupReference('treelist');
	
	    treelist.setConfig(menuitem.config, menuitem.checked);
	},
	
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
	},
	
	onToggleMicro: function (button, pressed) {
	    var treelist = this.lookupReference('treelist'),
	        ct = treelist.ownerCt;
	
	    treelist.setMicro(pressed);
	
	    if (pressed) {
	        this.oldWidth = ct.width;
	        ct.setWidth(44);
	    } else {
	        ct.setWidth(this.oldWidth);
	    }
		     
	    if (Ext.isIE8) {
	        this.repaintList(treelist, pressed);
	    }
	}

});
