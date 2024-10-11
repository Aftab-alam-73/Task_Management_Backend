**Task Management System Backend Server**

*Description:* This is a Backend Server Api of a Task management system.

**Steps to Setup locally:**

1. Step 1 : clone the repo
    
1. Step 2 : Run this command ```npm install```
1. Step 3 : Change ```.env.example``` to ```.env``` file.
1. Step 4 : Add mongodb database url and jwt secret key in ```.env``` file ```DATABASE_URL=```, ```JWT_SECRET_KEY=```
 1. Step 6 : Run this command to start the server ```npm start```


***Important***
1. To use the endpoints you first need to signup and then signin with email and password because i have implemented JWT for security, While making request to other services please make sure you are passing the access_token via header.
 
**Admin endpoints**

admin/register : Admin can register using this endpoint.

admin/login : Admin can login using this endpoint.

admin/task/assignments?name= : Admin can fetch all the assignment associated with his/her name.

admin/task/assignments/:id/accept: Admin can accept an assignment using this endpoint.

admin/task/assignments/:id/accept: Admin can reject an assignment using this endpoint.


**User endpoints**

user/register : User can register using this endpoint.

user/login : User can login using this endpoint.

user/task/upload: User can upload an assignment using this endpoint.


*Live url:*    https://task-management-backend-3ega.onrender.com
