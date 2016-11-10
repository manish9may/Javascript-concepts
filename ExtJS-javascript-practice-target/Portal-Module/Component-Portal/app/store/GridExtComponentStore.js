Ext.define('Portal.store.GridExtComponentStore',{
	extend : 'Ext.data.Store',
	alias : 'store.gridExtComponentStore',
	pageSize: 3,
	model : 'Portal.model.GridExtComponentModel',
	proxy : {
		type : 'memory',
		enablePaging : true,
		reader : {
			type : 'json'
		}
	},
	data : [
      {
        "auc": 234421082,
        "item": 3821,
        "owner": "???",
        "ownerRealm": "???",
        "bid": 84500,
        "buyout": 90000,
        "quantity": 1,
        "timeLeft": "VERY_LONG",
        "rand": 0,
        "seed": 385088896
      },
      {
        "auc": 234242934,
        "item": 72093,
        "owner": "???",
        "ownerRealm": "???",
        "bid": 399999,
        "buyout": 399999,
        "quantity": 20,
        "timeLeft": "VERY_LONG",
        "rand": 0,
        "seed": 517959808
      },
      {
        "auc": 234278691,
        "item": 74863,
        "owner": "???",
        "ownerRealm": "???",
        "bid": 13750,
        "buyout": 15000,
        "quantity": 1,
        "timeLeft": "VERY_LONG",
        "rand": 0,
        "seed": 1789946496
      },
      {
        "auc": 233976253,
        "item": 41599,
        "owner": "???",
        "ownerRealm": "???",
        "bid": 1298750,
        "buyout": 1300000,
        "quantity": 1,
        "timeLeft": "VERY_LONG",
        "rand": 0,
        "seed": 746278272
      },
      {
        "auc": 233873291,
        "item": 76653,
        "owner": "???",
        "ownerRealm": "???",
        "bid": 199999,
        "buyout": 199999,
        "quantity": 1,
        "timeLeft": "LONG",
        "rand": 0,
        "seed": 835864704
      },
      {
        "auc": 233724549,
        "item": 33433,
        "owner": "???",
        "ownerRealm": "???",
        "bid": 799000,
        "buyout": 899000,
        "quantity": 1,
        "timeLeft": "VERY_LONG",
        "rand": 0,
        "seed": 1203891456
      },
      {
        "auc": 234027108,
        "item": 42902,
        "owner": "???",
        "ownerRealm": "???",
        "bid": 5000000,
        "buyout": 5000000,
        "quantity": 1,
        "timeLeft": "VERY_LONG",
        "rand": 0,
        "seed": 1147328256
      },
      {
        "auc": 233750077,
        "item": 40111,
        "owner": "???",
        "ownerRealm": "???",
        "bid": 890999,
        "buyout": 989999,
        "quantity": 1,
        "timeLeft": "VERY_LONG",
        "rand": 0,
        "seed": 1409330304
      }]
});