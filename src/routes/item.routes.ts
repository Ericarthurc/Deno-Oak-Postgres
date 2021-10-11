import { Router } from "../../deps.ts";
import {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
} from "../controllers/item.controller.ts";

const itemRouter = new Router({ prefix: "/api/v1/items" });
itemRouter
  .get("/", getItems)
  .get("/:id", getItem)
  .post("/", createItem)
  .put("/:id", updateItem)
  .delete("/:id", deleteItem);

export default itemRouter;
