import { Application } from "../deps.ts";

const app = new Application();

// app.use(async (ctx) => {
//   // ctx.response.body = "Hello world!";
//   const item: Item = await ctx.request.body().value;
//   console.log(item);
// });

await app.listen({ port: 8000 });
