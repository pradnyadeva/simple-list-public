# To-Do List with JWT Authentication

This is a simple To-Do list application that includes JWT (JSON Web Token) authentication. You can use it to create and manage your to-do items with the added benefit of user authentication.

## Features

- Create new to-do lists.
- User authentication using JWT.
- Add to-do items.
- List your to-do items.

## Getting Started

These instructions will help you get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, make sure you have the following installed:

- Node.js
- MongoDB (or another database of your choice)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/pradnyadeva/simple-list-public.git
   ```
2. Change directory to the project folder:

3. Install dependencies:

```bash
npm install
```

4. Set up environment variables:

Create a .env file in the project root directory with the following variables:
```
DB=your mongodb atlas link
SECRET=your-secret
```

5. Start the application:

   ```bash
   npm run start


The application should now be running on http://localhost:3200.

## Usage
Register a new account.
Log in using your registered credentials.
Create, and manage your to-do lists.


## Built With
Node.js
Express.js
MongoDB
JSON Web Tokens (JWT)
Contributing
Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests to us.



## Acknowledgments
jsonwebtoken for JWT support.
mongoose for MongoDB connection and modeling.


## Authors
Pradnyadeva

