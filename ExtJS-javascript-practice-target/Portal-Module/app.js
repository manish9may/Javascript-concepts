Ext.require([
	'Ext.*'
]);
Ext.onReady(function() {
    Ext.getBody().mask('Loading application', 'splashscreen');
});
Ext.application({
	name : 'Common',
	appFolder : 'common',
	autoCreateViewport: true,
	controllers : ['NavigationController',
				   'CommonExtController'],
	requires : ['Common.store.NavigationStore'],
	views : ['Main'],
	init : function(){
		//this.setDefaultToken('layout-portal');
	},
	launch : function(){
		setTimeout(function(){
			Ext.getBody().unmask();	
			Ext.ComponentQuery.query('button[itemId = "application-back"]')[0].hide();
		},1000);
		
	}
});