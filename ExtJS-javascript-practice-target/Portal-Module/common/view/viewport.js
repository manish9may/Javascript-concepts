Ext.define('Common.view.Viewport',{
	renderTo : Ext.getBody(),
	extend : 'Ext.container.Viewport',
	minWidth: 750,
    minHeight: 550,
    autoScroll: true,
    layout : 'fit',
    items : [{
    		xtype: 'mainView',
	        width: '100%',
	        height: '100%'
    }]
})