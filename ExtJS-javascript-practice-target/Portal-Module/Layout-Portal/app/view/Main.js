Ext.define("Portal.view.Main", {
	extend: 'Ext.Container',
	alias: 'widget.mainView',
	layout : {
		type : 'vbox'
	},
	requires : ['Common.view.header.HeaderView','Common.view.footer.FooterView','Portal.view.content.ContentView'],
	items : [{
				xtype : 'headerView'
			},{
				flex : 1,
				xtype : 'contentView',
			},{
				xtype : 'footerView'
			}]
});