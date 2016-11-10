Ext.define('Portal.view.content.ColumnExtLayoutView',{
	extend : 'Ext.Container',
	alias : 'widget.columnExtLayoutView',
    layout: 'column',
    bodyStyle: 'padding:5px',
    defaults: {bodyStyle:'padding:15px'},
    items : [{
                title: 'Width = 0.25',
                columnWidth: 0.25,
                html: '<p>This is some short content.</p>'
            },{
                title: 'Width = 0.75',
                columnWidth: 0.75,
                ui: Ext.themeName == 'neptune' ? 'light' : 'default',
                html: '<p>This is some longer content.</p><p>This is some longer content.</p><p>This is some longer content.</p><p>This is some longer content.</p><p>This is some longer content.</p><p>This is some longer content.</p>'
            },{
                title: 'Width = 250px',
                width: 250,
                html: 'Not much here!'
            }]
});