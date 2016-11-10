Ext.define('Portal.view.content.FitExtLayoutView',{
	extend : 'Ext.Container',
	alias : 'widget.fitExtLayoutView',
	layout: 'fit',
    items: {
        title: 'Inner Panel',
        html: '<p>This panel is fit within its container.</p>',
        bodyStyle: 'padding:15px',
        ui: Ext.themeName == 'neptune' ? 'light' : 'default',
        border: false
    }
})