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
  }
};
