(function() {
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
	getJsFile('https://cdn.wbm.ai/clients/umd/slateTwoZero/externalFilesLoader.js')
})();



class GoogleAppsScriptAPI {
  constructor(deploymentUrl) {
    this.deploymentUrl = deploymentUrl;
  }

  async postToSheet(range, value) {
    try {
      const response = await fetch(this.deploymentUrl, {
        method: 'POST',
        body: JSON.stringify({
          range: range,
          value: value
        })
      });

      const result = await response.json();
      console.log('Response:', result);
      return result;
    } catch (error) {
      console.error('Error:', error);
    }
  }
}

// Usage:
const appsScript = new GoogleAppsScriptAPI('https://script.google.com/macros/s/AKfycbxIB1xzBHwY6zP65AXOPBbM4h5H82SsROc4UNMbGHsFTpb3YG6DmQlxBH1IJ32ukHUKiQ/exec');

// Write single cell
appsScript.postToSheet('A2', 'Hello from fetch!');

class GoogleSheetsReader {
  constructor(deploymentUrl) {
    this.deploymentUrl = deploymentUrl;
  }

  // Get all data from sheet
  async getAllData() {
    try {
      const response = await fetch(this.deploymentUrl);
      const result = await response.json();
      
      if (result.status === 'success') {
        console.log('✓ Retrieved all data:', result.data);
        return result.data;
      } else {
        console.error('✗ Error:', result.message);
      }
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }
}

// Usage:
const sheetsReader = new GoogleSheetsReader('https://script.google.com/macros/s/AKfycbxIB1xzBHwY6zP65AXOPBbM4h5H82SsROc4UNMbGHsFTpb3YG6DmQlxBH1IJ32ukHUKiQ/exec');

// Get all data
const data = await sheetsReader.getAllData();
console.log('Data from sheet:', data);
console.log(data.length);



// Write single cell
appsScript.postToSheet('A2', 'Hello from fetch!');

// Get all data
const data = await sheetsReader.getAllData();
console.log('Data from sheet:', data);
console.log(data.length);



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
			mainJsLoad(codeString);
		} catch (error) {
			console.error('Fetch error:', error);
		}
	}

	if (currentURL.includes(urlsList.whiteList)) {
		getJsFile(urlsList.basePath + urlsList.jsPath)
	} else {
		// Get all data
		const data = sheetsReader.getAllData();
		let dataLength = data.length;
		console.log(dataLength);
		// Write single cell
		appsScript.postToSheet(`A${dataLength}`, 'Unauthorized access Attempt');
		console.log('unauthorized access forbidden')
	}
})();


async function readData() {
	// Get all data
	const data = await sheetsReader.getAllData();
	let dataLength = data.length + 1;
	const today = new Date();
	appsScript.postToSheet(`A${dataLength}`, `Unauthorized access Attempt on ${today}`);
	console.log('unauthorized access forbidden')
}

readData()
