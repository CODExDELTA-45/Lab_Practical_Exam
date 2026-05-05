const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, 'src', 'input.txt');
const outputFile = path.join(__dirname, 'src', 'output.txt');

fs.readFile(inputFile, 'utf8', (readError, data) => {
	if (readError) {
		if (readError.code === 'ENOENT') {
			console.error(`File not found: ${inputFile}`);
		} else {
			console.error(`Error reading ${inputFile}:`, readError.message);
		}
		return;
	}

	const trimmed = data.trim();
	const lines = trimmed === '' ? [] : trimmed.split(/\r?\n/);
	const words = trimmed === '' ? [] : trimmed.split(/\s+/);

	const result = `Total Lines: ${lines.length}\nTotal Words: ${words.length}\n`;

	fs.writeFile(outputFile, result, 'utf8', (writeError) => {
		if (writeError) {
			console.error(`Error writing ${outputFile}:`, writeError.message);
			return;
		}

		console.log(`Counts written to ${outputFile}`);
	});
});
