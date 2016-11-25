Ext.define('Common.controller.NavigationController',{
	extend : 'Ext.app.Controller',
	refs : [{
                selector : 'viewport > mainView > contentView > panel navigationView',
                ref : 'navigationView'
        }],
	init : function(){
		var me = this;
        console.log('Initialized Navigation Ext Component Controller! This happens before the Application launch function is called');	
        me.control({
        	'viewport > mainView > contentView > panel navigationView' : {
        		itemclick : function(treeModel, record, item, index, e, eOpts){
                                
        		}
        	}
        })
	}
});