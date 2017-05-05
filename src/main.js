croppieDemo = $('#croppie-demo').croppie({
	viewport: {
		width: 180,
		height: 180,
		type: 'square'
	},
	boundary: {
		width: 270,
		height: 270
	},
	showZoomer: true
});

croppieDemo.croppie('bind', {
	url: 'images/nd-image.jpeg'
});