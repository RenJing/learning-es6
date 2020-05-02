// Book 深入理解ES6 p176 
// A simpler example
// can run in browser


function run(taskDef) {
	let task = taskDef();
	let result = task.next();

	function step() {
		if(!result.done) {
			result.value((data) => {
				result = task.next(data);
				step();
			})
		}
	}
	step();
}


var readFile = function(callback) {
	setTimeout(() => {
		callback(".............contents.........")
	}, 1000)
	
}


var job = function() {
	return (callback) => {
		readFile(callback);
	}
}


run(function*() {
	let result = yield job();
	console.log(result);
})