Ext.define('Portal.controller.ColumnExtLayoutController',{
	extend : 'Ext.app.Controller',
	refs : [{
		selector : 'viewport > mainView > contentView > panel > tabpanel > [itemId = "columnExtLayout"]',
		ref : 'columnExtLayout'
	}],
	init : function(){
		var me = this;
        console.log('Initialized Column Ext Layout Controller! This happens before the Application launch function is called');
        me.control({
        	'viewport > mainView > contentView > panel > tabpanel > [itemId = "columnExtLayout"]' :{
       	 		activate : function(cmp){
       	 			var columnExtLayout = me.getColumnExtLayout();
       	 			var compoment = [{
       	 					xtype : 'columnExtLayoutView',
       	 					height : screen.availHeight - 345,
       	 					itemId : 'columnExtLayoutView'
       	 			}];
       	 			columnExtLayout.remove(0);
       	 			columnExtLayout.add(compoment);
        		}
        	}
        })
	}
})