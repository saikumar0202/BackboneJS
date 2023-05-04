var isMobile = window.innerWidth < 500;
var isTablet = window.innerWidth > 500 && window.innerWidth < 1000;

var canvas1 = new fabric.Canvas('canvas1', {
  width: isMobile ? 300 : isTablet ? 500 : 700,
});
var textarea = document.getElementById('textarea')
// create a Fabric.js textbox and add it to the canvas
var ITextbox = new fabric.IText('Type something here', {
  left: 50,
  top: 50,
  width: 200,
  fontSize: 20,
  lockRotation: true,
  hiddenTextarea: textarea,
  fontFamily: 'system-ui',
  // padding: 3
});
ITextbox.selectionStart
ITextbox.setControlsVisibility({
  mb: false,
  ml: false,
  mr: false,
  mt: false,
});
canvas1.add(ITextbox);
ITextbox.on('editing:entered', function () {
  console.log(ITextbox)
  ITextbox.exitEditing();
  handleTextEditing(ITextbox)
})

function handleTextEditing(IText) {
  IText.visible = false;
  canvas1.renderAll();
  var input = document.createElement('input');
  input.classList.add('form-control');
  input.classList.add('p-0');
  document.body.appendChild(input);

  addInput(input, IText);
  input.addEventListener('blur', function () {
    IText.text = input.value;
    IText.visible = true;
    canvas1.renderAll();
    input.style.display = 'none';
    document.body.removeChild(input);
  });

  input.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
      input.blur();
    }
  });
}

function addInput(input, textbox) {
  var boundingRect = canvas1.getElement().getBoundingClientRect();
  input.style.position = 'absolute';
  input.style.left = (boundingRect.left + textbox.left) + 'px';
  input.style.top = (boundingRect.top + textbox.top) + 'px';
  // input.style.width = textbox.cacheWidth + 'px';
  // input.style.height = textbox.cacheHeight + 'px';
  input.style.width = (textbox.width * textbox.scaleX) + 'px';
  input.style.height = (textbox.height * textbox.scaleY) + 'px';
  input.style.fontSize = (textbox.fontSize * textbox.scaleX) + 'px';
  input.value = textbox.text;
  input.setSelectionRange(textbox.selectionStart, textbox.selectionEnd);
  input.focus()
}
