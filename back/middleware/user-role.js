const User = require("../models/user");

module.exports.isAdminOrSuperAdmin = (req, res, next) => {
  const userId = req.userId;
  User.findById(userId)
    .then((foundedUser) => {
      if (foundedUser.role == "_admin" || foundedUser.role == "_superadmin") {
        req.userId = userId;
        next();
      }
    })
    .catch((err) => {
      const error = new Error("Not authenticated.");
      error.statusCode = 401;
      next(err);
    });
};
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
module.exports.isAdmin = (req, res, next) => {
  const userId = req.userId;
  User.findById(userId)
    .then((foundedUser) => {
      if ((foundedUser.role = "_admin")) {
        req.userId = userId;
        next();
      }
    })
    .catch((err) => {
      const error = new Error("Not authenticated.");
      error.statusCode = 401;
      next(err);
    });
};

module.exports.isSuperAdmin = (req, res, next) => {
  const userId = req.userId;
  User.findById(userId)
    .then((foundedUser) => {
      if (foundedUser.role == "_superadmin") {
        req.userId = userId;
        next();
      }
    })
    .catch((err) => {
      const error = new Error("Not authenticated.");
      error.statusCode = 401;
      next(err);
    });
};
