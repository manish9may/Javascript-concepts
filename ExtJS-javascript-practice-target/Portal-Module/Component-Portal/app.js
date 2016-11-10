Ext.require([
	'Ext.*',
	'Ext.ux.DataTip'
]);
Ext.onReady(function() {
    Ext.getBody().mask('Loading application', 'splashscreen');
});
Ext.application({
	name : 'Portal',
	appFolder : 'Component-Portal/app',
	requires : ['Portal.store.GridExtComponentStore'],
	autoCreateViewport: true,
	controllers : ['GridExtComponentController',
				   'DynamicFormExtController'],
	views : ['Main'],
	init : function(){
		this.setDefaultToken('component-portal');
	},
	launch : function(){
		setTimeout(function(){
			Ext.getBody().unmask();
		},1000);
		
	}
});