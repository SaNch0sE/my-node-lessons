const http = require('http');
http.get('http://localhost:8082/', (response) => {
	let rawData = '';
	response.on('data', (chunk) => { rawData += chunk; });
	response.on('end', () => console.log(rawData));
});