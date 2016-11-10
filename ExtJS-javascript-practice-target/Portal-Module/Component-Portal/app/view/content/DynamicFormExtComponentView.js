var required = '<span style="color:red;font-weight:bold" data-qtip="Required">*</span>',
win;
Ext.define('Portal.view.content.DynamicFormExtComponentView',{
	extend : 'Ext.Container',
	alias: 'widget.dynamicFormExtComponentView',
    width : '99%',
    requires : ['Portal.view.content.partialFormView.SimpleFormView',
                'Portal.view.content.partialFormView.FieldSetFormView',
                'Portal.view.content.partialFormView.MultiColumnFormView',
                'Portal.view.content.partialFormView.TabFormView',
                'Portal.view.content.partialFormView.InnerTabsFormView',
                'Portal.view.content.partialFormView.WindowFormView',
                'Portal.view.content.partialFormView.FormFieldView',
                'Portal.view.content.partialFormView.CheckRadioView'],
	layout:'anchor',
    bodyPadding: 10,
    defaults: {
        /*bodyStyle: 'padding:15px',*/
        frame: false
    },
    items : [{
         xtype: 'panel',
         layout:'hbox',
         items : [{
            xtype: 'panel',
            width : '25%',
            border:false,
            layout: 'anchor',
            bodyStyle: 'padding:15px',
            items : [{
                        xtype : 'simpleFormView',
                    },{
                        xtype : 'fieldSetFormView'
                    },{
                        xtype : 'tabFormView'                  
                    }]
            },{
            xtype: 'panel',
            flex: 2,
            border:false,
            layout: 'anchor',
            bodyStyle: 'padding:15px',
            items : [{
                        xtype : 'multiColumnFormView',
                    },{
                        xtype : 'innerTabsFormView'
                    },{
                       xtype : 'windowFormView' 
                    },{
                        xtype: 'component',
                        height: 10
                    },{
                       xtype : 'checkRadioView'
                    }]
            },{
                xtype: 'panel',
                flex: 1,
                border:false,
                layout: 'anchor',
                bodyStyle: 'padding:15px',
                items : [{
                    xtype : 'formFieldView'
                }]
            }]
    }]
});

var showContactForm = function(){
    if(!win){
         var form = Ext.widget('form', {
             layout: {
                    type: 'vbox',
                    align: 'stretch'
                },
                border: false,
                bodyPadding: 10,

                fieldDefaults: {
                    labelAlign: 'top',
                    labelWidth: 100,
                    labelStyle: 'font-weight:bold'
                },
                items : [{
                    xtype: 'fieldcontainer',
                    fieldLabel: 'Your Name',
                    labelStyle: 'font-weight:bold;padding:0;',
                    layout: 'hbox',
                    defaultType: 'textfield',
                    fieldDefaults: {
                        labelAlign: 'top',
                    },
                    items : [{
                        flex: 1,
                        name: 'firstName',
                        itemId: 'firstName',
                        afterLabelTextTpl: required,
                        fieldLabel: 'First',
                        allowBlank: false
                    }, {
                        width: 30,
                        name: 'middleInitial',
                        fieldLabel: 'MI',
                        margins: '0 0 0 5'
                    }, {
                        flex: 2,
                        name: 'lastName',
                        afterLabelTextTpl: required,
                        fieldLabel: 'Last',
                        allowBlank: false,
                        margins: '0 0 0 5'
                    }]
                },{
                    xtype: 'textfield',
                    fieldLabel: 'Your Email Address',
                    afterLabelTextTpl: required,
                    vtype: 'email',
                    allowBlank: false
                }, {
                    xtype: 'textfield',
                    fieldLabel: 'Subject',
                    afterLabelTextTpl: required,
                    allowBlank: false
                }, {
                    xtype: 'textareafield',
                    fieldLabel: 'Message',
                    labelAlign: 'top',
                    flex: 1,
                    margins: '0',
                    afterLabelTextTpl: required,
                    allowBlank: false
                }],
                buttons: [{
                    text: 'Cancel',
                    handler: function() {
                        this.up('form').getForm().reset();
                        this.up('window').hide();
                    }
                }, {
                    text: 'Send',
                    handler: function() {
                        if (this.up('form').getForm().isValid()) {
                            // In a real application, this would submit the form to the configured url
                            // this.up('form').getForm().submit();
                            this.up('form').getForm().reset();
                            this.up('window').hide();
                            Ext.MessageBox.alert('Thank you!', 'Your inquiry has been sent. We will respond as soon as possible.');
                        }
                    }
                }]
         });
        win = Ext.widget('window',{
            title: 'Contact Us',
            closeAction: 'hide',
            width: 400,
            height: 400,
            minWidth: 300,
            minHeight: 300,
            layout: 'fit',
            frame : false,
            resizable: true,
            modal: true,
            items: form
        });
    }
     win.show();
}