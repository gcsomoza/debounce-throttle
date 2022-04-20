function throttle(callback, delay = 1000) {
	var interval = null;
	var lastArgs = null;
	var shouldWait = false;
	return function(...args) {
		if(shouldWait) {
			lastArgs = args;
			return;
		}

		callback(...args);
		shouldWait = true;

		interval = setInterval(function() {
			if(lastArgs != null) {
				callback(...lastArgs);
				lastArgs = null;
			}
			else {
				clearInterval(interval);
				shouldWait = false;
			}
		}, delay);
	};
}