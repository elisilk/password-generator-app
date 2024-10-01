# Frontend Mentor - Password generator app solution

This is a solution to the [Password generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/password-generator-app-Mr8CLycqjh). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Generate a password based on the selected inclusion options
- Copy the generated password to the computer's clipboard
- See a strength rating for their generated password
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

|        Mobile designed at 375px:         |               Desktop designed at 1440px:               |
| :--------------------------------------: | :-----------------------------------------------------: |
| ![](./screenshots/screenshot-mobile.png) |        ![](./screenshots/screenshot-desktop.png)        |
|        Tablet designed at 768px:         |                Desktop (active states):                 |
| ![](./screenshots/screenshot-tablet.png) | ![](./screenshots/screenshot-desktop-active-states.png) |

### Links

- Solution URL: [https://github.com/elisilk/password-generator-app](https://github.com/elisilk/password-generator-app)
- Live Site URL: [https://elisilk.github.io/password-generator-app/](https://elisilk.github.io/password-generator-app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Fluid typography and spacing

### What I learned

- [Detect the element with focus at any time](https://devtoolstips.org/tips/en/track-focused-element/) - A cool little trick in the Chrome DevTools to see whichever element has the current focus. I want to learn more about how to make good use of the DevTools. Wonder what else is out there?
- [SVG hover](https://css-tricks.com/change-color-of-svg-on-hover/) and the [different ways to use SVG in HTML markup](https://css-tricks.com/using-svg/)
  - When working with SVGs in HTML, [I also learned that to resize them properly](https://stackoverflow.com/questions/3120739/resizing-svg-in-html), it's best to set the [`viewbox`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox) attribute (and delete the actual heights and widths specified in the SVG). And maybe also in combination with the [`preserveAspectRatio`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/preserveAspectRatio) attribute, too?
  - [Coloring SVGs in CSS Background Images](https://codepen.io/noahblon/post/coloring-svgs-in-css-background-images) - And I learned a lot about using the [`mask`](https://developer.mozilla.org/en-US/docs/Web/CSS/mask) shorthand property as one method for incorporating SVGs into element backgrounds and having a lot of control over coloring and positioning. Super cool technique that I utilized for the check icon in the checkboxes for this design.
- I continue to learn a lot about working with arrays and objects. I am still learning about under what conditions to us [`find()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) vs. [`filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter). Or how to use other cool functions like [`reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) and [`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map). And then chaining them is even better, [like chaining `filter()` with `join()`](https://stackoverflow.com/questions/37486800/array-join-with-condition).
- I thought about creating my own way to evaluate the strength of a password, but ended up utilizing [`zxcvbn`](https://github.com/dropbox/zxcvbn) on off-the-shelf utility. A [great explanation of how it works](https://dropbox.tech/security/zxcvbn-realistic-password-strength-estimation) is available too.
- A lot of time was spent figuring out how to style the form elements, especially the [so-called "ugly" elements, like a range](https://developer.mozilla.org/en-US/docs/Learn/Forms/Advanced_form_styling#what_can_be_done_about_the_ugly_elements). Ugh. That is way harder than it should be. So many "non-standard" elements involved (e.g., [`::-moz-range-progress`](https://developer.mozilla.org/en-US/docs/Web/CSS/::-moz-range-progress)), which doesn't give me a lot of faith that most users will see the same thing.
  - [`<input type="button">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/button)
  - [`<input type="range">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range)
    - [Styling Cross-Browser Compatible Range Inputs with CSS by Daniel Stern](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/)
    - [A decent CSS generator by Daniel Stern](https://danielstern.ca/range.css/#/)
    - [A Sliding Nightmare: Understanding the Range Input](https://css-tricks.com/sliding-nightmare-understanding-range-input/)
    - [CodePen collection of by Ana Tudor](https://codepen.io/collection/DgYaMj/)
    - [Styling and scripting sliders by Peter-Paul Koch](https://www.quirksmode.org/blog/archives/2015/11/styling_and_scr.html)
  - [`<input type="checkbox">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox)
    - [How to style a checkbox using CSS](https://stackoverflow.com/questions/4148499/how-to-style-a-checkbox-using-css) - Lots of links listed in the top answer to this post.
    - [The “Checkbox Hack” (and things you can do with it)](https://css-tricks.com/the-checkbox-hack/)
- [Generate random string/characters in JavaScript](https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript)
- [What are the best rules to follow for what characters to allow in a password?](https://stackoverflow.com/questions/384489/what-are-the-best-rules-to-follow-for-what-characters-to-allow-in-a-password) - I could not find a clear answer on what special characters to allow in a password. Still interested in this.
- [The Shapes of CSS](https://css-tricks.com/the-shapes-of-css/) - So how to make those strength level boxes? I felt like a CSS-only shapes approach would be cool, even though they are just rectangles.
- [Interact with the clipboard](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard) - Allow the functionality to copy the generated password to the clipboard. Some additional help from [this freeCodeCamp post](https://www.freecodecamp.org/news/copy-text-to-clipboard-javascript/).
- [`blur()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/blur) - Thinking some about how to monitor and control which elements are in [`focus()`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus) at what time, and potentially remove the focus after a certain amount of time.
  - [How to remove focus from submit button](https://stackoverflow.com/questions/2439565/how-to-remove-focus-from-submit-button)
  - [In javascript, how to eliminate any focus in the document?](https://stackoverflow.com/questions/58307924/in-javascript-how-to-eliminate-any-focus-in-the-document)

### Continued development

Specific areas that the solution should be improved:

- Decide what special characters are allowed
- In defiance of the design's "Empty" state, choose to set up initial state (in HTML and in JS) with some amount of checkboxes checked and the slider at some reasonable start value (e.g., 12)
- Decide on best behavior for the password input field when clicked on it. Should it prevent the default behavior and just copy the password to the clipboard? Or should it select the entire password (and also copy to the clipboard)? Or should it even allow users to edit the password (and then copy it)? Or what?
  - [`select()` method](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select)
- Error checking
  - character length slider value > 0
  - at least one of the checkboxes checked
  - (make the error states show up somewhere?)
- Check over spacing and font sizes
- Why does the generate button stay active/focused after a click? What should happen?
- Use lambdatest to test on different browsers. Or potentially some other better solution?
- As a first step, try the solution Firefox, Safari, Tor, etc., on my local machine and see if issues come up there (and on my iPhone). For example, the input range slider had a thick white border in Firefox, so I was able to fix that issue.
- Color the side areas that show up (in white?) when you turn your iPhone to landscape mode - what are those called? The "notch"? Two resources to consider are [“The Notch” and CSS](https://css-tricks.com/the-notch-and-css/) and [Safari theme color and notch support](https://blog.thomasdurand.fr/story/2021-06-27-theme-color-safe-area-safari-15/).
- And why are there rounded corners on the checkboxes on the iPhone (checked on Safari, Chrome, and Firefox)?

More general ideas I want to consider:

Hmm 🤔 ...

- What are the bigger differences between `:active`, `:focus`, and `:hover`, and how should I be utilizing them each appropriately for accessibility and general design?
  - [Differences Between CSS :hover and :focus](https://medium.com/@Musakusbey/css-hover-focus-farklar%C4%B1-nedir-e0024fad7cf4)
- Are double form submissions a problem? Should there be some clearer feedbback that a user has initiated a form submission and they should wait a momement?
  - [HTML Forms: How (and Why) to Prevent Double Form Submissions](https://www.bram.us/2020/11/04/preventing-double-form-submissions/)

### Useful resources

- [MDN Web Docs for CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - Went here a lot to reference the different CSS properties and the shorthands, and all the great explanations about best practices.
- [MDN Guides](https://developer.mozilla.org/en-US/docs/Learn) - So many resources and nice explanations, including stuff [tutorials specific to Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide).
- [Every Layout](https://every-layout.dev/) - My go to source for thinking about layouts now.
- [The Clamp Calculator](https://royalfig.github.io/fluid-typography-calculator/) - Used for all of fluid typography and fluid spacing calculations.

## Author

- Website - [Eli Silk](https://github.com/elisilk)
- Frontend Mentor - [@elisilk](https://www.frontendmentor.io/profile/elisilk)
