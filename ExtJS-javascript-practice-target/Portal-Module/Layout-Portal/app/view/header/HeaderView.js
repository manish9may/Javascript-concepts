Ext.define("Portal.view.header.HeaderView", {
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
	        html: 'Header View',
	        bodyPadding: 20,
	        border: false
    	}]
    }]
});