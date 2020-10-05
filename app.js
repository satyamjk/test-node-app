const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to the app");
});

app.listen(process.env.port || 3000, () => {
    console.log("test-success");
});