let selectionBox = (() => {
  let x = 0;
  let y = 0;
  let width = 0;
  let height = 0;
  let selection;
  let range;
  let rangeBoundingClientRect;

  /*
   * What are we doing?
   * grab a selection and see what the properties are
   */
  let setPropertiesFromSelection = value => {
    setSelection(value);
    setRange(selection.getRangeAt(0));
    setBoundingRectProperties(range.getBoundingClientRect());
  };

  let setRange = value => {
    range = value;
    console.log(range.getBoundingClientRect());
  };

  let setSelection = value => {
    selection = value;
  };

  let getX = () => x;
  let getY = () => y;
  let getWidth = () => width;
  let getHeight = () => height;

  /**
  * Example
  *
  * bottom: 34
  * height: 18
  * left: 39
  * right: 79.140625
  * top: 16
  * width: 40.140625
  */
  let setBoundingRectProperties = rect => {
      x = rect.left;
      y = rect.top;
      width = rect.width;
      height = rect.height;
  }

  return {
    getX,
    getY,
    getWidth,
    getHeight,
    setPropertiesFromSelection
  };
})();
