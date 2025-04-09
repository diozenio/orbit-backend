import fastify from "fastify";

import { router } from "@/http/routes/router";
import { env } from "@/env";
import corsPlugin from "@/plugins/cors";

const app = fastify();

corsPlugin(app);
app.register(router, { prefix: "/api" });

const port = env.PORT;

app.listen({ port, host: "0.0.0.0" }).then(() => {
  if (env.NODE_ENV !== "production") {
    console.log(`Server is running on http://localhost:${port}/api`);
  }
});
