Ext.define('ProjectElantris.view.main.MainController', {    
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',
	
    onLoad: function(){
    	var stop;
    },
    
	onSelectionChange: function(tree, node, opts) {
		var panel = this.lookupReference('contentPanel');
		var opcion = node.getData().text;
		var act = Ext.ComponentQuery.query('stream[title='+opcion+']')[0];
		
		panel.getLayout().setActiveItem(act);
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
	
	conversationClose: function(panel,item){
        panel.layout.setActiveItem(0);
	},
	
	loadStream: function (combo , record , eOpts){
		var contentPanel = Ext.ComponentQuery.query('panel[name=contentPanel]')[0];
		var treePanel = Ext.ComponentQuery.query('treelist[name=conversationtree]')[0]; 
		var treeStore = treePanel.getStore();
		var cat = record.data.category;		
		var catNode = treeStore.findRecord('text', cat);
		var rootNode = treeStore.getRootNode();
		if(catNode == null){
			rootNode.appendChild({
				text: cat,
				expanded: true,
				iconCls: 'x-fa fa-comments-o',
				children: [{
					text: record.data.stream,
					leaf: true,
					iconCls: 'x-fa fa-comment-o',
				}]
			});	
			var conv = Ext.create('ProjectElantris.view.stream.Stream', { itemId: 'Conv'+record.data.id, title: record.data.stream});
		    contentPanel.add(conv);
		} else {
			var convNode = treeStore.findRecord('text', record.data.stream);
			if(convNode == null) {
	    		catNode.appendChild({
	    			text: record.data.stream,
					leaf: true,
					iconCls: 'x-fa fa-comment-o',
	    		});
	    		var conv = Ext.create('ProjectElantris.view.stream.Stream', { itemId: 'Conv'+record.data.id, title: record.data.stream});
			    contentPanel.add(conv);
	    	} else {
	    		var act = Ext.ComponentQuery.query('stream[title='+record.data.stream+']')[0];
	    		contentPanel.getLayout().setActiveItem(act);
	    	}
		}
    	
		combo.reset();
	} 

});
