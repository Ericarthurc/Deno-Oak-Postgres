import { PostgresClient, envConfig } from "../deps.ts";

envConfig();

const dbConfig = {
  user: Deno.env.get("BH_USER"),
  database: Deno.env.get("BH_DATABASE"),
  hostname: Deno.env.get("BH_HOST"),
  password: Deno.env.get("BH_PASSWORD"),
  port: Deno.env.get("BH_PORT"),
};

// const data = await Deno.readTextFile("./database.sql");
// await client.queryArray(
//   `${data}`,
// );

export const dbClient = new PostgresClient(dbConfig);
