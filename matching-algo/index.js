(function(closestMatch){
	closestMatch.matchListener = function(masters,latch){
		if(typeof masters === 'object' && masters.constructor === Array && typeof latch !== 'undefined' && latch !== null && latch !== ''){
			var probabilityList = [];
			for(var i = 0; i < masters.length;i++){
				var probability;
				probability = 0;
				var master = masters[i].replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').replace(/\s/g, '');
				var input = latch.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').replace(/\s/g, '');
				for(var j = 2 ; j < input.length / 3 ;j++){
					var listOfChunk = master.match(new RegExp('.{1,' + j  + '}', 'g'));
						for( var k = 0 ; k < listOfChunk.length; k ++){
							 var occr = (input.match(new RegExp(listOfChunk[k], "g")) || []).length;
							 probability = probability + occr;
						}
				}
			 	probabilityList.push(probability);
			};
			var maxOccr = probabilityList.indexOf(Math.max.apply(this,probabilityList));
			return masters[maxOccr];
		}
	}
})(window.closestMatch = window.closestMatch || {});


console.log(closestMatch.matchListener(['C-6/6280, Vasant Kunj',
							'6430, Sector C6, Vasant Kunj',
							'Plot 16, Udyog Vishar Phase -4, Gurgaon',
							'8231, Sector C8, Vasant Kunj'], '6279, Sector C6, Vasant Kunj'))