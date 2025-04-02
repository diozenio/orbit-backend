import { FastifyRequest, FastifyReply } from "fastify";
import { GetTransactionsCategoriesUseCase } from "./GetTransactionsCategoriesUseCase";

class GetTransactionsCategoriesController {
  async handle(_: FastifyRequest, response: FastifyReply) {
    try {
      const getTransactionsCategoriesUseCase =
        new GetTransactionsCategoriesUseCase();

      const transactionsCategories =
        await getTransactionsCategoriesUseCase.execute();

      return response.status(200).send(transactionsCategories);
    } catch (error) {
      return response.code(400).send(error);
    }
  }
}

export { GetTransactionsCategoriesController };
