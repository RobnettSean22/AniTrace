const express = require("express");
const app = express();
const massive = require("massive");
app.use(express.json());

let port = ... || Server#;
app.listen(port, ( => console.log(`clear on ${port}`)))