Ext.define('Portal.controller.AccordionExtLayoutController', {
    extend: 'Ext.app.Controller',
    refs : [{
        selector : 'viewport > mainView > contentView > panel > tabpanel > [itemId = "accordionExtLayout"]',
        ref : 'accordionExtLayout'
    }],
    init: function() {
        var me = this;
        console.log('Initialized Accordion Ext Layout Controller! This happens before the Application launch function is called');
        me.control({
            'viewport > mainView > contentView > panel > tabpanel > [itemId = "accordionExtLayout"]' : {
                activate : function(cmp){
                    var accordionExtLayout = me.getAccordionExtLayout();
                    var component = [{
                                        xtype : 'accordionExtLayoutView',
                                        height : screen.availHeight - 345,
                                        itemId : 'accordionExtLayoutView'
                                    }];
                    accordionExtLayout.remove(0);
                    accordionExtLayout.add(component);
                }
            },
            'viewport > mainView > contentView > panel > tabpanel > [itemId = "accordionExtLayout"] > [itemId = "accordionExtLayoutView"] > [itemId = "basicContext"] > button' : {
                    click : function(aButton, aEvent, aOptions){
                        var accordionExtLayout = me.getAccordionExtLayout();
                        accordionExtLayout.items.items[0].items.items[2].expand(true);
                    }
            }
        });
    }
});