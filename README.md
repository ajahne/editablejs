# editablejs
Edit any HTML element

## Idea
Allow any HTML element to be editable.  Treat an HTML page like an editor.

## User Stories
- Sarah wants to edit the title of a page 
- Dom wants to change body text 
- Bobby wants to make the footer text bold 

## Requirements
- Allow any element to be editable
- Accepts HTML text
- should be able to make any preexisting element editable (e.g. should be able to add a class/id to an element and it just works, should not have to make heavy structural changes like changing <p> to <input>)
- VanillaJS (no frameworks, libraries)

## Flow
- Click on an element
- Element is now editable
- Modify text (e.g. add new text, edit text, add styles)
- Save text by moving cursor off the element (e.g. when element loses focus it should save current text)

## Questions
- What happens when someone clicks an element to edit it, then leaves it blank?  Should this remove the element from the DOM or revert back to the previous value?
- From a technical standpoint, is this going to be a class that we add to a DOM element?
