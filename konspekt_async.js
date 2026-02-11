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