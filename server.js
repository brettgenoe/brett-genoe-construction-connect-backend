const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

app.use(express.json());

const PORT = process.env.PORT || 8080;

app.use(cors({ origin: process.env.FRONTEND_URL || "http://localhost:3000" }));



app.listen(PORT, () => {
    console.log(`running at http://localhost:${PORT}`);
});