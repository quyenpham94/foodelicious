# eat-cleaning-app

#### <div align='center'>Try the Foodelicious App Here</div>
#### <div align='center'>http://foodelicious-quyen.herokuapp.com/</div>

This project take the information from the Spoonacular API (https://spoonacular.com/)

#### <div align='center'> Project Proposal </div>

## Goal:
Foodelicious is a web application that is designed to support people's daily meal with numerous recipes. It also provides the nutrition of each recipe and each food that user eat everyday so that they can manage their diet. User can refine the diet, calories, and fats to reach their limit nutrition every day. Users are also able to save their favorite recipes in their account so that they can re-read them.    
### The demographic of users:
Everyone who wants to have a healthy life or diet process can use this website to support their goal. It could be easy-to-use so that the user does not need to know some specific high technology. The user just needs to search/click on the food they ate on their meal and the app will calculate the nutrition itself and return to the user.

## Data Sources
<a>[Spoonacular API](https://spoonacular.com/food-api)</a>. You will need to create an account to get a free access to their dataset

## Database schema
The data is built using an endpoint to access a particular dataset of spoonacular API. Using API key to get the data. 
The app uses 4 models: Users, Foods, Recommended Meals, Favorite Meal. The Users model saves the user_id, username, hashed password, and an email to the database. The Foods model saves a foreign key to the user_id, foodname, meal_nutrition to the database. The Recommended Meals model saves a foreign key to the user_id,  foods, meal_nutrition. The Favorite Meal model saves a foreign key to the user_id, foods, meal_nutrition to the database. 
User signup, login, and logout functionality was implemented, as well as authentication and authorization. An account is required to access any of the detailed pages and search functions. Username and email must both be unique

## Issue about API
The limit of free data. Each user only has 150 points to access their database using the endpoint. And the dataset might run into the problem of limited available ingredients. Thus, not all of the ingredients the user eats in one meal will be there.

## Functionality
Users can create an account and log in when they want to use the app. The data will be stored so the user can check their diet process.
Users can create an empty meal and search/click on foods that they eat in their meal, then add to that empty meal. The app will sum the nutrition of all foods they eat in one meal and return the result. They also can remove and edit if they put wrong items.
They can save their favorite meal in order to use it again in the future.
They also can remove their favorite meal and add another favorite meal (I’m sure their taste will change a lot)
There will be some recommended meals so that the user can choose and follow it to make their meal. 

## Technologies
Python/Flask, PostgreSQL, SQLAlchemy, Heroku, Jinja, RESTful APIs, JavaScript, HTML, CSS

## Installation

### Before You Begin
You will need python3 and pip3 installed for this project. You will also need to setup  Portgres Database if you want to allow the user to save each recipe or each food. Remember, in order to save the recipe or the food the user must register and login, for that you will need a DB.

#### Installation Instructions
1. Clone the repo.
  ```sh
  https://github.com/quyenpham94/foodelicious.git
  ```
2. Create a virtual environment in the project directories.
  ```sh
  $ python3 -m venv venv
  ```
3. Start the virtual environment.
  ```sh
  $ source venv/bin/activate
  ```
4. Install required packages.  
  ```sh
  $ pip3 install -r requirements.txt
  ```
5. Open the app.py file and change the current API_KEY with your API_KEY that you get from https://spoonacular.com
  ```sh
  API_KEY = ""
  ```
<br>

_**You will need to set up PostgreSQL database for this application. Once that is done you can move to the next step.**_

<br>

1. In the terminal.
  ```sh
  $ createdb eat_clean_user
  $ ipython
  ```

2. In Ipython.
  ```sh
  In [1]: run app.py
  In [2]: db.create_all()
  In [1]: quit()
  ```
3. Run the app.
  ```sh
  $ flask run
  ```

4. Open web browser and run the app on the port for your server http://127.0.0.1:5000 

Author <a>[Quyen Pham](https://github.com/quyenpham94)