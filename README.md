# Qurba E-commerce Task

## Table of content

- [Description](#project-description)
- [Usage](#usage)
- [Directory](#directory-structure)
- [Technologies](#technologies-i-used)
- [Installation](#installation)

## Project Description

This is an E-commerce demo Application for displaying products, filter, search and auth functionality.

## Usage

The Website consists of few sections, the first one is the Auth page which includes the login in with validation for forms and alert for successful and unsuccessful ones.

At the navbar if you're not authenticated you would get login button if you're authenticated you would get instead the search input and the cart icon plus account displayed.

As mentioned the main functionality for the login page is for the user to log in. Because the provided API doesn't include full authentication experience.

> Note: Only defined user can log in.

- username: 'kminchelle'
- password: '0lelplR'

I've added the alert component so the user would get an instant feedback about what happening with the request and there are 3 status for the alert

- If user logged in successfully he would get a green message saying **"You are logged in successfully"**
- While the request being sent **"please wait we are logging you in"** with blue background
- If user logged in with invalid credentials you get **"Invalid credentials"** with red background.

I used the token that returns from the API and saved it into **session storage** to keep the user and his/her authenticated and being able to access the content even when the page is refreshes.

I also set a **guard** for not entering the products list without **signing in**, as requested.

After that the user going to be rerouted to the home. Which contains nav-bar, footer, the filtering section with categories, pagination, and the list of products.

## Directory Structure

### The application contains the following directories:

- Auth module: for authenticating the user.
- Shared module: for the reusable components, guards,services and models.
- Pagination module: for the custom pagination that I've created.
- products: for the product, products-list and home components which is the parent for both components and finally the routing for the product routing module.
- App-routing : for the main routing configurations.
- styles.scss: for the main styling and the resting the border.

## Technologies used

- **Angular** for creating a SPA.
- **Angular CLI** for scaffolding the project.
- **SCSS** for styling and creating the logo, custom styling.
- **font-awosme** for icons.

## Installation

Simply type in Terminal **_npm install_** and then **_ng serve_** for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
