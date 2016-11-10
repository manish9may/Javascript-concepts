Ext.require([
	'Ext.*'
]);
Ext.onReady(function() {
    Ext.getBody().mask('Loading application', 'splashscreen');
});
Ext.application({
	name : 'Portal',
	appFolder : 'Layout-Portal/app',
	autoCreateViewport: true,
	controllers : [
					'Portal.controller.MainController',
					'Portal.controller.HeaderController',
					'Portal.controller.FooterController',
					'Portal.controller.AbsoluteExtLayoutController',
					'Portal.controller.AccordionExtLayoutController',
					'Portal.controller.AnchorExtLayoutController',
					'Portal.controller.BorderExtLayoutController',
					'Portal.controller.CardWizardExtLayoutController',
					'Portal.controller.ColumnExtLayoutController',
					'Portal.controller.FitExtLayoutController',
					'Portal.controller.TableExtLayoutController',
					'Portal.controller.VBoxExtLayoutController',
					'Portal.controller.HBoxExtLayoutController'
					],
	views : ['Main'],
	init : function(){
		this.setDefaultToken('layout-portal');
	},
	launch : function(){
		setTimeout(function(){
			Ext.getBody().unmask();	
		},1000);
		
	}
});