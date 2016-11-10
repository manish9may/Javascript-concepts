Ext.define('Portal.controller.GridExtComponentController',{
	extend : 'Ext.app.Controller',
	refs : [{
		selector : 'viewport > mainView > contentView > panel > tabpanel > [itemId = "gridExtComponent"]',
        ref : 'gridExtComponent'
	}],
	init : function(){
		var me = this;
        console.log('Initialized Grid Ext Component Controller! This happens before the Application launch function is called');	
        me.control({
        	'viewport > mainView > contentView > panel > tabpanel > [itemId = "gridExtComponent"]' : {
        		activate : function(cmp){
        			var gridExtComponent = me.getGridExtComponent();
        			var component = [{
                                        xtype : 'gridExtComponentView',
                                        height : screen.availHeight - 345,
                                        itemId : 'gridExtComponentView'
                                    }];
        			gridExtComponent.remove(0);
        			gridExtComponent.add(component);
        		}
        	},
        	'viewport > mainView > contentView > panel > tabpanel > [itemId = "gridExtComponent"] > gridExtComponentView' : {
        		render : function(cmp){
        			cmp.setStore(Ext.create('Portal.store.GridExtComponentStore'));
        			cmp.getDockedItems('pagingtoolbar')[0].setStore(cmp.getStore());
        			setTimeout(function(){
        				cmp.getDockedItems('pagingtoolbar')[0].doRefresh()	
        			});
        		}
        	}
        });
	}
});
