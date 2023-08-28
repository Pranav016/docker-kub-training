const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	const sampleJson = {
		message: 'Sample api for docker-kub training!',
	};
	res.json(sampleJson);
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
