# Hotel Booking Backend
This repository contains the backend code for a hotel booking website, built using Node.js, Express.js, and MongoDB. The backend provides APIs for managing users, rooms, bookings, and other functionalities required for a hotel booking system.

# Technologies Used
Node.js: A JavaScript runtime for building server-side applications.
Express.js: A web framework for Node.js that simplifies routing, middleware handling, and more.
MongoDB: A NoSQL database for storing and managing data.
Mongoose: An ODM (Object Data Modeling) library for MongoDB and Node.js.

<!-- ----------------------------------------------------------------------------------------------------- -->
Project Setup
Follow these steps to set up the project on your local machine:

# 1. Clone the Repository
Clone this repository to your local machine using the following command:

bash
Copy code
git clone https://github.com/your-username/hotel-booking-backend.git


# 2. Install Dependencies
Navigate to the project directory and install the dependencies using npm or yarn:

bash
Copy code
cd hotel-booking-backend
npm install



# 3. Set Up Environment Variables
Create an .env file in the root directory of the project to store environment variables. Example .env content:

plaintext
Copy code
PORT=8000
MONGODB_URI=mongodb://localhost:27017/hotel-booking
Adjust the values as needed for your development environment. Ensure you have MongoDB installed and running locally.

# 4. Start the Server
Start the Node.js server using the following command:

bash
Copy code
npm run start
The server should now be running on the specified port (default is 3000) and connected to your MongoDB database.

# API Endpoints
The backend provides the following API endpoints for the hotel booking website:

/api/users: CRUD operations for managing users.
/api/rooms: CRUD operations for managing rooms.
/api/bookings: CRUD operations for managing bookings.
Refer to the API documentation or code comments for more details on each endpoint and its usage.
