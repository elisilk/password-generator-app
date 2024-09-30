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

|               Mobile designed at 375px:                |               Desktop designed at 1440px:               |
| :----------------------------------------------------: | :-----------------------------------------------------: |
|   ![](./screenshots/screenshot-mobile-completed.png)   |   ![](./screenshots/screenshot-desktop-completed.png)   |
|                Mobile (active states):                 |                Desktop (active states):                 |
| ![](./screenshots/screenshot-mobile-active-states.png) | ![](./screenshots/screenshot-desktop-active-states.png) |

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

- working with SVGs
- styling checkboxes
- styling ranges/sliders

- [SVG hover](https://css-tricks.com/change-color-of-svg-on-hover/) and the [different ways to use SVG in HTML markup](https://css-tricks.com/using-svg/)
- When working with SVGs in HTML, [I also learned that to resize them properly](https://stackoverflow.com/questions/3120739/resizing-svg-in-html), it's best to set the [`viewbox`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox) attribute (and delete the actual heights and widths specified in the SVG). And maybe also in combination with the [`preserveAspectRatio`](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/preserveAspectRatio) attribute, too?
- I continue to learn a lot about working with arrays and objects. I am still learning about under what conditions to us [`find()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) vs. [`filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter). Or how to use other cool functions like [`reduce()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) and [`map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map). And then chaining them is even better, [like chaining `filter()` with `join()`](https://stackoverflow.com/questions/37486800/array-join-with-condition).
- I thought about creating my own way to evaluate the strength of a password, but ended up utilizing [`zxcvbn`](https://github.com/dropbox/zxcvbn) on off-the-shelf utility. A [great explanation of how it works](https://dropbox.tech/security/zxcvbn-realistic-password-strength-estimation) is available too.
- A lot of time was spent figuring out how to style the form elements. Ugh. That is way harder than it should be. So many "non-standard" elements involved (e.g., [`::-moz-range-progress`](https://developer.mozilla.org/en-US/docs/Web/CSS/::-moz-range-progress)), which doesn't give me a lot of faith that most users will see the same thing.
  - [`<input type="range">`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range)
    - [A decent CSS generator](https://danielstern.ca/range.css/#/)
  - []()

### Continued development

Hmm 🤔 ...

Specific areas that the solution should be improved:

- Implement password strength algorithm
- Get checkbox list functional
- Decide what special characters are allowed
- In defiance of the design's "Empty" state, choose to set up initial state (in HTML and in JS) with some amount of checkboxes checked and the slider at some reasonable start value (e.g., 12)
- Make a JS function that initializes the form based on the current values (e.g., sets the character length output to be the current value of the slider, rather than being set in the HTML; and does the same for the checkboxes and ???)
- Make sure "Copied" + icon are on top of the password and their backgrounds are not transparent, so it's easier to see them when the password length is long
- Decide on best behavior for the password input field when clicked on it. Should it prevent the default behavior and just copy the password to the clipboard? Or should it select the entire password (and also copy to the clipboard)? Or should it even allow users to edit the password (and then copy it)? Or what?
- Error checking
  - character length slider value > 0
  - at least one of the checkboxes checked
  - (make the error states show up somewhere?)
- Check over spacing and font sizes
- Why does the generate button stay active/focused after a click? What should happen?
- Use lambdatest to test on different browsers
- Or better yet, start with Firefox, Safari, Tor, etc., on my local machine first and see if issues come up. For example, looks like the input range slider has a thick white border in Firefox.

More general ideas I want to consider:

### Useful resources

- [MDN Web Docs for CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) - Went here a lot to reference the different CSS properties and the shorthands, and all the great explanations about best practices.
- [MDN Guides](https://developer.mozilla.org/en-US/docs/Learn) - So many resources and nice explanations, including stuff [tutorials specific to Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide).
- [Every Layout](https://every-layout.dev/) - My go to source for thinking about layouts now.
- [The Clamp Calculator](https://royalfig.github.io/fluid-typography-calculator/) - Used for all of fluid typography and fluid spacing calculations.

## Author

- Website - [Eli Silk](https://github.com/elisilk)
- Frontend Mentor - [@elisilk](https://www.frontendmentor.io/profile/elisilk)
