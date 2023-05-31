# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

![](./images/Screenshot%20-FAQ-Accordion-Card.png)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow


### What I learned

I spent the most time on the javaScript logic for toggling the accordion the way I intended. I'm sure there might be easier ways of solving this, but I wanted to see what I can do myself

Eventually came up with this ```js if``` statements, see below:


```js
question.forEach(each => {
            let arrow = each.firstElementChild
            if (each.lastElementChild.classList.contains("display") && each !== item){
                //console.log("Not a match, is open, and should be closed")
                arrow.firstElementChild.classList.remove("rotate")
                each.lastElementChild.classList.remove("display")
                each.firstElementChild.classList.remove("bolden")
            } else if (each.lastElementChild.classList.contains("display") && each === item){
                //console.log("Its a match, is open and should be closed")
                selected.firstElementChild.classList.remove("rotate")
                item.lastElementChild.classList.remove("display")
                item.firstElementChild.classList.remove("bolden")
            } else if (!each.lastElementChild.classList.contains("display") && each === item){
                //console.log("Its a match, is close and should be opened")
                selected.firstElementChild.classList.add("rotate")
                item.lastElementChild.classList.add("display")
                item.firstElementChild.classList.add("bolden")
            }  
        })
```


### Continued development

I will continue learning how to manipulate SVG's and javaScript DOM manipulation techniques


### Useful resources

- [A complete guide to CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/#prop-grid-auto-flow) - This helped me with understanding CSS Grid. I really liked using grid. I find it intuitive and will use it going forward.


## Author

- Frontend Mentor - [@Victor-Durodola](https://www.frontendmentor.io/profile/Victor-Durodola)

