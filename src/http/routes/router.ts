import { FastifyInstance } from "fastify";
import { HelloController, GetTransactionsController } from "@/modules";

const helloController = new HelloController();
const getTransactionsController = new GetTransactionsController();

export async function router(app: FastifyInstance) {
  app.get("/hello", async (request, response) => {
    return helloController.handle(request, response);
  });

  app.get("/expenses/transactions", async (request, response) => {
    return getTransactionsController.handle(request, response);
  });
}
