import { RouterContext } from "../../deps.ts";
import { IItem } from "../types.ts";
import { Item } from "../models/item.model.ts";

export async function getItems(ctx: RouterContext) {}

export async function getItem(ctx: RouterContext) {}

export async function createItem(ctx: RouterContext) {
  try {
    const body = await ctx.request.body();
    const data: IItem = body.value;

    const item = await Item.insert({});
  } catch (error) {}
}

export async function updateItem(ctx: RouterContext) {}

export async function deleteItem(ctx: RouterContext) {}
