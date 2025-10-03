# Printify (UPrinting Inspired)

This is a front-end web application that replicates the core features of a print-on-demand platform like UPrinting. This project was built to demonstrate a complete, interactive user flow—from browsing products to a simulated login and account management—all using React.



## ✨ Features

* **Dynamic Homepage:** Features a hero section with a functional product search.
* **Product Catalog:** Displays a grid of available products fetched from a mock data source.
* **Dynamic Product Pages:** Product details, options, and pricing load dynamically based on the URL.
* **Interactive Price Calculator:** The total price updates in real-time as the user selects different product options (size, material, quantity).
* **Simulated User Authentication:** A complete, frontend-only user flow:
    * User sign-up that "saves" new users to `localStorage`.
    * User login that checks credentials against the list of saved users.
    * Dynamic header that shows "Login" or "My Account / Logout" based on auth state.
* **Global State Management:** Uses React's Context API to manage:
    * The shopping cart across all components.
    * The current user's session.
* **Functional Shopping Cart:**
    * View all items added to the cart.
    * Remove items from the cart.
    * See a complete order summary with a calculated total.
* **Functional "My Account" Page:** A complete, tabbed dashboard for logged-in users, including:
    * **Order History:** Displays a mock list of past orders.
    * **Profile & Settings:** A form to edit user details.
    * **Addresses & Payments:** View, add, and save new addresses and payment methods, all persisted in `localStorage`.

## 💻 Technologies Used

* **React.js:** For building the user interface.
* **React Router:** For client-side routing and navigation.
* **React Context API:** For global state management (authentication and shopping cart).
* **React Icons:** For UI icons.
* **CSS:** For custom styling, layout, and animations.
* **JavaScript (ES6+):** For application logic.

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

1.  **Clone the repository**
    ```sh
    git clone [https://github.com/kammari-ashritha/printify.git](https://github.com/kammari-ashritha/printify.git)
    ```
2.  **Navigate to the project directory**
    ```sh
    cd printify-clone
    ```
3.  **Install NPM packages**
    ```sh
    npm install
    ```
4.  **Run the development server**
    ```sh
    npm start
    ```
5.  Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
