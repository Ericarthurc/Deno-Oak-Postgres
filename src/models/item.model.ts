import { PostgresClient } from "../../deps.ts";
import { dbClient } from "../db/db.ts";

export interface IItem {
  id: string;
  product: string;
  manufacturer: string;
  deviceType: string;
  serial: string;
  condition: string;
  year: string;
}

class ItemModel {
  private dbClient: PostgresClient;

  constructor(dbClient: PostgresClient) {
    this.dbClient = dbClient;
  }

  async insert(data: IItem): Promise<Partial<IItem>> {
    console.log(data);

    try {
      await this.dbClient.connect();
      const text =
        "INSERT INTO items (product, manufacturer, device_type, serial, condition, year) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *";
      const result = await this.dbClient.queryObject<IItem>({
        text,
        args: [
          data.product,
          data.manufacturer,
          data.deviceType,
          data.serial,
          data.condition,
          data.year,
        ],
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
      const text = "DELETE FROM items WHERE id = $1";
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

  async update(data: IItem): Promise<Partial<IItem>> {
    try {
      await this.dbClient.connect();
      const text =
        "UPDATE items SET product = $2, manufacturer = $3, device_type = $4, serial = $5, condition = $6, year = $7 WHERE id = $1 RETURNING *";
      const result = await this.dbClient.queryObject<IItem>({
        text,
        args: [
          data.id,
          data.product,
          data.manufacturer,
          data.deviceType,
          data.serial,
          data.condition,
          data.year,
        ],
      });
      await this.dbClient.end();

      return result.rows[0] as IItem;
    } catch (error) {
      throw error;
    }
  }

  async findOneById(id: string): Promise<Partial<IItem>> {
    try {
      await this.dbClient.connect();
      const text = "SELECT * FROM items WHERE id = $1";
      const result = await this.dbClient.queryObject<IItem>({
        text,
        args: [id],
      });

      if (result.rows.length == 0) {
        throw new Error("empty");
      }

      return result.rows[0] as IItem;
    } catch (error) {
      throw error;
    }
  }
}

export const Item = new ItemModel(dbClient);
