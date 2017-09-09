const boudingClientRect = {
  bottom: 34,
  height: 18,
  left: 39,
  right: 79.140625,
  top: 16,
  width: 40.140625
};
const selectionText = 'Hello World';
const getSelectionResult = {
  toString:function() {
    return selectionText;
  },
  getRangeAt:function() {
    return {
      getBoundingClientRect: function() {
        return boudingClientRect;
      }
    }
  }
};

let simulateSelectionChange = () => {
  let event = new Event('selectionchange');
  document.dispatchEvent(event);
};

let simulateSelectionStart = () => {
  let event = new Event('selectionstart');
  document.dispatchEvent(event);
};

let simulateMouseUp = (clientX = 50, pageY = 50) => {
  let event = new MouseEvent('mouseup', {
    clientX: clientX,
    pageY: pageY,
  });
  document.dispatchEvent(event);
};

// let simulateMouseUp = () => {
//   let event = new MouseEvent('mouseup');
//   document.dispatchEvent(event);
// };

let simulateMouseDown = () => {
  let event = new MouseEvent('mousedown');
  document.dispatchEvent(event);
};
