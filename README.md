# Multi-Step Form Application

This project is a web application that includes a login page, a forgot password page, and a multi-step form with progress indicator. It integrates with an API for authentication and certain functionalities.

## Features

- Login Page:
  - Email field validation
  - Displays appropriate messages for login success and failure
  - Integrates with API for authentication

- Forgot Password Page:
  - Allows users to request a password reset
  - No API integration required

- Multi-Step Form:
  - Available only for authenticated users
  - Uses a progress indicator to show the current step
  - Step 1: Basic Details
    - Includes fields for user's name, email, and phone number
  - Step 2: Address
    - Accepts standard address format inputs (address line 1, address line 2, city, state, pincode, country)
  - Step 3: File Upload
    - Allows users to upload a single file in PNG or PDF format
    - Integrates with API for file upload
  - Step 4: Multi-File Upload
    - Allows users to upload up to 5 files in PNG or PDF format
    - Integrates with API for file upload
    - Automatically records geolocation during this stage and provides status updates
  - Step 5: Status
    - Displays a relevant message indicating successful form submission or any errors

## Setup and Installation

1. Clone the repository.
2. Install the required dependencies by running `npm install`.
3. Configure the API endpoints and credentials in the appropriate files.
4. Start the development server with `npm start`.

## Technologies Used

- Front-end: HTML, CSS, JavaScript, React
- API Integration: Swagger API

## Credits

- Anshuman Goel: https://github.com/AnshumanGoel
