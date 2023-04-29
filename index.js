var canvas = new fabric.Canvas("canvas", {
  width: document.getElementById("canvas-wrapper").offsetWidth - 20,
  allowTouchScrolling: true,
});
function addText() {
  console.log(canvas);
  var text = new fabric.IText("Enter text here", {
    left: canvas.width / 3,
    top: canvas.height / 3,
    fill: "black",
    fontFamily: "Arial",
    centerTransform: true,
    originX: "center",
    originY: "center",
    lockUniScaling: true,
    fontSize: 40,
    lineHeight: 1,
  });
  text.setControlsVisibility({
    mb: false,
    ml: false,
    mr: false,
    mt: false,
  });
  canvas.add(text);
  canvas.setActiveObject(text);
  text.enterEditing();
}
// canvas.on("object:scaling", function (obj) {
//   console.log(obj);
//   if (obj.target && obj.target.height && obj.target.scaleY) {
//     let lastHeight;

//     const updateTextSize = () => {
//       if (obj.target) {
//         if (obj.target.height && obj.target.scaleY) {
//           lastHeight = obj.target.height * obj.target.scaleY;
//         }

//         obj.target.set({
//           height: lastHeight || obj.target.height,
//           scaleY: 1,
//           scaleX: 1,
//         });

//         canvas.renderAll();
//       }
//     };

//     updateTextSize();
//   }
// });
