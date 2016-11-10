Ext.define('Portal.controller.CardWizardExtLayoutController',{
	extend : 'Ext.app.Controller',
	refs : [{
		selector : 'viewport > mainView > contentView > panel > tabpanel > [itemId = "cardWizardExtLayout"]',
		ref : 'cardWizardExtLayout'
	}],
	init : function(){
		var me = this;
        console.log('Initialized Card Wizard Ext Layout Controller! This happens before the Application launch function is called');
        me.control({
		'viewport > mainView > contentView > panel > tabpanel > [itemId = "cardWizardExtLayout"]' : {
			activate : function(cmp){
				var cardWizardExtLayout = me.getCardWizardExtLayout();
				var component = [{
					xtype : 'cardWizardExtLayoutView',
					height : screen.availHeight - 345,
					itemId : 'cardWizardExtLayoutView'
				}];
				cardWizardExtLayout.remove(0);
				cardWizardExtLayout.add(component);
			}
		},
		'viewport > mainView > contentView > panel > tabpanel > [itemId = "cardWizardExtLayout"] > [itemId = "cardWizardExtLayoutView"]  #card-next' :{
				click : function(aButton, aEvent){
					me.cardNavigationHandler(aButton, aEvent,+1);
				}
		},
		'viewport > mainView > contentView > panel > tabpanel > [itemId = "cardWizardExtLayout"] > [itemId = "cardWizardExtLayoutView"]  #card-prev' :{
				click : function(aButton, aEvent){
					me.cardNavigationHandler(aButton, aEvent, -1);
				}
		}
	});
	},
	cardNavigationHandler :  function(aButton, aEvent,incr){
		var me = this;
		var l = me.getCardWizardExtLayout().items.items[0].getLayout();
		var i = l.activeItem.id.split('card-')[1];
		var next = parseInt(i, 10) + incr;
        l.setActiveItem(next);
        Ext.getCmp('card-prev').setDisabled(next === 0);
        Ext.getCmp('card-next').setDisabled(next === 2);
	}
})