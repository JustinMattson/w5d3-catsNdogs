import express from "express";
import BaseController from "../utils/BaseController";
import { catsService } from "../services/CatService";

export class CatsController extends BaseController {
  constructor() {
    super("api/cats");
    this.router
      .get("", this.getAll)
      .post("", this.create)
      .delete("/:id", this.delete);
  }
  async getAll(_, res, next) {
    try {
      let data = await catsService.find();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async create(req, res, next) {
    try {
      let data = await catsService.create(req.body);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      let data = await catsService.delete(req.params, id);
      res.send(data);
    } catch (error) {
      next(error);
    }
  }
}
