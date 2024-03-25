const express = require("express");
const cors = require('cors');

const app = express();
const PORT = process.env.BACK_PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(PORT, () => {
    console.log(`express server is running on http://localhost:${PORT}`);
});