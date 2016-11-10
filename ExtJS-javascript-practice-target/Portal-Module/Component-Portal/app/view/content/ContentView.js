Ext.define("Portal.view.content.ContentView", {
    extend: 'Ext.Container',
    alias: 'widget.contentView',
    width : '100%',
    bodyBorder : false,
    requires : ['Portal.view.content.GridExtComponentView','Portal.view.content.DynamicFormExtComponentView'],
    layout: {
        type: 'border'
    },
    items: [{
        region : 'center',
        title : 'Content',
        xtype: 'panel',
        layout : 'fit',
        items : [{
            xtype : 'tabpanel',
            //layout : 'fit',
            items : [{
                title : 'Grid Ext Component',
                itemId : 'gridExtComponent',
                //autoScroll: true
            },{
                title : 'Dynamic Form Ext Component',
                itemId : 'dynamicFormExtComponent',
                autoScroll: true
            }]
        }]
    }]
});