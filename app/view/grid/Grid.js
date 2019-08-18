Ext.define('SmsGrid.view.grid.Grid', {
	extend: 'Ext.grid.Panel',
	requires: [ 'SmsGrid.store.Personnel' ],
	xtype: 'smsgrid',
	stripeRows : true,
	columnLines: true,
	controller: 'main',
	viewModel: 'grid',
	bind: { store: '{Grid}', selection: '{selectedRecord}' },
	features: [
		{
			ftype: 'grouping',
			groupHeaderTpl: '{name} ({children.length})',
			startCollapsed: true
		}
	],
	columns: [{
			text: 'SMS Sync Id',
			dataIndex: 'smsSyncId',
			sortable: true,
			flex: 1,
			hidden: true
		}, {
			text: 'Version',
			dataIndex: 'smsSyncVer',
			sortable: true,
			flex: 1,
			hidden: true
		}, {
			text: 'User Modified Key',
			dataIndex: 'userIdModified',
			sortable: true,
			flex: 1,
			hidden: true
		}, {
			text: 'Modification Date',
			dataIndex: 'dateModified',
			xtype: 'datecolumn',
			format:'Y-m-d h:i:s A',
			sortable: true,
			flex: 1,
			hidden: true,
			filter: {
				type: 'date'
			}
		}, {
			text: 'Internal ID',
			dataIndex: 'internalId',
			sortable: true,
			flex: 1,
			hidden: true,
			align: 'center',
			filter: {
				type: 'list'
			}
		}, {
			xtype: 'datecolumn',
			format:'Y-m-d h:i:s A',
			dataIndex: 'dateModified',
			text: 'Creation Date',
			align: 'center',
			width: 140,
			filter: {
				type: 'date'
			}
		}, {
			xtype: 'datecolumn',
			format:'Y-m-d',
			dataIndex: 'dateModified',
			text: 'Date',
			align: 'center',
			width: 140,
			hidden: true,
			filter: {
				type: 'date'
			}
		}, {
			text: 'Sender Number',
			dataIndex: 'fromNumber',
			sortable: true,
			width: 100,
			align: 'center',
			filter: {
				type: 'list'
			}
		}, {
			text: 'Message ID',
			dataIndex: 'messageId',
			sortable: true,
			align: 'center',
			width: 220,
		}, {
			text: 'Message',
			dataIndex: 'message',
			sortable: true,
			align: 'center',
			flex: 1
		}, {
			text: 'Status',
			dataIndex: 'status',
			align: 'center',
			width: 80,
			sortable: true,
			filter: {
				type: 'list'
			}
		}
	],
	listeners: {
		itemdblclick: 'onDoubleClick',
		itemcontextmenu: 'contextMenu'
	},
	plugins: [
		{
			ptype: 'gridfilters'
		}
	],
	selModel: {
		selType: 'checkboxmodel',
		listeners: {
			//selectionchange:'onEntityGridSltCnge'
		}
	},
	viewConfig : {
		enableTextSelection : true
	}
});