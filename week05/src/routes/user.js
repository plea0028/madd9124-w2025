const { Router } = require('express');
const validUserData = require('../middleware/validateUserData');
const userRouter = Router();

const users = [
    {
        id: 1,
        name: "John Doe",
        email: "john@gmail.com",
        password: "password"
    },
    {
        id: 2,
        name: "Jane Doe",
        email: "janedoe@gmail.com",
        password: "password123"
    },
    {
        id: 3,
        name: "Debby Smith",
        email: "derpoil234@gmail.com",
        password: "meandyou"
    }
]

// Get all users from an in-memory array
userRouter.get('/', (req, res) => {
    res.json(users);
});

// Adding (Post request) a user. This route should use the validation middleware created in step 2 and add the user to an in-memory database (an array). If the validation passes, return a 201 Created response with the newly created user object.
userRouter.post('/', validUserData, (req, res) => {
    const { name, email, password } = req.body;

    const newUser = {
        id: users.length + 1,
        name,
        email,
        password
    };

    users.push(newUser);

    res.status(201).json(newUser);
});

module.exports = userRouter;