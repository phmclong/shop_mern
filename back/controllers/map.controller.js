const Map = require("../models/map");

exports.getMap = (req, res, next) => {
  Map.find()
    .then((map) => {
      res.status(200).json(map);
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
