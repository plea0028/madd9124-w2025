"use strict";

const express = require("express");
const cars = require("./cars");
const app = express();

app.get("/", (req, res) => {
    res.status(201).send({
        data: {
            message: "Hello from Express!",
        },
    });
});

app.get("/api/cars", (req, res) => {
    res.send({ data: cars });
});

const PORT = 4000; // this should go near the bottom

app.listen(PORT, (err) => {
    if (err) {
      return console.error("An error occurred", err);
    }
    console.log(`The server is listening on ${PORT}`);
  });