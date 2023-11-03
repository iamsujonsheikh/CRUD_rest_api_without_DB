const express = require('express');
const app = express();
const cors = require('cors');
const userRoute = require('./routes/user.route');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/users', userRoute)

app.get('/user', (req, res) => {
    res.status(200).send('Hello man..')
});

// HOME ROUTE
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
});

// NOT_FOUND ROUTE
app.use((req, res, next) => {
    res.status(404).send("Page not found!...")
});

// ERROR HANDLE PAGE
app.use((err, req, res, next) => {
    res.status(500).send('Internel server error...')
});

module.exports = app;