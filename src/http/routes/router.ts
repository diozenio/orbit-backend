import { FastifyInstance } from "fastify";
import { HelloController } from "@/modules";

const helloController = new HelloController();

export async function router(app: FastifyInstance) {
  app.get("/hello", async (request, response) => {
    return helloController.handle(request, response);
  });
}
