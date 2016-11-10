Ext.define('Portal.view.content.BorderExtLayoutView',{
	extend : 'Ext.Container',
	alias : 'widget.borderExtLayoutView',
	title: 'Border Layout',
    layout: 'border',
    bodyBorder: false,
    defaults: {
        collapsible: true,
        split: true,
        bodyPadding: 15
    },
    items : [{
                title: 'Footer',
                region: 'south',
                height: 150,
                minHeight: 75,
                maxHeight: 250,
                html: '<p>Footer content</p>'
            },{
                title: 'Navigation',
                region:'west',
                floatable: false,
                margins: '5 0 0 0',
                width: 175,
                minWidth: 100,
                maxWidth: 250,
                html: '<p>Secondary content like navigation links could go here</p>'
            },{
                title: 'Main Content',
                collapsible: false,
                region: 'center',
                margins: '5 0 0 0',
                html: '<h1>Main Page</h1><p>This is where the main content would go</p>'
            }]
});