# React Folder Structure

This project is a React application designed to demonstrate a modular and scalable folder structure. It organizes components, assets, and helpers into logical directories to maintain code clarity and manageability.

## 📂 Folder Structure

The project's source code is organized within the `src` directory as follows:

- **`src/assets`**: Contains static assets including stylesheets (`css`) and images (`images`).
- **`src/common`**: Hosts shared configuration and constants used across the application, such as navigation items (`_nav.js`).
- **`src/component`**: Dedicated directory for reusable UI components.
- **`src/helper`**: Contains utility functions and helper components, such as icon definitions (`icon.js`).
- **`src/layout`**: Includes the main layout components of the application, such as `footer`, `main` content area, and `topbar`.
- **`src/pages`**: Contains the top-level page components (e.g., `Home.js`) that compose the application views.

## 🚀 Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

*   npm
    ```sh
    npm install npm@latest -g
    ```

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/your_username/repo_name.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```

## 📜 Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
