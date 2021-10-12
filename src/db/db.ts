import { PostgresClient, envConfig } from '../../deps.ts';

envConfig({ export: true });

export const dbConfig = {
  user: Deno.env.get('DB_USER'),
  database: Deno.env.get('DB_DATABASE'),
  hostname: Deno.env.get('DB_HOST'),
  port: Deno.env.get('DB_PORT'),
  password: Deno.env.get('DB_PASSWORD'),
};

// const data = await Deno.readTextFile("./database.sql");
// await client.queryArray(
//   `${data}`,
// );

export const dbClient = new PostgresClient(dbConfig);
