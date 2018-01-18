# editablejs
Edit any HTML element and allow for rich text formatting

## how to build
### Building src
build the src
```
npm run build
```
open ```src/index.html``` in your browser
### Running tests
open ```test/index.html``` in your browser

## Idea
- Allow any HTML element to be editable.  
- Any text is directly editable, text can be styled via a style popup (similar to Slack/iOS)
- Popup provides (simple) rich text editing capability (bold, italics, underline)

## User Stories
- Sarah wants to edit the title of a page
- Dom wants to underline a sentence within the body text
- Bobby wants to make the footer text bold

## Requirements
- Allow any element to be editable
- Changing of text style is done through the popup
- VanillaJS (no frameworks, libraries)
- Support Rich Text (bold, italic, and underline) and Editing (cut, copy, and paste).

## Flow
- Highlight text (e.g. a word or phrase)
- Rich text style popup appears
- User clicks a rich text style
- Text style is changed

## How to use
- save scripts from [lib](https://github.com/ajahne/editablejs/tree/master/lib)
- create an HTML file as detailed below
```
<!DOCTYPE html>
<html>
  <head>
    <title>Editable</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
  </head>
  <body>
    <p id="hello-world" contenteditable="true">Test</p>
    <div id="controls">
      <button class="controls-button controls-button-bold">B</button>
      <button class="controls-button controls-button-italic">I</button>
      <button class="controls-button controls-button-underline">U</button>
    </div>
  <script src="controls.js"></script>
  <script src="selection-box.js"></script>
  <script src="selection.js"></script>
</body>
</html>
```

## Questions
- What happens when someone clicks an element to edit it, then leaves it blank?  Should this remove the element from the DOM or revert back to the previous value? - outside the scope of this component
- From a technical standpoint, is this going to be a class that we add to a DOM element?
- How do we make this dynamic? Can rich text be added to any element or must a developer specify which elements can/cannot be edited?
