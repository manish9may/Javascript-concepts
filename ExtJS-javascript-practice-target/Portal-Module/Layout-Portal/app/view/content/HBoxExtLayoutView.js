Ext.define('Portal.view.content.HBoxExtLayoutView',{
	extend : 'Ext.Container',
	alias : 'widget.hBoxExtLayoutView',
	bodyPadding: 10,
    layout: {
        type: 'hbox',
        pack: 'start',
        align: 'stretch'
    },
    defaults: {
        frame: false
    },
    items : [{
                title: 'Panel 1',
                flex: 1,
                margin: '0 10 0 0',
                html: 'flex : 1'
            }, {
                title: 'Panel 2',
                width: 100,
                margin: '0 10 0 0',
                html: 'width : 100'
            }, {
                title: 'Panel 3',
                flex: 2,
                html: 'flex : 2'
            }]
})