import { FastifyReply, FastifyRequest } from "fastify";
import { CreateTransactionsCategoryUseCase } from "./CreateTransactionsCategoryUseCase";
import { createTransactionCategoryParams } from "./CreateTransactionsCategoryParams";

class CreateTransactionsCategoryController {
  async handle(request: FastifyRequest, response: FastifyReply) {
    try {
      const { name, icon } = createTransactionCategoryParams.parse(
        request.body
      );
      const createTransactionsCategoryUseCase =
        new CreateTransactionsCategoryUseCase();
      const transactionCategory =
        await createTransactionsCategoryUseCase.execute({ name, icon });
      return response.status(201).send(transactionCategory);
    } catch (error) {
      return response.code(400).send(error);
    }
  }
}

export { CreateTransactionsCategoryController };
