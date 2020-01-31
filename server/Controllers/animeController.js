module.exports = {
  planningAniView: (req, res, next) => {
    const db = req.app.get("db");
    const { username } = req.params;
    db.planning_read(username)
      .then(planning => res.status(200).send(planning))
      .catch(err => {
        res.status(400).send({ errorMessage: "can not view planning" });
      });
  },

  watchingAniView: (req, res, next) => {
    const db = req.app.get("db");
    const { username } = req.params;
    db.watching_read(username)
      .then(watching => res.status(200).send(watching))
      .catch(err => {
        res.status(400).send({ errorMessage: "can not view watching" });
      });
  },

  completed: (req, res, next) => {
    const db = req.app.get("db");
    const { username } = req.params;
    db.completed_read(username)
      .then(completed => {
        res.status(400).send(completed);
      })
      .catch(err => {
        res.status(400).send({ errorMessage: "can not view completed" });
      });
  },
  planningCreate: (req, res, next) => {
    const db = rea.qpp.get("db");
    const { username } = req.params;
    const { plannig_code } = req.body;

    db.planning_create([username, plannig_code])
      .then(createPlanning => res.status(200).send(createPlanning))
      .catch(err => {
        res.status(400).send({ errorMessage: "can not creat planning" });
      });
  },

  watchingCreate: (req, res, next) => {
    const db = rea.qpp.get("db");
    const { username } = req.params;
    const { watching_code } = req.body;

    db.planning_create([username, watching_code])
      .then(createWatching => res.status(200).send(createWatching))
      .catch(err => {
        res.status(400).send({ errorMessage: "can not creat planning" });
      });
  },
  completedCreate: (req, res, next) => {
    const db = rea.qpp.get("db");
    const { username } = req.params;
    const { completed_code } = req.body;

    db.completed_create([username, completed_code])
      .then(createCompleted => res.status(200).send(createCompleted))
      .catch(err => {
        res.status(400).send({ errorMessage: "can not creat planning" });
      });
  }
};
