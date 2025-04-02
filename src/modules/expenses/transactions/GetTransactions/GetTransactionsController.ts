import { FastifyRequest, FastifyReply } from "fastify";
import { GetTransactionsUseCase } from "./GetTransactionsUseCase";

class GetTransactionsController {
  async handle(_: FastifyRequest, response: FastifyReply) {
    try {
      const getTransactionsUseCase = new GetTransactionsUseCase();
      const transactions = await getTransactionsUseCase.execute();
      return response.status(200).send(transactions);
    } catch (error) {
      return response.code(400).send(error);
    }
  }
}

export { GetTransactionsController };
