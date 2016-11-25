Ext.define("Common.view.content.ContentView", {
    extend: 'Ext.Container',
    alias: 'widget.contentView',
    width : '100%',
    bodyBorder : false,
    requires : ['Common.view.navigation.NavigationView'],
    layout: {
        type: 'border'
    },
    items: [{
        region : 'center',
        title : 'Content',
        xtype: 'panel',
        layout : 'fit',
        items : [{
            layout: 'border',
            bodyBorder: false,
            defaults: {
                collapsible: true,
                split: true,
                bodyPadding: 15
            },
            items : [{
                title: 'Navigation',
                region:'west',
                itemId : 'navigation-panel',
                floatable: false,
                margins: '5 0 0 0',
                width: 275,
                minWidth: 100,
                maxWidth: 250,
                items : [{
                    xtype : 'navigationView'
                }]
                //html: '<p>Secondary content like navigation links could go here</p>'
            },{
                title: 'Main Content',
                collapsible: false,
                region: 'center',
                margins: '5 0 0 0',
                html: '<h1>Main Page</h1><p>This is where the main content would go</p>'
            }]
        }]
        }]
});