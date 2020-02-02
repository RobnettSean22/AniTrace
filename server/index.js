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
  completedDelete
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

/*user end points */
app.post("/auth/register", register);
app.post("/auth/login", login);
app.get("/auth/user_session", userSession);
app.delete("/auth/logout", logout);

/*anime end points  */
app.get("/api/planning_view/:username", planningAniView);
app.get("/api/watching_view/:username", watchingAniView);
app.get("/api/completed_view/:username", completedAniView);

app.post("/api/planning_create/:username/:planning_id", planningCreate);
app.post("/api/wating_create/:username/:watching_id", watchingCreate);
app.post("/api/completed_create/:username/:completed_id", completedCreate);

app.put("/api/planning_update/:username/:episode_watched", planningUpdate);
app.put("/api/watching_update/:username/:episode_watched", watchingUpdate);
app.put("/api/completed_update/:username/:episode_watched", completedUpdate);

app.delete("/api/planning_delete/:username/:planning_id", planningDelete);
app.delete("/api/watching_delete/:username/:watching_id", watchingDelete);
app.delete("/api/completed_delete/:username/:completed_id", completedDelete);

let port = PORT || 5000;
app.listen(port, () => console.log(`clear on ${port}`));
