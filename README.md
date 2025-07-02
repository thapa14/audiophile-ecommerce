# Frontend Mentor - Audiophile e-commerce website

[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

A modern e-commerce website for Audiophile, built with React, TypeScript, and Tailwind CSS, following Feature-Sliced Design architecture.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development](#development)
- [Built With](#built-with)
- [Dependencies](#dependencies)
- [What I Learned](#what-i-learned)
- [Continued Development](#continued-development)
- [Useful Resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)
- [License](#license)

## Features

- 🛒 **Shopping Cart**
  - Add/remove products
  - Adjust quantities
  - Persistent cart state
  - Real-time total calculation

- 📱 **Responsive Design**
  - Mobile-first approach
  - Fully responsive layouts
  - Optimized for all device sizes

- 🎨 **Interactive UI**
  - Smooth animations
  - Hover states
  - Form validations
  - Toast notifications

- 💳 **Checkout Process**
  - Multi-step form
  - Form validation
  - Order summary
  - Confirmation modal

- 🚀 **Performance**
  - Code splitting
  - Lazy loading
  - Optimized assets

### Links

- **Solution URL**: [GitHub Repository](https://github.com/thapa14/audiophile-ecommerce)
- **Live Demo**: [Netlify Deployment](https://thapa-ecommerce.netlify.app)

## Project Structure

The project follows **Feature-Sliced Design (FSD)** architecture:

```
src/
├── app/                 # Application initialization, routing, and providers
├── entities/            # Business entities (cart, product, etc.)
│   ├── cart/           # Cart functionality
│   └── product/        # Product data and logic
├── features/           # Feature modules
│   ├── add-to-cart/    # Add to cart functionality
│   ├── checkout/       # Checkout process
│   ├── product-category-list/ # Category listing
│   └── view-product/   # Product details view
├── pages/              # Page components
│   ├── checkout/       # Checkout page
│   ├── home/           # Home page
│   ├── product-category/ # Category page
│   └── product-details/ # Product details page
├── shared/             # Shared resources
│   ├── config/         # App configuration
│   ├── lib/            # Utility functions and hooks
│   └── ui/             # UI components
└── widgets/            # Independent UI components
    └── cart/           # Cart widget
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/thapa14/audiophile-ecommerce.git
   cd audiophile-ecommerce
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

### Development

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Build the application for production:

```bash
npm run build
# or
yarn build
```

Lint the code:

```bash
npm run lint
# or
yarn lint
```

## Dependencies

### Core Dependencies

- **React** (^19.1.0) - UI library
- **TypeScript** (~5.8.3) - Type checking
- **Vite** (^6.3.5) - Build tool
- **React Router** (^7.6.1) - Client-side routing
- **Tailwind CSS** (^4.1.8) - Utility-first CSS framework
- **Feature-Sliced Design** - Project architecture

### Key Libraries

- **React Hook Form** (^7.57.0) - Form handling
- **Yup** (^1.6.1) - Form validation
- **React Toastify** (^11.0.5) - Notifications
- **clsx** (^2.1.1) - Conditional class names

### Development Dependencies

- **ESLint** (^9.25.0) - Code linting
- **Prettier** (3.5.3) - Code formatting
- **Vitest** (^3.2.4) - Testing framework
- **@types/** - TypeScript type definitions

For a complete list of dependencies, check the `package.json` file.

## Built With

- **React** & **Vite** - Modern frontend tooling
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Feature-Sliced Design** - Scalable architecture
- **Context API** - State management
- **React Hook Form** - Form handling
- **React Router** - Client-side routing
- **ESLint & Prettier** - Code quality

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

👤 **Pankaj Thapa**

- GitHub: [@thapa14](https://github.com/thapa14)
- Frontend Mentor: [@thapa14](https://www.frontendmentor.io/profile/thapa14)
- LinkedIn: [Pankaj Thapa](https://www.linkedin.com/in/pankaj-thapa-a06543207)

## Acknowledgments

- [Frontend Mentor](https://www.frontendmentor.io/) for the design challenge
- [Feature-Sliced Design](https://feature-sliced.design/) community
- [Tailwind CSS](https://tailwindcss.com/) team
- All open-source contributors of the libraries used in this project

