Ext.define('Portal.controller.AnchorExtLayoutController',{
	extend : 'Ext.app.Controller',
	refs : [{
		selector : 'viewport > mainView > contentView > panel > tabpanel > [itemId = "anchorExtLayout"]',
		ref : 'anchorExtLayout'
	}],
	init : function (argument) {
		var me = this;
        console.log('Initialized Anchor Ext Layout Controller! This happens before the Application launch function is called');
        me.control({
        	'viewport > mainView > contentView > panel > tabpanel > [itemId = "anchorExtLayout"]' : {
        		activate : function(cmp){
        			var anchorExtLayout = me.getAnchorExtLayout();
        			var component = [{
                                        xtype : 'anchorExtLayoutView',
                                        height : screen.availHeight - 345,
                                        itemId : 'anchorExtLayoutView'
                                    }];
                    anchorExtLayout.remove(0);
                    anchorExtLayout.add(component);
        		}
        	}
        })
	}
})