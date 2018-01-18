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
- Popup provides (simple) rich text editing capability

## User Stories
- Sarah wants to edit the title of a page
- Dom wants to change body text
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

## Questions
- What happens when someone clicks an element to edit it, then leaves it blank?  Should this remove the element from the DOM or revert back to the previous value?
- From a technical standpoint, is this going to be a class that we add to a DOM element?
- How do we make this dynamic? Can rich text be added to any element or must a developer specify which elements can/cannot be edited?
