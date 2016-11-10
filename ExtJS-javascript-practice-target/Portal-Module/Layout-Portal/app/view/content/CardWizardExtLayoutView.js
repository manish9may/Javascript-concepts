Ext.define('Portal.view.content.CardWizardExtLayoutView',{
	extend : 'Ext.panel.Panel',
	alias : 'widget.cardWizardExtLayoutView',
	title: 'Card Layout (Wizard)',
    layout:'card',
    activeItem: 0,
    bodyStyle: 'padding:15px',
    defaults: {border:false},
    bbar: ['->', {
                id: 'card-prev',
                text: '&laquo; Previous',
                disabled: true
            },{
                id: 'card-next',
                text: 'Next &raquo;'
            }],
    items : [{
                id: 'card-0',
                html: '<h1>Welcome to the Demo Wizard!</h1><p>Step 1 of 3</p><p>Please click the "Next" button to continue...</p>'
            },{
                id: 'card-1',
                html: '<p>Step 2 of 3</p><p>Almost there.  Please click the "Next" button to continue...</p>'
            },{
                id: 'card-2',
                html: '<h1>Congratulations!</h1><p>Step 3 of 3 - Complete</p>'
            }]
})