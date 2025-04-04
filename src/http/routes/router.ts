import { FastifyInstance } from "fastify";
import {
  HelloController,
  GetTransactionsController,
  GetTransactionsCategoriesController,
  CreateTransactionsCategoryController,
  UpdateTransactionsCategoryController,
  DeleteTransactionsCategoryController,
  CreateTransactionsController,
} from "@/modules";

const helloController = new HelloController();
const getTransactionsController = new GetTransactionsController();
const getTransactionsCategoriesController =
  new GetTransactionsCategoriesController();
const createTransactionsCategoryController =
  new CreateTransactionsCategoryController();
const updateTransactionsCategoryController =
  new UpdateTransactionsCategoryController();
const deleteTransactionsCategoryController =
  new DeleteTransactionsCategoryController();
const createTransactionsController = new CreateTransactionsController();

export async function router(app: FastifyInstance) {
  app.get("/hello", async (request, response) => {
    return helloController.handle(request, response);
  });

  app.get("/expenses/transactions", async (request, response) => {
    return getTransactionsController.handle(request, response);
  });

  app.post("/expenses/transactions", async (request, response) => {
    return createTransactionsController.handle(request, response);
  });

  app.get("/expenses/transactions/categories", async (request, response) => {
    return getTransactionsCategoriesController.handle(request, response);
  });

  app.post("/expenses/transactions/categories", async (request, response) => {
    return createTransactionsCategoryController.handle(request, response);
  });

  app.put(
    "/expenses/transactions/categories/:id",
    async (request, response) => {
      return updateTransactionsCategoryController.handle(request, response);
    }
  );

  app.delete(
    "/expenses/transactions/categories/:id",
    async (request, response) => {
      return deleteTransactionsCategoryController.handle(request, response);
    }
  );
}
