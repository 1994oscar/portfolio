# Frontend Mentor - Single-page developer portfolio solution

This is a solution to the [Single-page developer portfolio challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/singlepage-developer-portfolio-bBVj2ZPi-x). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- Receive an error message when the `form` is submitted if:
  - Any field is empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page


### Screenshot

![](/dist/screenshot-1.jpg)

### Links

- Solution URL: [Add solution URL here](https://github.com/1994oscar/portfolio/tree/master)
- Live Site URL: [Add live site URL here](https://portfolio-ntlbuzeud-1994oscars-projects.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS - Styled Components
- Flexbox
- [Vite.js](https://vitejs.dev/) Frontend Tooling
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

I learned the power of styled-components, which allowed me to write CSS for every component without any conflict with other styles. 
Pass props from JavaScript to CSS in an easy way is awesome. 

Button Component Styles example:

```css
const Button = styled.button`
    text-decoration: none;
    cursor: pointer;
    background-color: transparent;
    border: none;
    transition: all .2s ease-in;
    text-transform: uppercase;
    font-weight: 700;
    font-style: normal;
    line-height: 26px;
    letter-spacing: 2px;
    color: ${props => props?.$theme?.lightMode ? colors.black : colors.white || colors.white};
    padding-bottom: 1rem;

    border-bottom: solid ${colors.primary} 2px;
    `;
```

### Continued development

I would like to focus on styled components and the structures of the app, in large applications is so important to keep clean styles structures. 

### Useful resources

- [Styled Components](https://styled-components.com) - The basic styled components guide.

## Author

- Website - Oscar Zúñiga
- Frontend Mentor - [@1994oscar](https://www.frontendmentor.io/profile/1994oscar)

