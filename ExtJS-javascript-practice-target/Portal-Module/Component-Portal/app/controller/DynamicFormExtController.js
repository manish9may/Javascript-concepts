Ext.define('Portal.controller.DynamicFormExtController',{
		extend : 'Ext.app.Controller',
		refs : [{
			selector : 'viewport > mainView > contentView > panel > tabpanel > [itemId = "dynamicFormExtComponent"]',
			ref : 'dynamicFormExtComponent'
		}],
		init : function(){
			var me = this;
        	console.log('Initialized Dynamic Form Ext Component Controller! This happens before the Application launch function is called');
        	me.control({
        		'viewport > mainView > contentView > panel > tabpanel > [itemId = "dynamicFormExtComponent"]' : {
        			activate : function(cmp){
        				var dynamicFormExtComponent = me.getDynamicFormExtComponent();
        				var component = [{
                                                xtype : 'dynamicFormExtComponentView',
                                                //height : screen.availHeight - 260,
                                                height : screen.availHeight - 345,
                                                itemId : 'dynamicFormExtComponentView'
                                        }];
        				dynamicFormExtComponent.remove(0);
        				dynamicFormExtComponent.add(component);
        			}
        		}
        	})
		}
});