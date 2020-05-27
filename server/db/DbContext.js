import ValueSchema from "../models/Value";
import CatSchema from "../models/Cat";
import mongoose from "mongoose";

class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Cats = mongoose.model("Cats", CatSchema);
}

export const dbContext = new DbContext();
