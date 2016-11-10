Ext.define('Portal.controller.TableExtLayoutController',{
	extend : 'Ext.app.Controller',
	refs : [{
		selector : 'viewport > mainView > contentView > panel > tabpanel > [itemId = "tableExtLayout"]',
		ref : 'tableExtLayout'
	}],
	init : function(){
		var me = this;
        console.log('Initialized Table Ext Layout Controller! This happens before the Application launch function is called');
        me.control({
        	'viewport > mainView > contentView > panel > tabpanel > [itemId = "tableExtLayout"]' : {
        		activate : function(cmp){
        			var tableExtLayout = me.getTableExtLayout();
					var component = [{
        					xtype : 'tableExtLayoutView',
        					itemId : 'tableExtLayoutView',
        					height : screen.availHeight - 345
        				}];
					tableExtLayout.remove(0);
					tableExtLayout.add(component);      			
        		}
        	}
        })
	}
});