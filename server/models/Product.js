import mongoose from "mongoose";
const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    mainImg: {
      type: String,
      required: true,
    },
    hoverImg: {
      type: String,
      required: true,
    },
    availbleImgs: {
      type: Array,
      required: true,
      default: [],
    },
    tag: {
      type: String,
    },
    newPrice: {
      type: Number,
      required: true,
    },
    oldPrice: {
      type: Number,
    },

    category: {
      type: String,
      required: true,
    },
    colors: {
      type: Array,
      required: true,
      default: [],
    },
    sizes: {
      type: Array,
      required: true,
      default: [],
    },
    stock: {
      type: Array,
      required: true,
      default: [],
    },
    orders: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);
const Product = mongoose.model("Product", productSchema);
export default Product;
