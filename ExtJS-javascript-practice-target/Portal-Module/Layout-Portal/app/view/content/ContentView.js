Ext.define("Portal.view.content.ContentView", {
    extend: 'Ext.Container',
    alias: 'widget.contentView',
    width : screen.availWidth - 15,
    bodyBorder : false,
    requires : ['Portal.view.content.AbsoluteExtLayoutView',
                'Portal.view.content.AccordionExtLayoutView',
                'Portal.view.content.AnchorExtLayoutView',
                'Portal.view.content.BorderExtLayoutView',
                'Portal.view.content.CardWizardExtLayoutView',
                'Portal.view.content.ColumnExtLayoutView',
                'Portal.view.content.FitExtLayoutView',
                'Portal.view.content.TableExtLayoutView',
                'Portal.view.content.VBoxExtLayoutView',
                'Portal.view.content.HBoxExtLayoutView'],
    layout: {
        type: 'border'
    },
    items: [{
        region : 'center',
        title : 'Content',
        items : [{
            xtype : 'tabpanel',
            items : [{
                title : 'Absolute Ext Layout',
                itemId : 'absoluteExtLayout'
            },{
                title : 'Accordion Ext Layout',
                itemId : 'accordionExtLayout'
            },{
                title : 'Anchor Ext Layout',
                itemId : 'anchorExtLayout'
            },{
                title : 'Border Ext Layout',
                itemId : 'borderExtLayout'
            },{
                title : 'Card (Wizard) Ext Layout',
                itemId : 'cardWizardExtLayout'
            },{
                title : 'Coulmn Ext Layout',
                itemId : 'columnExtLayout'
            },{
                title : 'Fit Ext Layout',
                itemId : 'fitExtLayout'
            },{
                title : 'Table Ext Layout',
                itemId : 'tableExtLayout',
                cls : 'table-ext-layout'
            },{
                title : 'vBox Ext Layout',
                itemId : 'vBoxExtLayout'
            },{
                title : 'hBox Ext Layout',
                itemId : 'hBoxExtLayout'
            }]
        }]
    }]
});