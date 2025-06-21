# Frontend Mentor - Audiophile e-commerce website solution

This is a solution to the [Audiophile e-commerce website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

* [Overview](#overview)

  * [The challenge](#the-challenge)
  * [Links](#links)
* [My process](#my-process)

  * [Built with](#built-with)
  * [What I learned](#what-i-learned)
  * [Continued development](#continued-development)
  * [Useful resources](#useful-resources)
* [Author](#author)
* [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

* View the optimal layout for the app depending on their device's screen size
* See hover states for all interactive elements on the page
* Add/Remove products from the cart
* Edit product quantities in the cart
* Fill in all fields in the checkout
* Receive form validations if fields are missed or incorrect during checkout
* See correct checkout totals depending on the products in the cart

  * Shipping always adds \$50 to the order
  * VAT is calculated as 20% of the product total, excluding shipping
* See an order confirmation modal after checking out with an order summary

### Links

* **Solution URL**: [https://github.com/thapa14/audiophile-ecommerce](https://github.com/thapa14/audiophile-ecommerce)
* **Live Site URL**: [https://thapa-ecommerce.netlify.app](https://thapa-ecommerce.netlify.app)

## My process

### Built with

* **React** & **Vite**
* **Tailwind CSS** – utility-first styling
* **Feature-Sliced Design (FSD) architecture** with `steiger`
* **Context API** – for managing cart and product data
* **TypeScript** – for strong typing and scalability
* **ESLint & Prettier** – for code quality and consistency

### What I learned

This was my first project built with **FSD**, and it transformed the way I think about front-end architecture. I have also used **TypeScript** – it was quite a fun and eye-opening challenge for me.

* **Separation of concerns** – clear boundaries between `entities`, `features`, `widgets`, `pages`, and `app` layers dramatically improved code readability.
* **Code reusability** – grouping logic, UI, and styles by feature rather than by technology made it trivial to reuse components across the app.
* **Avoiding circular dependencies** – using FSD guidelines (only import “down” the hierarchy) eliminated hidden coupling issues.
* **Responsive design** – Tailwind’s mobile-first utilities let me ship fully responsive layouts with minimal custom CSS.
* **Context API with TypeScript** – Handling shared state across components using Context API was a challenging but rewarding experience, especially in defining and enforcing strict types.

### Continued development

* **Write test cases** using Vitest and Cypress to ensure application stability.
* **Make cart persistence more robust** with custom hooks and fallback checks.
* **Add support for multiple currencies and languages** to enhance international user experience.

### Useful resources

* **Feature-Sliced Design** – [https://feature-sliced.github.io/documentation/](https://feature-sliced.github.io/documentation/) (official docs)
* **Tailwind CSS docs** – [https://tailwindcss.com/docs](https://tailwindcss.com/docs)

## Author

* **Name** – Pankaj Thapa
* **Frontend Mentor** – [@thapa14](https://www.frontendmentor.io/profile/thapa14)
* **LinkedIn** – [https://www.linkedin.com/in/pankaj-thapa-a06543207](https://www.linkedin.com/in/pankaj-thapa-a06543207)

## Acknowledgments

Big thanks to the Frontend Mentor community for feedback and guidance, and to the creators of FSD for their excellent documentation. Also, a special thanks to the FSD community for their support and guidance throughout the process.
