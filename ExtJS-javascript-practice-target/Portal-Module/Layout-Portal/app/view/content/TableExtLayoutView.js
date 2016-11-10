Ext.define('Portal.view.content.TableExtLayoutView',{
	extend : 'Ext.Container',
	alias : 'widget.tableExtLayoutView',
	layout: {
                type: 'table',
                columns: 4
            },
    defaults: {
        bodyStyle:'padding:15px 20px',
        border: true
    },
    items : [{
                title: 'Lots of Spanning',
                html: '<p>Row spanning.</p><br /><p>Row spanning.</p><br /><p>Row spanning.</p><br /><p>Row spanning.</p><br /><p>Row spanning.</p><br /><p>Row spanning.</p>',
                rowspan: 3
            },{
                title: 'Basic Table Cell',
                html: '<p>Basic panel in a table cell.</p>',
                cellId: 'basic-cell',
                cellCls: 'custom-cls'
            },{
                html: '<p>Plain panel</p>'
            },{
                title: 'Another Cell',
                html: '<p>Row spanning.</p><br /><p>Row spanning.</p><br /><p>Row spanning.</p><br /><p>Row spanning.</p>',
                width: 300,
                rowspan: 2
            },{
                html: 'Plain cell spanning two columns',
                colspan: 2
            },{
                title: 'More Column Spanning',
                html: '<p>Spanning three columns.</p>',
                colspan: 3
            }]
});