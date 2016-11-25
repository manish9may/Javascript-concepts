Ext.define('Common.store.NavigationStore',{
	extend : 'Ext.data.TreeStore',
	alias : 'store.navigationStore',
	proxy : {
                type : 'ajax',
                url  : 'common/resources/data/navigation.json'
            }
})