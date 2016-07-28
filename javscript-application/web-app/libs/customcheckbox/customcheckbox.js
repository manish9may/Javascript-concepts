$.fn.customCheckBox = function() {
	
    return this.each(function(i,e) {
		var elm = $(e);
		$(document).on('change click', 'input[type=checkbox]', function(){			
			if($(this).is(':checked')){
				$(this).parent('label').addClass('active');
			}else{
				$(this).parent('label').removeClass('active');
			}
		});
		if($(this).is(':checked')){
			$(this).parent('label').addClass('active');
		}else{
			$(this).parent('label').removeClass('active');
		}
	});
};

