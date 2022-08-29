# FAQ-Collapse

This is apart of the 50 projects in 50 days challenge and is the twelfth project.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

- To create a FAQ that opens and closes when the icon is clicked. The challenge involves HTML, CSS and Javascript.

### Screenshot

# Mobile Preview 

![screenshot](https://github.com/romila2003/FAQ-Collapse/blob/main/Mobile%20preview.PNG)

# Desktop Preview 

![screenshot](https://github.com/romila2003/FAQ-Collapse/blob/main/Desktop%20preview.PNG)


### Links

 - Source code: [https://github.com/romila2003/FAQ-Collapse](https://github.com/romila2003/FAQ-Collapse)
 - Live website: [https://faq-collase.netlify.app/](https://faq-collase.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- Plain CSS
- Vanilla Javascript
- Flexbox

### What I learned

This project was fun and simple and heavily relied on CSS rather than JS since there was only a `toggle` feature. I enjoyed the design process and will use this concept in future projects such as the frontendmentor FAQ challenge.

Javascript - `toggle`:

```javascript

const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach(toggle => {
    toggle.addEventListener("click", () => {
        toggle.parentNode.classList.toggle("active");
    })
})

```

### Continued development

For future developments, I should implement the features/concepts learned over the last few projects and future projects, into practical projects/challenges such as the frontendmentor.io projects.


## Author

- Twitter - [@romila003](https://www.twitter.com/romila003)
- Frontend Mentor - [@romila2003](https://www.frontendmentor.io/profile/romila2003)
