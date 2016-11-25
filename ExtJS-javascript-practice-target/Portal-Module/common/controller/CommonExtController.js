Ext.define('Common.controller.CommonExtController',{
		extend : 'Ext.app.Controller',
		refs : [],
		init : function(){
			var me = this;
        	console.log('Initialized Common Ext Component Controller! This happens before the Application launch function is called');
        	me.control({
        		'viewport > mainView > headerView > panel > panel > button' : {
        			click : function(button){
        				window.location.href = '/Portal-Module'
        			}
        		}
        	});
		}
});