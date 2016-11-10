Ext.define('Portal.controller.HBoxExtLayoutController',{
	extend : 'Ext.app.Controller',
	refs : [{
		selector : 'viewport > mainView > contentView > panel > tabpanel > [itemId = "hBoxExtLayout"]',
		ref : 'hBoxExtLayout'
	}],
	init : function(){
		var me = this;
        console.log('Initialized hBox Ext Layout Controller! This happens before the Application launch function is called');
        me.control({
        	'viewport > mainView > contentView > panel > tabpanel > [itemId = "hBoxExtLayout"]' : {
        		activate : function(cmp){
        			var hBoxExtLayout = me.getHBoxExtLayout();
					var component = [{
        					xtype : 'hBoxExtLayoutView',
        					itemId : 'hBoxExtLayoutView',
        					height : screen.availHeight - 345
        				}];
					hBoxExtLayout.remove(0);
					hBoxExtLayout.add(component);      			
        		}
        	}
        })
	}
});