import { DenonConfig } from "https://deno.land/x/denon@2.4.9/mod.ts";

const config: DenonConfig = {
  scripts: {
    dev: {
      cmd: "deno run -A src/app.ts",
      desc: "run my app.ts file",
    },
  },
};

export default config;
