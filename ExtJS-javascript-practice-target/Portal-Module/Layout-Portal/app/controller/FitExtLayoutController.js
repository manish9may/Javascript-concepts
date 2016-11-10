Ext.define('Portal.controller.FitExtLayoutController',{
		extend : 'Ext.app.Controller',
		refs : [{
			selector : 'viewport > mainView > contentView > panel > tabpanel > [itemId = "fitExtLayout"]',
			ref : 'fitExtLayout'
		}],
		init : function(){
			var me = this;
        	console.log('Initialized Fit Ext Layout Controller! This happens before the Application launch function is called');
        	me.control({
        		'viewport > mainView > contentView > panel > tabpanel > [itemId = "fitExtLayout"]' : {
        			activate : function(cmp){
        				var fitExtLayout = me.getFitExtLayout();
        				var component = [{
        					xtype : 'fitExtLayoutView',
        					itemId : 'fitExtLayoutView',
        					height : screen.availHeight - 345
        				}];
        				fitExtLayout.remove(0);
        				fitExtLayout.add(component);
        			}
        		}
        	});
		}
});