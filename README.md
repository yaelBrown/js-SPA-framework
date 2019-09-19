# Single Page Application website framework Made with Vanila Javascript. 

This is used to switch "pages", which I refer to as panes without changing the page. 

This basically is the boiler plate for building a site that has really fast load time. 

## How to use....

- Fork and copy files. 
- Div's with the id's link#, within those pages is where you would copy your current page. Remove the H1 and paste. Don't paste head informaton.
- In the javascript, copy the last event listener (and add necessary variables) if you want to make more pages. (Also create another div in the html and use the appropriate id's tags for it.)

"Why's there so many console logs?"

Verbose mode is on by default. It helps you follow what functions are running so you know whats going on in the application at all time. 

```javascript
let verbose = true;
```

Replace that line with, false. Or go in the console and change verbose to false to turn off the verbosage. (lol).

"What if I want to run a certain function while a page is active?"

The currently active page is defined in a variable called currentlyActivePane. Create a while loop, or if statement that runs what you want when this variable is switched. 

```javascript
// Currently active pane
let currentlyActivePane = "None";
const activePane = (pane) => currentlyActivePane = pane;
```

This is a very rough draft version of this framework. I will add more to it later, after I get more feedback. 