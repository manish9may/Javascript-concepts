Ext.define('Portal.controller.FooterController', {
    extend: 'Ext.app.Controller',
    refs : [{
        selector : 'viewport > mainView > footerView > panel',
        ref : 'footerViewPanel'
    }],
    init: function() {
        console.log('Initialized Footer Controller! This happens before the Application launch function is called');   
        this.control({
            'viewport > mainView > footerView > panel' :{
                afterrender : function(cmp){
                    var me = this;
                    var footerViewPanel = me.getFooterViewPanel();
                    cmp.getEl().on('mouseover',function(event){
                        me.footerViewPanelMouseOver(footerViewPanel)
                    });
                    cmp.getEl().on('mouseout',function(event){
                        me.footerViewPanelMouseOut(footerViewPanel)
                    });
                }
            }
        });
    },
    footerViewPanelMouseOver : function(footerViewPanel){
        var config = {
                        'background': '#04408c',
                        'color' : '#fff'
                    }
        footerViewPanel.items.items[0].setBodyStyle(config);
    },
    footerViewPanelMouseOut : function(footerViewPanel){
        var config = {
                        'background': '#fff',
                        'color' : '#000'
                    }
        footerViewPanel.items.items[0].setBodyStyle(config);
    }
});