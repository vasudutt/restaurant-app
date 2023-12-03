# Getting Started

## Prerequisites

Make sure you have Node.js installed on your machine.

## Installation

1. Clone this repository:

    ```
    	git clone git@github.com:vasudutt/restaurant-app.git
    ```

2. Navigate to the project directory:

    ```
    	cd restaurant-app
    ```

3. Install dependencies:

    ```
    	npm install
    ```

# Usage

Using Babel (Fast Refresh with @vitejs/plugin-react)

To run the app using Babel for Fast Refresh, use the following command:

    ```
    	npm run dev
    ```

This will start the development server, and you can view the app at http://localhost:5173. The page will automatically reload if you make edits.

## Using SWC (Fast Refresh with @vitejs/plugin-react-swc)

To run the app using SWC for Fast Refresh, use the following command:

    ```
    	npm run dev:swc
    ```

This will start the development server with SWC, and you can view the app at http://localhost:5173. The page will automatically reload if you make edits.

## Build

To build the app for production, use the following command:

    ```
    	npm run build
    ```

This will generate an optimized build in the dist directory.

## Linting

To lint the code using ESLint, use the following command:

    ```
    	npm run lint
    ```

This will check for and fix linting issues based on the ESLint rules specified in the project.

## Customize

Feel free to customize the configuration files (vite.config.js, .eslintrc.js) according to your preferences and project requirements.

## License

This project is licensed under the MIT License
