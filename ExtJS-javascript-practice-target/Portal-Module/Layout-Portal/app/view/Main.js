Ext.define("Portal.view.Main", {
	extend: 'Ext.Container',
	alias: 'widget.mainView',
	layout : {
		type : 'vbox'
	},
	requires : ['Portal.view.header.HeaderView','Portal.view.footer.FooterView','Portal.view.content.ContentView'],
	items : [{
				xtype : 'headerView'
			},{
				flex : 1,
				xtype : 'contentView',
			},{
				xtype : 'footerView'
			}]
});