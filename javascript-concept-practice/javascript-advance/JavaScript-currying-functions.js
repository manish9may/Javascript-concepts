'use strict'

var avg = function(...n){
	let tot = 0;
	for(let i = 0 ; i < n.length ; i++){
		tot += n[i]
	}

	return tot/n.length;
}

var spiceUp = function(fn,...n){ 
	return function(...m){
		return fn.apply(this,n.concat(m));
	};;
}

var doAvg = spiceUp(avg,1,2,3);
console.log(doAvg(4,5,6));

var sayWhat = function(a){
	return function(b){
		return function(c){
			console.log('saying ',a,' to ',b,' using ',c);
		}
	}
}

sayWhat('hello')('toFriends')('javaScript')