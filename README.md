# PagePal

#### Video Demo: https://www.loom.com/share/257623afcab449f3aea0e5714aa1ba39?sid=db31b279-e7af-4b78-8d69-fce159cdf973

## Overview

PagePal is a web application designed for book enthusiasts who want to keep track of their reading list. With the constant release of new books and recommendations from friends, it can be challenging to remember all the books you want to read. PagePal solves this problem by providing a platform where you can easily manage your reading list.

The application allows users to search for books, add them to their reading list, and remove them once they're done. The goal is to eventually add a feature where users can move completed books to a "read" section and leave reviews.

## Features

- **User Authentication**: Users can create an account to store their personal reading list. The application uses session-based authentication to keep track of logged-in users.

- **Book Search**: Users can search for books using the Google Books API. This feature allows users to find specific books and add them to their reading list.

- **Reading List Management**: Users can add books to their reading list and remove them once they're done. The application provides an intuitive interface for managing the reading list.

## Technologies Used

PagePal is built with a Ruby on Rails backend and a React.js frontend. The application uses the Google Books API for book search functionality.

- **Ruby on Rails**: The backend of the application is built with Ruby on Rails. It includes models and controllers for Users, Items, and Favorites. The backend handles user authentication and manages the reading list data.

- **React.js**: The frontend of the application is built with React.js. It includes components for user authentication, book search, and reading list management. The frontend communicates with the backend through API calls.

- **Google Books API**: The application uses the Google Books API to search for books. Users can search for a book by title, author, or ISBN, and the application will display matching results from the Google Books database.

## Installation

To install and run PagePal, follow these steps:

1. Clone the repository to your local machine. ((https://github.com/jharvick/PagePal)) / (https://github.com/jharvick/PagePal-frontend)
2. Navigate to the backend directory and run `bundle install` to install the necessary Ruby gems.
3. Run `rails db:migrate` to set up the database.
4. Start the Rails server by running `rails s`.
5. Navigate to the frontend directory and run `npm install` to install the necessary JavaScript packages.
6. Start the React development server by running `npm run dev`.
7. Open your web browser and navigate to `http://localhost:3000` to view the JSON data.
8. Open your web browser and navigate to `http://localhost:5173` to view the application.

You'll need to have the backend code running on http://localhost:3000.
You can view the app on http://localhost:5173.

## Roadmap

In the future, we plan to add more features to PagePal, including a "read" section where users can move completed books and leave reviews. We also plan to improve the user interface and add more customization options for the reading list.

## Conclusion

PagePal is a simple and effective solution for managing your reading list. Whether you're an avid reader or just someone who wants to keep track of recommended books, PagePal can help you stay organized. We hope you find it useful and we welcome any feedback or suggestions.
