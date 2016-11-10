Ext.define('Portal.controller.HeaderController', {
    extend: 'Ext.app.Controller',
    refs : [{
        selector : 'viewport > mainView > headerView > panel',
        ref : 'headerViewPanel'
    }],
    init: function() {
        console.log('Initialized Header Controller! This happens before the Application launch function is called');   
        this.control({
            'viewport > mainView > headerView > panel' :{
                afterrender : function(cmp){
                    var me = this;
                    var headerViewPanel = me.getHeaderViewPanel();
                    cmp.getEl().on('mouseover',function(event){
                        me.headerViewPanelMouseOver(headerViewPanel)
                    });
                    cmp.getEl().on('mouseout',function(event){
                        me.headerViewPanelMouseOut(headerViewPanel)
                    });
                }
            }
        });
    },
    headerViewPanelMouseOver : function(headerViewPanel){
        //console.log('Header panel mouseover handler');
        var config = {
                        'background': '#04408c',
                        'color' : '#fff'
                    }
        headerViewPanel.items.items[0].setBodyStyle(config);
    },
    headerViewPanelMouseOut : function(headerViewPanel){
        //console.log('Header panel mousout handler');
        var config = {
                        'background': '#fff',
                        'color' : '#000'
                    }
        headerViewPanel.items.items[0].setBodyStyle(config);
    }
});