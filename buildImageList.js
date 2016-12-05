'use strict'; //eslint-disable-line

const fs = require('fs');

// Read src directory for list of logo names
const brandNames = fs.readdirSync('src').filter((file) => {

	// File is an SVG
	return file.endsWith(".svg");

}).map((file) => {
	// Removes .svg extension
	return file.slice(0, -4);
});

function listImages() {
	const brands = brandNames.map((file) => {
		return { name: file };
	});

	// Write the list of logos found in /svg to the data.json file.
	fs.writeFileSync('imageList.json', JSON.stringify({ images: brands }, null, '\t'), { encoding: 'utf-8' });
}

listImages();
