Ext.define('Common.view.navigation.NavigationView',{
	extend: 'Ext.tree.Panel',
	alias : 'widget.navigationView',
	rootVisible: false,
    lines: false,
    useArrows: true,
    hideHeaders: true,
    collapseFirst: false,
    split: true,
    stateful: true,
    collapsible: true,
    initComponent: function() {
        var me = this;
        Ext.apply(me, {
            store: Ext.create('Common.store.NavigationStore')
        });
        me.callParent(arguments);
    }
});