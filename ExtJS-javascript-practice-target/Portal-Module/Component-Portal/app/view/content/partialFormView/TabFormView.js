Ext.define('Portal.view.content.partialFormView.TabFormView',{
	extend : 'Ext.Container',
	alias : 'widget.tabFormView',
	items : [{
		xtype: 'form',
        width: '100%',
        border: false,
        bodyBorder: false,
        fieldDefaults: {
            labelWidth: 75,
            msgTarget: 'side'
        },
        items : [{
        	xtype:'tabpanel',
            activeTab: 0,
            defaults:{
                bodyPadding: 10,
                layout: 'anchor'
            },
            items : [{
                title:'Personal Details',
                defaultType: 'textfield',
                defaults: {
                    anchor: '100%'
                },
                items : [{
                    fieldLabel: 'First Name',
                    name: 'first',
                    afterLabelTextTpl: required,
                    allowBlank: false,
                    value: 'Ed'
                },{
                    fieldLabel: 'Last Name',
                    afterLabelTextTpl: required,
                    allowBlank: false,
                    name: 'last',
                    value: 'Spencer'
                },{
                    fieldLabel: 'Company',
                    name: 'company',
                    value: 'Ext JS'
                }, {
                    fieldLabel: 'Email',
                    afterLabelTextTpl: required,
                    allowBlank: false,
                    name: 'email',
                    vtype:'email'
                }]
            },{
            	 title: 'Phone Numbers',
                defaultType: 'textfield',
                defaults: {
                    anchor: '100%'
                },
                items: [{
                    fieldLabel: 'Home',
                    name: 'home',
                    value: '(888) 555-1212'
                },{
                    fieldLabel: 'Business',
                    name: 'business'
                },{
                    fieldLabel: 'Mobile',
                    name: 'mobile'
                },{
                    fieldLabel: 'Fax',
                    name: 'fax'
                }]
            }]
        }],
        buttons: [{
            text: 'Save',
            handler: function() {
                this.up('form').getForm().isValid();
            }
        },{
            text: 'Cancel',
            handler: function() {
                this.up('form').getForm().reset();
            }
        }]
	}]
});