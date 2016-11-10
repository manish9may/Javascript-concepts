Ext.define('Portal.model.GridExtComponentModel',{
	extend : 'Ext.data.Model',
	fields : [{name : 'auc'},
			  {name : 'item'},
			  {name : 'owner'},
			  {name : 'ownerRealm'},
			  {name : 'bid'},
			  {name : 'buyout'},
			  {name : 'quantity'},
			  {name : 'timeLeft'},
			  {name : 'rand'},
			  {name : 'seed'}]
})