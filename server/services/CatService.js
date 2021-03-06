import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class CatsService {
  async find(query = {}) {
    return await dbContext.Cats.find(query);
  }
  async create(rawData) {
    return await dbContext.Cats.create(rawData);
  }
  async delete(id) {
    let data = await dbContext.Cats.findByIdAndDelete(id);
    if (!data) {
      throw new BadRequest("Invalid Id");
    }
    return "successfully deleted";
  }
  async findById(id) {
    let cat = await dbContext.Cats.findById(id);
    if (!cat) {
      throw new BadRequest("Invalid Id");
    }
    return cat;
  }
}

export const catsService = new CatsService();
