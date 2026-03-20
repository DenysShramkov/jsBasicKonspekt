'use strict';

console.log(document.querySelector(p))

function loadScript(src) {
	const script = document.createElement('script');
	script.src = src;
	// it will behave like async script, it will be loaded and executed immediately
	script.async = false; // it will behave like defer script, it will be loaded immediately, but executed after the document is parsed
	document.body.append(script);
}

loadScript('konspekt_eventsListeners.js');
loadScript('konspekt_dynamicType.js');
