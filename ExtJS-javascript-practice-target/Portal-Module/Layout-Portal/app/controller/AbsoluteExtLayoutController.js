Ext.define('Portal.controller.AbsoluteExtLayoutController', {
    extend: 'Ext.app.Controller',
    refs : [{
        selector : 'viewport > mainView > contentView > panel > tabpanel > [itemId = "absoluteExtLayout"]',
        ref : 'absoluteExtLayout'
    }],
    init: function() {
        var me = this;
        console.log('Initialized Absolute Ext Layout Controller! This happens before the Application launch function is called');
        me.control({
            'viewport > mainView > contentView > panel > tabpanel > [itemId = "absoluteExtLayout"]' : {
                activate : function(cmp){
                    var absoluteExtLayout = me.getAbsoluteExtLayout();
                    var component = [{
                                        xtype : 'absoluteExtLayoutView',
                                        height : screen.availHeight - 345,
                                    }];
                    absoluteExtLayout.remove(0);
                    absoluteExtLayout.add(component);
                }
            }
        });
    }
});