function debounce(callback, delay = 1000) {
	var timeout = null;
	return function(...args) {
		clearTimeout(timeout);
		timeout = setTimeout(function() {
			callback(...args);
		}, delay);
	};
};