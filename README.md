# Anonymous Course Reviews

## Overview
Anonymous Course Reviews is a web application that allows users to anonymously post and view reviews for courses. It leverages Express.js for server-side logic, MongoDB for data storage, and Mongoose for seamless database integration.

## Features
- **View Reviews**: Browse all reviews stored in the database.
- **Add Reviews**: Submit anonymous course reviews using a user-friendly form.
- **Filter and Sort**: (Future Feature) Organize and display reviews based on user preferences.
- **Dynamic UI**: Ensures a seamless user experience by dynamically updating the interface without page reloads.

## Technologies Used
- **Express.js**: Backend framework for routing and API creation.
- **MongoDB**: NoSQL database for storing course reviews.
- **Mongoose**: ODM for MongoDB integration in Node.js.
- **dotenv**: Environment variable management.
- **Handlebars (HBS)**: Server-side templating for dynamic views.
- **AJAX**: Handles asynchronous server requests.

## Directory Structure
├── app.mjs ├── db.mjs ├── config.mjs ├── package-lock.json ├── package.json ├── public │ ├── css │ │ └── styles.css │ ├── img │ └── javascripts │ └── main.js ├── .gitignore ├── .env ├── views │ ├── layout.hbs │ ├── index.hbs │ └── add-review.hbs


## How to Run
1. **Clone the repository:**
   ```bash
   git clone git@github.com:your-username/anonymous-course-reviews.git

2. Navigate to the project directory:
   ```bash
    cd anonymous-course-reviews

3. Install dependencies:
   ```bash
    npm install

4. Set up a MongoDB database:

Create a local or cloud-based MongoDB database (e.g., MongoDB Atlas).
Add the connection string to a .env file:

DSN=mongodb://localhost/anonymous-course-reviews

5. Start the server:
   ```bash
    node app.mjs

6. Open the application in your browser:

- **Home**: [http://localhost:3000/](http://localhost:3000/)
- **Add Review**: [http://localhost:3000/reviews/add](http://localhost:3000/reviews/add)

7. How to Use

- Navigate to the Home page to view existing course reviews.
- Click Add Review to submit a new anonymous course review.
- Use the form to provide details:

    Course number
    Course name
    Semester
    Professor's name
    Your review

