const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: Array,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    salePercent: {
      type: Number,
      default: 0,
    },
    salePrice: {
      type: Number,
      default: 0,
    },
    mainCollection: {
      type: String,
      required: true,
    },
    subCollection: {
      type: String,
      required: true,
    },
    size: {
      type: Array,
      required: true,
    },
    color: {
      type: String,
    },
    sold: {
      type: Number,
      default: 0,
    },
    description: {
      type: String,
    },
    representStatus: [
      {
        branchId: {
          type: Schema.Types.ObjectId,
          required: true,
          ref: "Branch",
        },
        status: {
          type: String,
          enum: ["out of stock", "in stock"],
          required: true,
        },
      },
    ],
    creator: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", userSchema);
