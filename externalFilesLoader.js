(function() {
	let urlsList = {
		whiteList: [
			"https://go.waybetter.ai/portal/umd_app"
		],
		basePath: "https://cdn.wbm.ai/clients/umd/",
		cssPath: "shared/base.css",
		jsPath: "slateTwoZero/scriptTwoZero.js",
	}
	const currentURL = window.location.href;

	async function getJsFile(filesPath) {
		try {
			const response = await fetch(filesPath);
			if (!response.ok) throw new Error('File not found');
			
			const codeString = await response.text(); // Get content as a string
			const script = document.createElement('script');
			script.textContent = codeString;
			document.body.appendChild(script);
		} catch (error) {
			console.error('Fetch error:', error);
		}
	}

	if (currentURL.includes(urlsList.whiteList)) {
		getJsFile(urlsList.basePath + urlsList.jsPath)
	}
})();
