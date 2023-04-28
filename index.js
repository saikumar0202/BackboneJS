// Create a new canvas object
var canvas = new fabric.Canvas("canvas", {
  width: 500,
});

// Add event listener for double-click on canvas
canvas.on("touch:tap", function (options) {
  addText(options);
});
canvas.on("mouse:dblclick", function (options) {
  // Create a new text box at the double-clicked position
  addText(options);
});
function addText(options) {
  console.log(options);
  var text = new fabric.IText("Enter text here", {
    left: options.pointer.x,
    top: options.pointer.y,
    fill: "black",
    // left: 100,
    // top: 100,
    fontFamily: "Arial",
    centerTransform: true,
    originX: "center",
    originY: "center",
    lockUniScaling: true,
    // lineHeight: "20px",
    fontSize: 40,
  });
  canvas.add(text);
  canvas.setActiveObject(text);
  text.enterEditing();
}
