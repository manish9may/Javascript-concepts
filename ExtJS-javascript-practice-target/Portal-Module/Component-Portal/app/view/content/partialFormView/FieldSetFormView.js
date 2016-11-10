Ext.define('Portal.view.content.partialFormView.FieldSetFormView',{
	extend : 'Ext.Container',
	alias : 'widget.fieldSetFormView',
	items : [{
		xtype: 'form',
        id: 'fieldSetForm',
        collapsible: true,
        url: 'save-form.php',
        frame: false,
        title: 'Simple Form with FieldSets',
        bodyPadding: '5 5 0',
        width: '100%',
        fieldDefaults: {
            msgTarget: 'side',
            labelWidth: 75
        },
        defaults: {
            anchor: '100%'
        },
        items : [{
            xtype:'fieldset',
            checkboxToggle:true,
            title: 'User Information',
            defaultType: 'textfield',
            collapsed: true,
            layout: 'anchor',
            defaults: {
                anchor: '100%'
            },
            items : [{
                fieldLabel: 'First Name',
                afterLabelTextTpl: required,
                xtype : 'textfield',
                name: 'first',
                allowBlank:false
            },{
                fieldLabel: 'Last Name',
                afterLabelTextTpl: required,
                xtype : 'textfield',
                name: 'last'
            },{
                fieldLabel: 'Company',
                xtype : 'textfield',
                name: 'company'
            }, {
                fieldLabel: 'Email',
                xtype : 'textfield',
                afterLabelTextTpl: required,
                name: 'email',
                vtype:'email'
            }]
        },{
        	xtype:'fieldset',
            title: 'Phone Number',
            collapsible: true,
            defaultType: 'textfield',
            layout: 'anchor',
            defaults: {
                anchor: '100%'
            },
            items : [{
                fieldLabel: 'Home',
                name: 'home',
                xtype : 'textfield',
                value: '(888) 555-1212'
            },{
                fieldLabel: 'Business',
                xtype : 'textfield',
                name: 'business'
            },{
                fieldLabel: 'Mobile',
                xtype : 'textfield',
                name: 'mobile'
            },{
                fieldLabel: 'Fax',
                xtype : 'textfield',
                name: 'fax'
            }]
        }],
        buttons: [{
            text: 'Save'
        },{
            text: 'Cancel'
        }]
	}]
});