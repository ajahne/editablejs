# editablejs
Edit any HTML element

## Idea
- Allow any HTML element to be editable.  Treat an HTML page like an editor.
- any text is directly editable, text can be styled via a style popup (similar to Slack/iOS)

## User Stories
- Sarah wants to edit the title of a page
- Dom wants to change body text
- Bobby wants to make the footer text bold

## Requirements
- Allow any element to be editable
- Changing of text style is done through the popup
- VanillaJS (no frameworks, libraries)

## Flow
- Highlight text (e.g. a word or phrase)
- Text style popup appears
- User clicks a text style
- Text style is changed

## Questions
- What happens when someone clicks an element to edit it, then leaves it blank?  Should this remove the element from the DOM or revert back to the previous value?
- From a technical standpoint, is this going to be a class that we add to a DOM element?
