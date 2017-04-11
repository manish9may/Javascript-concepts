/**

Handling aync calls

**/

let promiseToCleanTheRoom = new Promise(function(resolve,reject){
	// clean the room
	console.log('cleanig is going on')
	let isClean = false;

	if(isClean){
		resolve('Clean')
	}else{
		reject('not Clean');
	}
});

promiseToCleanTheRoom.then(function(fromResolve){
	console.log('the room is '+fromResolve)
}).catch(function(fromReject){
	console.log('the room is '+fromReject)
});


let cleanRoom = function(){
	return new Promise(function(resolve,reject){
		resolve('Cleaned the room');
	})
}

let removeGarbage = function(message){
	return new Promise(function(resolve,reject){
		resolve(message + ' remove Garbage');
	})
}

let winSuccess = function(message){
	return new Promise(function(resolve,reject){
		resolve(message + ' won success');
	})
}

cleanRoom().then(function(resolve){
	return removeGarbage(resolve)
}).then(function(resolve){
	return winSuccess(resolve);
}).then(function(resolve){
	console.log(resolve)
});

Promise.all([cleanRoom(),removeGarbage(),winSuccess()]).then(function(){
	console.log('all finished');
});

Promise.race([cleanRoom(),removeGarbage(),winSuccess()]).then(function(){
	console.log('one of them is finished');
})
