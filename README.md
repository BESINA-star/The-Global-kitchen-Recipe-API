# Global Kitchen API

A RESTful API for managing recipes built with Node.js, Express, and MongoDB.



## Features

- Create a new recipe
- Get all recipes
- Update a recipe
- Delete a recipe
- MongoDB database integration
- Layered architecture (Routes, Controllers, Services, Models)



## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv

## Project Structure
global-kitchen-api/
│
├── config/
│ └── db.js
├── controllers/
│ └── recipeController.js
├── models/
│ └── recipeModel.js
├── routes/
│ └── recipeRoutes.js
├── services/
│ └── recipeService.js
├── 
├── .gitignore
├── package.json
├── server.js

##  API Endpoints

### Create Recipe
POST `/api/recipes`

### Get All Recipes
GET `/api/recipes`

### Update Recipe
PATCH `/api/recipes/:id`

### Delete Recipe
DELETE `/api/recipes/:id`

