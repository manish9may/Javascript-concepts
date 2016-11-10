Ext.define('Portal.controller.MainController', {
    extend: 'Ext.app.Controller',

    init: function() {
        console.log('Initialized Main Controller! This happens before the Application launch function is called');
        this.control({
        	'viewport > mainView > headerView' : {
        		render : this.onHeaderViewPanelRendered
        	},
        	'viewport > mainView > footerView' : {
        		render : this.onFooterViewPanelRendered
        	},
        	'viewport > mainView > contentView' : {
        		render : this.onContentViewPanelRendered
        	}
        });
    },
    onHeaderViewPanelRendered : function(){
    	console.log('The header panel was rendered');
    },
    onFooterViewPanelRendered : function(){
    	console.log('The footer panel was rendered');	
    },
    onContentViewPanelRendered : function(){
    	console.log('The content panel was rendered');		
    }
});