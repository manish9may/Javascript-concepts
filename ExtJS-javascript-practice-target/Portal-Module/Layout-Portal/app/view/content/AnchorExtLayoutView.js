Ext.define('Portal.view.content.AnchorExtLayoutView',{
	extend : 'Ext.Container',
	alias : 'widget.anchorExtLayoutView',
	layout:'anchor',
    bodyPadding: 10,
    defaults: {
        bodyStyle: 'padding:15px',
        frame: false
    },
    items : [{
                title: 'Panel 1',
                height: 100,
                anchor: '50%',
                margin: '0 0 10 0',
                html: '<p>Width = 50% of the container</p>'
            },{
                title: 'Panel 2',
                height: 100,
                anchor: '-100',
                margin: '0 0 10 0',
                html: '<p>Width = container width - 100 pixels</p>'
            },{
                title: 'Panel 3',
                anchor: '-10, -250',
                html: '<p>Width = container width - 10 pixels</p><p>Height = container height - 250 pixels</p>'
            }]
})