const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");

app.use(express.json());

const PORT = process.env.PORT || 8080;

app.use(cors());
// app.use(cors({ origin: process.env.FRONTEND_URL || "http://localhost:3000" }));

const userRouter = require("./routes/user-routes.js");
app.use("/api/users", userRouter);

const projectRouter = require("./routes/project-routes.js");
app.use("/api/projects", projectRouter);


app.listen(PORT, () => {
    console.log(`running at http://localhost:${PORT}`);
});

app.use((req, res, next) => {
    console.log(`Received a ${req.method} request at ${req.url}`);
    next();
});


app.use((req, res, next) => {
    res.on("finish", () => {
        console.log(`Responded with status ${res.statusCode}`);
    });
    next();
});