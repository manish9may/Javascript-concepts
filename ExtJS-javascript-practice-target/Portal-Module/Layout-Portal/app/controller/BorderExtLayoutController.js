Ext.define('Portal.controller.BorderExtLayoutController',{
	extend : 'Ext.app.Controller',
	refs : [{
		selector : 'viewport > mainView > contentView > panel > tabpanel > [itemId = "borderExtLayout"]',
		ref : 'borderExtLayout'
	}],
	init : function(){
		var me = this;
        console.log('Initialized Border Ext Layout Controller! This happens before the Application launch function is called');
        me.control({
		'viewport > mainView > contentView > panel > tabpanel > [itemId = "borderExtLayout"]' : {
			activate : function(cmp){
				var borderExtLayout = me.getBorderExtLayout();
				var component = [{
                                        xtype : 'borderExtLayoutView',
                                        height : screen.availHeight - 345,
                                        itemId : 'borderExtLayoutView'
                                    }];
                    borderExtLayout.remove(0);
                    borderExtLayout.add(component);
			}
		}
	});
	}	
})