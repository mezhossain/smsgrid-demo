/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('SmsGrid.view.main.MainController', {
	extend: 'Ext.app.ViewController',

	alias: 'controller.main',

	onDoubleClick: function (dataview, record, item, index, e) {
		var thisInstance = this;
		const selectedRecord = this.getViewModel().get('selectedRecord');
		var updateForm = Ext.create('Ext.Window', {
			extend: 'Ext.window.Window',
			title: 'Update Details',
			iconCls: 'x-fa fa-plus',
			layout: 'form',
			xtype: 'form',
			width: 400,
			plain: true,
			jsonSubmit: true,

			items: [{
				xtype: 'displayfield',
				fieldLabel: 'Sender Number',
				name: 'fromNumber',
				value: record.data['fromNumber'],
			}, {
				xtype: 'displayfield',
				fieldLabel: 'Message ID',
				name: 'messageId',
				value: record.data['messageId']
			}, {
				xtype: 'displayfield',
				fieldLabel: 'Creation Date',
				name: 'dateModified',
				value: record.data['dateModified']
			}, {
				xtype: 'textarea',
				layout: 'vbox',
				fieldLabel: 'Message',
				name: 'message',
				value: record.data['message']
			}, {
				xtype: 'textfield',
				fieldLabel: 'Comment',
				name: 'comment',
			}],
			
			dockedItems: [
				{
					xtype: 'toolbar',
					dock: 'bottom',
					ui: 'footer',
					items: [
						{
							xtype: 'button',
							text: 'Cancel',
							handler: function () {
								updateForm.close();
							}
						}, {
							xtype: 'button',
							text: 'Update',
							listeners: {
								click: function () {
									var newMessage = this.up('window').down('textarea[name=message]').getValue();
									var update = {
										smsSyncId: selectedRecord.data['smsSyncId'], 
										smsSyncVer: selectedRecord.data['smsSyncVer'], 
										userIdModified: selectedRecord.data['userIdModified'],
										dateModified: selectedRecord.data['dateModified'],
										fromNumber: selectedRecord.data['fromNumber'],
										messageId: selectedRecord.data['messageId'],
										message: newMessage,
										status: selectedRecord.data['fromNumber'],
									};
									var store = thisInstance.getStore('Grid');
									var updateRecord = store.findRecord('smsSyncId',selectedRecord.data.smsSyncId);
									console.log(updateRecord);
									updateRecord.set('message',newMessage);
									store.load();
									thisInstance.getView().refresh;
									// Ext.Ajax.request({
									//     url: '/jobs/update',
									//     method: 'PUT',
									//     jsonData: Ext.util.JSON.encode(updatedJob),
									//     headers:
									//     {
									//         'Content-Type': 'application/json'
									//     },
									//     success: function (response) {
									//         var obj = Ext.decode(response.responseText);
									//         console.log(obj);
									//     },
									//     failure: function () {
									//         console.log("Failed");
									//     }
									// })
									updateForm.close();
								}
							}
						}]
				}]
		}).show();
	},
});
