const Branch = require("../models/branch");

exports.createBranch = async (req, res, next) => {
  const branchName = req.body.name;
  const branchAddress = req.body.address;
  const branchProvince = req.body.province;
  const branchDistrict = req.body.district;
  const branch = new Branch({
    name: branchName,
    address: branchAddress,
    province: branchProvince,
    district: branchDistrict,
  });

  let branchCreated = await Branch.findOne({ name: branchName });
  if (branchCreated) {
    return res.status(400).json({ message: "Branch already created!" });
  }

  branch
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Branch created successfully!",
        branch: branch,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.getBranches = (req, res, next) => {
  Branch.find()
    .then((branches) => {
      const newBranches = branches.map((item, index) => {
        return {
          _id: item._id,
          id: +index + 1,
          name: item.name,
          address: item.address,
          province: item.province,
          district: item.district,
          createdAt: new Date(item.createdAt).toLocaleDateString(),
        };
      });
      res.status(200).json(newBranches);
    })
    .then()
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
