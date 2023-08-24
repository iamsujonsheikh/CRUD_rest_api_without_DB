const express = require('express');
const userRouter = require('./routers/user.router');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRouter);

app.get('/', (req, res) => {
    res.status(200).send("Wellcoe to server.");
});


// client side error.
app.use((req, res) => {
    res.status(404).send("Not found.")
});

// server side error.
app.use((err, req, res) => {
    res.status(500).send("Internel server error.")
    console.log(err)
});

module.exports = app;