Ext.define('ProjectElantris.view.main.MainModel', {
	extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    stores: {
        navItems: {
            type: 'tree',               
            root: {
                expanded: true,                   
                style: 'color:red',
                children: [{
                	text: 'Categoria 1',
                	iconCls: 'x-fa fa-comments-o',            		
            		children: [{            			
            			text: 'Conversacion 1',
            			iconCls: 'x-fa fa-comment-o',
            			leaf: true
            		}]
                },{
                	text: 'Categoria 2',
            		iconCls: 'x-fa fa-comments-o', 
            		children: [{
            			text: 'Conversacion 2',
            			iconCls: 'x-fa fa-comment-o', 
            			leaf: true
            		}]
                }]
            }
        }
    }
});