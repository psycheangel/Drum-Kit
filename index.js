
function audio (typeOfObj, callback){
		var object = document.createElement('AUDIO');
		if(typeOfObj === object.tagName)
		callback(object);
//callback(document.createElement('AUDIO'));	
}
function switcher(evented) {
	// body...
	switch(this.element) {
		case 'w' :
		this.sound.src = 'sounds/tom-1.mp3';
			break;
		case 'a' :

		this.sound.src = 'sounds/tom-2.mp3';
			break;
		case 's' :

		this.sound.src = 'sounds/tom-3.mp3';
			break;
		case 'd' :

		this.sound.src = 'sounds/tom-4.mp3';
			break

		case 'j' :

		this.sound.src = 'sounds/crash.mp3';
			break;
		case 'k' :

		this.sound.src = 'sounds/snare.mp3';
			break;
		case 'l' :

		this.sound.src = 'sounds/kick-bass.mp3';
			break;
			
	}
}

function init (classes, callback) {
	var i = document.querySelectorAll('.'+classes);
	if(classes === i[0].classList[1])
		callback(i)
}
function evented(element,callback){
	var self = this;
	this.element = element;
	this.sound = audio;
	this.switch = switcher;
	this.i = init;
	this.play = ()=> {
		self.switch();
		self.sound('AUDIO',function(e){
			e.src = self.sound.src;
			e.play();
		});	
	};
	this.setup = ()=> {
		self.i('drum',function(e){
			var list = [];
			for (var i = e.length - 1; i >= 0; i--) {
				e[i].addEventListener('click',(e)=>{
					self.element = e.target.classList[0];
					self.play();
				});
			list.push(e[i].classList[0]);
			}
		
			document.addEventListener('keypress',(e)=>{
			if(list.includes(e.key) == true ) {
				self.element = e.key;
				self.play();
			}
			});		
		});
	};
}
