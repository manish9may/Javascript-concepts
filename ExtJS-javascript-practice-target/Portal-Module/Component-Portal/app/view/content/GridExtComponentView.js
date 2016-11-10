Ext.define('Portal.view.content.GridExtComponentView',{
	extend : 'Ext.grid.Panel',
	alias : 'widget.gridExtComponentView',
	requires : ['Portal.store.GridExtComponentStore'],
	store : [],
	initComponent : function(){
		var me = this;
		Ext.apply(me,{
			stripeRows:true,
            columnLines:true,
            columns : [{
                    text:'auc',
                    sortable:true,
                    dataIndex:'auc'
                },{
                    text:'item',
                    sortable:true,
                    dataIndex:'item'
                },{
                    text:'owner',
                    sortable:true,
                    dataIndex:'owner'
                },{
                    text:'ownerRealm',
                    sortable:true,
                    dataIndex:'ownerRealm'
                },{
                    text:'bid',
                    sortable:true,
                    dataIndex:'bid'
                },{
                    text:'buyout',
                    sortable:true,
                    dataIndex:'buyout'
                },{
                    text:'quantity',
                    sortable:true,
                    dataIndex:'quantity'
                },{
                    text:'timeLeft',
                    sortable:true,
                    dataIndex:'timeLeft'
                },{
                    text:'rand',
                    sortable:true,
                    dataIndex:'rand'
                },{
                    text:'seed',
                    sortable:true,
                    dataIndex:'seed'
                }],
                viewConfig: {
        			forceFit: true
    			},
    			bbar : new Ext.PagingToolbar({
    				store: this.store,
	                displayInfo: true,
	                displayMsg: 'Displaying {0} to {1} of {2} &nbsp;records ',
	                emptyMsg: "No records to display&nbsp;",
    			})
		});
		me.callParent(arguments);
		this.on('render', this.loadStore, this);
	},
	loadStore: function() {
		
    }
});