import { FastifyInstance } from "fastify";
import {
  HelloController,
  GetTransactionsController,
  GetTransactionsCategoriesController,
  UpdateTransactionsCategoryController,
} from "@/modules";

const helloController = new HelloController();
const getTransactionsController = new GetTransactionsController();
const getTransactionsCategoriesController =
  new GetTransactionsCategoriesController();
const updateTransactionsCategoryController =
  new UpdateTransactionsCategoryController();

export async function router(app: FastifyInstance) {
  app.get("/hello", async (request, response) => {
    return helloController.handle(request, response);
  });

  app.get("/expenses/transactions", async (request, response) => {
    return getTransactionsController.handle(request, response);
  });

  app.get("/expenses/transactions/categories", async (request, response) => {
    return getTransactionsCategoriesController.handle(request, response);
  });

  app.post("/expenses/transactions/categories", async (request, response) => {
    return createTransationsCategoryController.handle(request, response);
  });

  app.put(
    "/expenses/transactions/categories/:id",
    async (request, response) => {
      return updateTransactionsCategoryController.handle(request, response);
    }
  );
}
