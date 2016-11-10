Ext.define('Portal.view.content.VBoxExtLayoutView',{
	extend : 'Ext.Container',
	alias : 'widget.vBoxExtLayoutView',
	bodyPadding: 10,
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'stretch'
    },
    defaults: {
        frame: false
    },
    items : [{
                title: 'Panel 1',
                flex: 1,
                margin: '0 0 10 0',
                html: 'flex : 1'
            }, {
                title: 'Panel 2',
                height: 100,
                margin: '0 0 10 0',
                html: 'height: 100'
            }, {
                title: 'Panel 3',
                flex: 2,
                html: 'flex : 2'
            }]
})