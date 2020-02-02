require("dotenv").config();
const express = require("express");
const app = express();
const massive = require("massive");
const session = require("express-session");
const {
  planningAniView,
  watchingAniView,
  completedAniView,
  planningCreate,
  watchingCreate,
  completedCreate,
  planningUpdate,
  watchingUpdate,
  completedUpdate,
  planningDelete,
  watchingDelete,
  completedDeleted
} = require("./Controllers/animeController");
const {
  register,
  login,
  logout,
  userSession
} = require("./Controllers/profileController");

const { SESSION_SECRET, PORT, CONNECTION_STRING } = process.env;
app.use(express.json());

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 14
    }
  })
);

massive(CONNECTION_STRING).then(dbInstance => {
  console.log("data fired up");
  app.set("db", dbInstance);
});

/*profile endpoints */

let port = PORT || 5000;
app.listen(port, () => console.log(`clear on ${port}`));
