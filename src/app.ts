import { Application, cyan, underline } from "../deps.ts";
import itemRouter from "./routes/item.routes.ts";

const app = new Application();

app.use(itemRouter.routes());
app.use(itemRouter.allowedMethods());

console.log(cyan(underline(`Oak started at: ${Deno.env.get("OAK_PORT")}`)));

await app.listen({
  port: parseInt(<string>Deno.env.get("OAK_PORT"), 10) || 3030,
});
