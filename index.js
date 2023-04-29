var isMobile = window.innerWidth < 500;
var canvas = new fabric.Canvas("canvas", {
  width: isMobile ? 300 : 500,
  height: 500,
  allowTouchScrolling: true,
  selection: !isMobile,
});
function addText() {
  console.log(canvas);
  var text = new fabric.IText("Enter text here", {
    left: canvas.width / 2,
    top: canvas.height / 2 - 20,
    fill: "black",
    fontFamily: "Arial",
    centerTransform: true,
    originX: "center",
    originY: "center",
    lockUniScaling: true,
    fontSize: 20,
    lineHeight: 1,
    allowTouchScrolling: true,
  });
  text.setControlsVisibility({
    mb: false,
    ml: false,
    mr: false,
    mt: false,
  });
  canvas.add(text);
  canvas.setActiveObject(text);
  text.selectAll();
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
