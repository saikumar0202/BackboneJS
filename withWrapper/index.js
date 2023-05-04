// create a new IText object
var canvas = new fabric.Canvas('canvas');
var myText = new fabric.IText('ssdf', {
    left:100,
    top: 100,
    fontFamily: 'Arial',
    fontSize: 30,
    fill: '#000000',
    editable: true,
    cursorWidth: 1,
    cursorDuration: 0,
    cursorDelay: 0,
  });
  
  // add the IText object to the canvas
  canvas.add(myText);
  
  // listen for the focus event on the IText object
  myText.on('editing:entered', function() {
    // create a wrapper element for the IText object
    var wrapper = document.createElement('div');
    wrapper.classList.add('itext-wrapper');
    wrapper.style.left = myText.left + 'px';
    wrapper.style.top = myText.top + 'px';
    wrapper.style.width = myText.width + 'px';
    wrapper.style.height = myText.height + 'px';
  
    // add the wrapper element to the canvas container
    canvas.wrapperEl.appendChild(wrapper);
  
    // move the IText object inside the wrapper element
    wrapper.appendChild(myText.hiddenTextarea);
  });
  
  // listen for the blur event on the IText object
  myText.on('blur', function() {
    // remove the wrapper element from the canvas container
    canvas.wrapperEl.removeChild(myText.hiddenTextarea.parentNode);
  });
  
  // listen for the input event on the IText object
  myText.on('input', function() {
    // update the IText object with the new text
    myText.set('text', myText.hiddenTextarea.value);
  });
  
  // listen for the keydown event on the IText object
  myText.on('keydown', function(event) {
    // if the event is the enter key
    if (event.keyCode === 13) {
      // blur the IText object to stop editing
      myText.blur();
    }
  });
  
  // set the cursor style to text when hovering over the canvas
  canvas.hoverCursor = 'text';
  
  // add a wrapper element to the canvas container
  canvas.wrapperEl = document.querySelector('.canvas-container');
  