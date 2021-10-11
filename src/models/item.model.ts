import { PostgresClient } from "../../deps.ts";
import { IItem } from "../types.ts";
import { dbClient } from "../db.ts";

class ItemModel {
  private dbClient: PostgresClient;

  constructor(dbClient: PostgresClient) {
    this.dbClient = dbClient;
  }

  async insert(data: Omit<IItem, "id">): Promise<Partial<IItem>> {
    try {
      await this.dbClient.connect();
      const text =
        "insert into items (product, serial, condition, year) values ($1, $2, $3, $4) returning id";
      const result = await this.dbClient.queryObject<IItem>({
        text,
        args: [data.product, data.serial, data.condition, data.year],
      });
      await this.dbClient.end();

      return result.rows[0] as IItem;
    } catch (error) {
      throw error;
    }
  }

  async delete(id: string): Promise<boolean> {
    try {
      await this.dbClient.connect();
      const text = "delete from items where id = $1";
      await this.dbClient.queryObject<IItem>({
        text,
        args: [id],
      });
      await this.dbClient.end();

      return true;
    } catch (error) {
      throw error;
    }
  }

  // async findOneById(id: string): Promise<Partial<IItem>> {
  //   try {
  //     await this.dbClient.connect();
  //     const text = "select * from items where id = $1";
  //     const result = await this.dbClient.queryObject<IItem>({
  //       text,
  //       args: [id],
  //     });
  //   } catch (error) {}
  // }
}

export const Item = new ItemModel(dbClient);
