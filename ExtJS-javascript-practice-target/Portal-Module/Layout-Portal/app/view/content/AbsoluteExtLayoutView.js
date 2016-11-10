Ext.define("Portal.view.content.AbsoluteExtLayoutView", {
    extend: 'Ext.Container',
    alias: 'widget.absoluteExtLayoutView',
    layout: 'absolute',
    items: [{
                title: 'Panel 1',
                x: 50,
                y: 50,
                width : screen.availWidth/2,
                height : screen.availHeight / 5,
                html: 'Positioned at x:50, y:50'
            },{
                title: 'Panel 2',
                x: 125,
                y: 125,
                width : screen.availWidth/2,
                height : screen.availHeight / 5,
                html: 'Positioned at x:125, y:125'
            }]
});