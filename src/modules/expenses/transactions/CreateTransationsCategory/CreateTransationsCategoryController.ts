import { FastifyReply, FastifyRequest } from "fastify";
import { CreateTransationsCategoryUseCase } from "./CreateTransationsCategoryUseCase";
import { createTransactionCategoryParams } from "./CreateTransationsCategoryParams";

class CreateTransationsCategoryController {
  async handle(request: FastifyRequest, response: FastifyReply) {
    try {
      const { name } = createTransactionCategoryParams.parse(request.body);
      const createTransationsCategoryUseCase =
        new CreateTransationsCategoryUseCase();
      const transactionCategory =
        await createTransationsCategoryUseCase.execute({ name });
      return response.status(201).send(transactionCategory);
    } catch (error) {
      return response.code(400).send(error);
    }
  }
}

export { CreateTransationsCategoryController };
