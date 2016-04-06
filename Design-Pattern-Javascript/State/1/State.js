var Player = function(){
	this.state;
}
Player.prototype = {
	states :{
		playing : {
			initialize : function(target){
				this.target = target;
			},
			execute : function(){
				console.log("Playing!");
			},
			play : function(){
				console.log("Already Playing!");
			},
			stop : function(){
				this.target.changeState(this.target.states.stopping);
			},
			pause : function(){
				this.target.changeState(this.target.states.pausing)
			},
			exit : function(){
				console.log('tearing down the playing state');
			}
		},
		stopping : {
			initialize : function(target){
				this.target = target;
			},
			execute : function(){
				console.log('setting up the stopping state');
			},
			play : function(){
				this.target.changeState(this.target.states.playing);
			},
			stop : function(){
				console.log('already stopped!')
			},
			pause : function(){
				this.target.changeState(this.target.states.pausing);
			},
			exit : function(){
				console.log('tearing down the stopping state'); 
			}
		},
		pausing : {
			initialize : function(target){
				this.target = target;
			},
			execute : function(){
				console.log('setting up the pausing state');
			},
			play : function(){
				this.target.changeState(this.target.states.playing);
			},
			stop : function(){
				this.target.changeState(this.target.states.stopping);
			},
			pause : function(){
				console.log('already paused!');
			},
			exit : function(){
				console.log('tearing down the pausing state!');
			}
		}
	},
	initialize : function(){
		this.states.playing.initialize(this);
		this.states.stopping.initialize(this);
		this.states.pausing.initialize(this);
		this.state = this.states.stopping;
	},
	play : function(){
		this.state.play();
	},
	stop : function(){
		this.state.stop();
	},
	pause : function(){
		this.state.pause();
	},
	changeState : function(state){
		if(this.state != state){
			this.state.exit();
			this.state = state;
			this.state.execute();
		}
	}
}

var player  = new Player();
player.initialize();
player.stop();
player.play();
player.pause();