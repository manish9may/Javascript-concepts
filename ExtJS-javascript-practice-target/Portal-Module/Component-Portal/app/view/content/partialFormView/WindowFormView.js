Ext.define('Portal.view.content.partialFormView.WindowFormView',{
	extend : 'Ext.panel.Panel',
	alias : 'widget.windowFormView',
	title: 'Welcome!',
        width: 500,
        bodyPadding: 20,
        items: [{
            margin: '0 0 20 0',
            xtype: 'component',
            html: 'Thank you for visiting our site! We welcome your feedback; please click the button below to ' +
                  'send us a message. We will respond to your inquiry as quickly as possible.'
        }, {
            xtype: 'container',
            layout: {
                type: 'hbox',
                pack: 'center'
            },
            items: [{
                xtype: 'button',
                cls: 'contactBtn',
                scale: 'large',
                text: 'Contact Us',
                handler: showContactForm
            }]
        }]
});