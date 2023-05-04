var isMobile = window.innerWidth < 500;
var isTablet = window.innerWidth > 500 && window.innerWidth < 1000;

var canvas = new fabric.Canvas("canvas", {
  width: isMobile ? 300 : isTablet ? 500 : 700,
  height: 300,
  allowTouchScrolling: true,
  selection: !isMobile,
  stopContextMenu: true,
});
canvas.on('touchstart', function(e) {
  var text = canvas.findTarget(e);
  if (text && text.type === 'i-text') {
    text.enterEditing();
    text.hiddenTextarea.style.fontSize = '20px';
    text.hiddenTextarea.style.height = '50px';
    text.hiddenTextarea.style.width = '100%';
    text.hiddenTextarea.style.top = '0';
    text.hiddenTextarea.style.left = '0';
  } else {
    canvas.discardActiveObject();
    canvas.renderAll();
  }
});
function addText() {
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
    padding: 5,
    borderColor: "black",
    
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

addText();
