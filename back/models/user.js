const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  avatarUrl: {
    type: String,
  },
  branch: {
    type: Schema.Types.ObjectId,
    ref: "Branch",
  },
  cart: {
    items: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "Product",
        },
        quantity: { type: Number, required: true },
      },
    ],
  },
  role: {
    type: String,
    enum: ["_customer", "_admin", "_superadmin"],
    required: true,
    default: "_customer",
  },
  status: {
    type: String,
    required: true,
    enum: ["blocked", "active"],
    default: "active",
  },
});

module.exports = mongoose.model("User", userSchema);
