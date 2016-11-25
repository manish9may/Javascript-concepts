Ext.define("Common.view.header.HeaderView", {
    extend: 'Ext.Container',
    alias: 'widget.headerView',
    layout: {
        type: 'hbox'
    },
    items: [{
        xtype : 'panel',
        layout:'fit',
        width : screen.availWidth,
        items: [{
            bodyPadding: 20,
            border: false,
            layout : 'hbox',
            items : [{
                html: 'Header View',
                border: false
            },{
                xtype : 'component',
                width : screen.availWidth - 180
            },{
                xtype: 'button',
                itemId : 'application-back',
                text : 'Back'
            }]
        }]
    }]
});