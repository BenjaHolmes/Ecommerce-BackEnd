# E-CommerceSite-BackEnd
A RESTful API, linked to a PostgeSQL Database, representing the backend of an ecommerce site.

## Project Description

This is my first backend project, the goal of which is to create an API which allows us to perform CRUD operations for an ecommerce website.
The tasks for this project included; creating a relational database with PostgreSQL, linking it to an Express server, and then setting up API routes to
perform various actions required in ecommerce, for example relating to shopping carts, products, user accounts and order history.
 In addition to this, I also had to set up user registration and login functionality, which required the use of EJS, Passport.js and bcrypt, for collecting
 data and authorization.
 
 Being the first project, i have done of this kind, it was fairly difficult, particularly designing the relationships between tables in my database 
 and working out how best to implement them, using passport.js to authorize users and working with swagger for documentation.
 
 In the next project, this backend will be used with a front end to create a full-stack ecommerce site, so i will have more opportunities to add to my database and to add more features to the backend. As the front end is still to be
 developed, i have used EJS pages here to let the user register/login.

### Live Demonstration of the Site

A Live Demonstration of the Site can be found at 

### Languages and Libraries Used

* Node.js
* Express.js
* Passport.js
* Bcrypt
* EJS
* PostgreSQL
* Node-Postgres
* EJS
* CSS
* JavaScript


### Project Demonstration

Database Schema
![ecommerceSchema](https://user-images.githubusercontent.com/90611253/189169558-3c79c46c-4ec0-4121-9907-883b294bee39.png)
* In the future i will add further tables to this, such as a table which holds reviews for each of the products

![register-screen-example](https://user-images.githubusercontent.com/90611253/189170723-3a932bd8-37a7-49d1-a901-6f8766dcfbef.png)
* We can see in the screengrab that the user can enter their details on the EJS page

![created-user-in-db](https://user-images.githubusercontent.com/90611253/189170817-d3e43137-06f4-4cc6-ba52-b94eb2ab0b66.png)
* Once the registration is completed, we can query the database to see that the new user has been added successfully.
* We can also see that the password has been encrypted

![log-in-example](https://user-images.githubusercontent.com/90611253/189170937-3d12c678-071d-439d-84cd-e7aa48822827.png)

![successful-login-example](https://user-images.githubusercontent.com/90611253/189170960-a3b85173-2ae1-4191-84bf-bde29ecc846e.png)
* Then, we can see that using these newly created details, the user is able to log in.


### Future Additions
I have written documentation for the API with swagger editor, which can be found in OpenAPI.yaml.
I believe i need to further integrate this with my Node files so that you can access my API routes through swagger.
