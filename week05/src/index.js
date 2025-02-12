"use strict";

const express = require('express');
const userRouter = require("./routes/user");
const app = express();

// Application level middleware here
app.use(express.json());

// Routes here
app.get("/", (req, res) => {
    res.send("Server Running...");
});

app.use("/api/users", userRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, (err) => {
    console.log(`App listening on port ${PORT}`);
});