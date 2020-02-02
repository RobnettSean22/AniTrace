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

  completedAniView: (req, res, next) => {
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
        res.status(400).send({ errorMessage: "can not create planning" });
      });
  },
  planningUpdate: (req, res, next) => {
    const db = req.app.get("db");
    const { username } = req.params;
    const { episode_watched } = req.body;
    db.planing_update([username, episode_watched])
      .then(planningUpdate => res.status(200).send(planningUpdate))
      .catch(err => {
        res.status(400).send({ errorMessage: "can not update planning" });
      });
  },
  watchingUpdate: (req, res, next) => {
    const db = req.app.get("db");
    const { username } = req.params;
    const { episode_watched } = req.body;
    db.watching_update([username, episode_watched])
      .then(watchingUpdate => res.status(200).send(watchingUpdate))
      .catch(err => {
        res.status(400).send({ errorMessage: "can not update planning" });
      });
  },
  completedUpdate: (req, res, next) => {
    const db = req.app.get("db");
    const { username } = req.params;
    const { episode_watched } = req.body;
    db.planing_update([username, episode_watched])
      .then(completedUpdate => res.status(200).send(completedUpdate))
      .catch(err => {
        res.status(400).send({ errorMessage: "can not update planning" });
      });
  },
  planningDelete: (req, res, next) => {
    const db = req.app.get("db");
    const { username, planning_id } = req.params;
    db.planning_delete([username, planning_id])
      .then(planningDelete => res.status(200).send(planningDelete))
      .catch(err => {
        res
          .status(400)
          .send({ errorMessage: "could not delete planning item" });
      });
  },
  watchingDelete: (req, res, next) => {
    const db = req.app.get("db");
    const { username, watching_id } = req.params;
    db.watching_delete([username, watching_id])
      .then(watchingDelete => res.status(200).send(watchingDelete))
      .catch(err => {
        res
          .status(400)
          .send({ errorMessage: "could not delete watching item" });
      });
  },
  completedDelete: (req, res, next) => {
    const db = req.app.get("db");
    const { username, completed_id } = req.params;
    db.completed_delete([username, completed_id])
      .then(completedDelete => res.status(200).send(completedDelete))
      .catch(err => {
        res
          .status(400)
          .send({ errorMessage: "could not delete completed item" });
      });
  }
};
