Ext.define("Portal.view.content.AccordionExtLayoutView", {
    extend: 'Ext.Container',
    alias: 'widget.accordionExtLayoutView',
    layout: 'accordion',
    defaults: {bodyStyle: 'padding:15px'},
    items: [{
                title: 'Introduction',
                tools: [{type:'gear'},{type:'refresh'}],
                html: '<p>Here is some accordion content.  Click on one of the other bars below for more.</p>'
            },{
                title: 'Basic Content',
                itemId : 'basicContext',
                html: '<br /><br /><p>More content.  Open the third panel for a customized look and feel example.</p>',
                items: {
                    xtype: 'button',
                    text: 'Show Next Panel'
                }
            },{
                id: 'acc-custom',
                title: 'Custom Panel Look and Feel',
                cls: 'custom-accordion', // look in layout-browser.css to see the CSS rules for this class
                html: '<p>Here is an example of how easy it is to completely customize the look and feel of an individual panel simply by adding a CSS class in the config.</p>'
            }]
});