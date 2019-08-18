Ext.define('SmsGrid.store.Personnel', {
	extend: 'Ext.data.Store',
	alias: 'store.personnel',
	storeId: 'Personnel',
	model: 'SmsGrid.model.SMS',
	fields: [
		'smsSyncId', 
		'smsSyncVer',
		'userIdModified',
		'dateModified',
		'internalId',
		'fromNumber',
		'messageId',
		'message',
		'status'
	],

	data: { 
		items: [{ 
			smsSyncId: '100093', 
			smsSyncVer: '0', 
			userIdModified: '2019-07-25 04:21:34 PM',
			dateModified:'',
			fromNumber:'555-111-1111',
			messageId:'',
			message:'',
			status:'',
		}, { 
			smsSyncId: '100093', 
			smsSyncVer: '', 
			userIdModified: '2019-07-25 04:21:35 PM',
			dateModified:'',
			fromNumber:'555-111-2222',
			messageId:'',
			message:'Auf Wiedersehen, my darling',
			status:'',
		}, { 
			smsSyncId: '100093', 
			smsSyncVer: '', 
			userIdModified: '2019-07-25 04:21:36 PM',
			dateModified:'',
			fromNumber:'555-111-3333',
			messageId:'',
			message:'Casket match',
			status:'',
		}, { 
			smsSyncId: '100093', 
			smsSyncVer: '', 
			userIdModified: '2019-07-25 04:21:37 PM',
			dateModified:'',
			fromNumber:'555-111-4444',
			messageId:'',
			message:'Bring me the head of Alfredo Garcia',
			status:'',
		}
	]},

	proxy: {
		type: 'memory',
		reader: {
			type: 'json',
			rootProperty: 'items'
		}
	}
});
