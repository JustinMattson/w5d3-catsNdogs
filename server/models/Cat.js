import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Cat = new Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Cat;
