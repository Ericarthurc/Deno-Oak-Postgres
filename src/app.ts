import { Application } from "../deps.ts";
import itemRouter from "./routes/item.routes.ts";

const app = new Application();

app.use(itemRouter.routes()).use(itemRouter.allowedMethods());

await app.listen({ port: 8000 });
