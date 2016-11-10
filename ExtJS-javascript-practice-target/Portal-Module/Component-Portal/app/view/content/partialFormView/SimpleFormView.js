Ext.define('Portal.view.content.partialFormView.SimpleFormView',{
	extend : 'Ext.Container',
	alias : 'widget.simpleFormView',
	items : [{
		xtype: 'form',
        layout: 'form',
        collapsible: true,
        frame: false,
        title: 'Simple Form',
        bodyPadding: '5 5 0',
        width: '100%',
        fieldDefaults: {
            msgTarget: 'side',
            labelWidth: 75
        },
        plugins: {
            ptype: 'datatip'
        },
        items: [{
            fieldLabel: 'First Name',
            afterLabelTextTpl: required,
            xtype : 'textfield',
            name: 'first',
            allowBlank: false,
            tooltip: 'Enter your first name'
        },{
            fieldLabel: 'Last Name',
            afterLabelTextTpl: required,
            xtype : 'textfield',
            name: 'last',
            allowBlank: false,
            tooltip: 'Enter your last name'
        },{
            fieldLabel: 'Company',
            xtype : 'textfield',
            name: 'company',
            tooltip: "Enter your employer's name"
        }, {
            fieldLabel: 'Email',
            afterLabelTextTpl: required,
            name: 'email',
            xtype : 'textfield',
            allowBlank: false,
            vtype:'email',
            tooltip: 'Enter your email address'
        }, {
            fieldLabel: 'DOB',
            name: 'dob',
            xtype: 'datefield',
            tooltip: 'Enter your date of birth'
        }, {
            fieldLabel: 'Age',
            name: 'age',
            xtype: 'numberfield',
            minValue: 0,
            maxValue: 100,
            tooltip: 'Enter your age'
        }, {
            xtype: 'timefield',
            fieldLabel: 'Time',
            name: 'time',
            minValue: '8:00am',
            maxValue: '6:00pm',
            tooltip: 'Enter a time',
            plugins: {
                ptype: 'datatip',
                tpl: 'Select time {date:date("G:i")}'
            }
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