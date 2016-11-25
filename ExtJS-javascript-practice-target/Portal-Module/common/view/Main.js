Ext.define('Common.view.Main',{
	extend : 'Ext.Container',
	alias : 'widget.mainView',
	layout : 'vbox',
	requires : ['Common.view.header.HeaderView','Common.view.footer.FooterView','Common.view.content.ContentView'],
	items : [{
				xtype : 'headerView'
			},{
				xtype : 'contentView',
				flex : 1
			},{
				xtype : 'footerView'
			}]
})