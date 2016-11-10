Ext.define('Portal.view.content.partialFormView.MultiColumnFormView',{
	extend : 'Ext.Container',
	alias : 'widget.multiColumnFormView',
	items : [{
		xtype: 'form',
        collapsible: true,
        frame: false,
        title: 'Multi Column, Nested Layouts and Anchoring',
        bodyPadding: '5 5 0',
        width: '100%',
        fieldDefaults: {
            labelAlign: 'top',
            msgTarget: 'side'
        },
        items : [{
        	xtype: 'container',
            anchor: '100%',
            layout: 'hbox',
            items : [{
            	xtype: 'container',
                flex: 1,
                layout: 'anchor',
                items : [{
                    xtype:'textfield',
                    fieldLabel: 'First Name',
                    afterLabelTextTpl: required,
                    xtype : 'textfield',
                    allowBlank: false,
                    name: 'first',
                    anchor:'95%',
                    value: 'Don'
                }, {
                    xtype:'textfield',
                    fieldLabel: 'Company',
                    xtype : 'textfield',
                    name: 'company',
                    anchor:'95%'
                }]
            },{
            	xtype: 'container',
                flex: 1,
                layout: 'anchor',
                items : [{
                    xtype:'textfield',
                    fieldLabel: 'Last Name',
                    afterLabelTextTpl: required,
                    allowBlank: false,
                    name: 'last',
                    anchor:'100%',
                    value: 'Griffin'
                },{
                    xtype:'textfield',
                    fieldLabel: 'Email',
                    afterLabelTextTpl: required,
                    allowBlank: false,
                    name: 'email',
                    vtype:'email',
                    anchor:'100%'
                }]
            }]
        },{
            xtype: 'htmleditor',
            name: 'bio',
            fieldLabel: 'Biography',
            height: 200,
            anchor: '100%'
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