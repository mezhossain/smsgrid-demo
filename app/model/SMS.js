Ext.define('SmsGrid.model.SMS', {
	extend: 'Ext.data.Model',
	fields: [
		{ name: 'smsSyncId', type: 'int' },
		{ name: 'smsSyncVer', type: 'int' },
		{ name: 'internalId', type: 'int' },
		{ name: 'userIdModified', type: 'int' },
		{ name: 'fromNumber', type: 'string'},
		{ name: 'message', type: 'string'},
		{ name: 'messageId', type: 'string'},
		{ name: 'status', type: 'string'},
		{ name: 'dateModified', type: 'date'},    
	]
});
