Ext.define('Portal.controller.VBoxExtLayoutController',{
	extend : 'Ext.app.Controller',
	refs : [{
		selector : 'viewport > mainView > contentView > panel > tabpanel > [itemId = "vBoxExtLayout"]',
		ref : 'vBoxExtLayout'
	}],
	init : function(){
		var me = this;
        console.log('Initialized vBox Ext Layout Controller! This happens before the Application launch function is called');
        me.control({
        	'viewport > mainView > contentView > panel > tabpanel > [itemId = "vBoxExtLayout"]' : {
        		activate : function(cmp){
        			var vBoxExtLayout = me.getVBoxExtLayout();
					var component = [{
        					xtype : 'vBoxExtLayoutView',
        					itemId : 'vBoxExtLayoutView',
        					height : screen.availHeight - 345
        				}];
					vBoxExtLayout.remove(0);
					vBoxExtLayout.add(component);      			
        		}
        	}
        })
	}
});