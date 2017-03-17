function ErrorHandling(){
	this.catch = function(e){
		this.fabric.error(e);
	};
}

module.exports = ErrorHandling;
