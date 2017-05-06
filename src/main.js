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

var interactiveCroppieOptions = {
	showZoomer: true,
	enforceBoundary: true,
	mouseWheelZoom: true,
	enableZoom: true,
		viewport: {
		width: 180,
		height: 180,
		type: 'square'
	},
	boundary: {
		width: 270,
		height: 270
	}
};

croppieInteractive = $('#croppie-interactive').croppie(interactiveCroppieOptions);

croppieInteractive.croppie('bind', {
	url: 'images/nd-stadium.jpg'
});


// create the editor
var container = document.getElementById("jsoneditor");
var options = {
	onChange: handleJSONEditorChange
};
var editor = new JSONEditor(container, options);

function handleJSONEditorChange() {
	croppieInteractive.croppie('destroy');
	croppieInteractive = $('#croppie-interactive').croppie(editor.get());

	croppieInteractive.croppie('bind', {
	url: 'images/nd-stadium.jpg'
});
}

editor.set(interactiveCroppieOptions);