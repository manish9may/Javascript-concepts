Ext.define("Portal.view.footer.FooterView", {
    extend: 'Ext.Container',
    alias: 'widget.footerView',
    layout: {
        type: 'hbox'
    },
    items: [{
    	xtype : 'panel',
    	layout:'fit',
    	width : screen.availWidth,
    	items: [{
	        html: 'Footer View',
	        bodyPadding: 20,
	        border: false
    	}]
    }]
});