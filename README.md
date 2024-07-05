# CGIFS Portfolio Management System - Frontend

This is the frontend of the CGIFS Portfolio Management System, built with React, Material-UI, and TanStack React Query.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Material-UI**: A popular React UI framework.
- **TanStack React Query**: A library for fetching, caching, and updating data in React applications.
- **React Router**: A collection of navigational components that compose declaratively with your application.
- **Styled-components**: A library for styling React components.
- **React Toastify**: A library to provide beautiful notifications.

## Installation

1. **Clone the repository**

    ```sh
    git clone <repository-url>
    cd cgifs-pm-frontend
    ```

2. **Install dependencies**

    ```sh
    npm install
    ```

3. **Set up environment variables**

    Create a `.env` file in the root directory with the following variables:

    ```plaintext
    REACT_APP_BACKEND_URL=<backend_api_url>
    ```

    ```plaintext
    REACT_APP_MAP_BOX_KEY=<mapbox_api_url>
    ```

4. **Run the application**

    ```sh
    npm start
    ```

## Usage

1. **Navigate to the application**

    Open your browser and go to `http://localhost:3000`.

2. **Log in**

    Use your credentials to log in and start managing the portfolio.

## Features

- **Responsive Design**: The application is designed to work on various devices.
- **Search and Filter**: Debounced search and filter functionality for efficient data retrieval.
- **Data Visualization**: Interactive map for displaying customer locations.
- **Notifications**: Real-time notifications for user actions.

## Project Structure

```plaintext
cgifs-pm-frontend/
├── public/
├── src/
│   ├── components/
|   |   ├── logingSection
|   |   |   └── logingForm.js
│   │   ├── TabSection
│   │   │    ├── CustomerTab
│   │   │    │   ├──updateCustomerDetails/
│   │   │    │   │      └── updateCustomerDetails.js
│   │   │    │   ├── CustomerDetailsCard.js
│   │   │    │   ├── CustomerDetailsMap.js
│   │   │    │   ├── CustomerTab.js
│   │   │    ├── locationTab/
│   │   │    │    ├── AddLocationDataMap.js
│   │   │    │    └── LocationDataTab.js
│   │   │    └── TabHeader.js
│   │   └── protectedRoutes.js
│   │   
│   │  
│   ├── hooks/
│   │   ├──useDebounce.js
│   ├── pages/
│   │   ├── LangingPage.js
|   |   └── LogingPage.js
│   ├── API/
│   │   └── api.js
│   └── App.js
├── .env
├── package.json
└── README.md
