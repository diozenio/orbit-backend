import { FastifyReply, FastifyRequest } from "fastify";
import { CreateTransactionsUseCase } from "./CreateTransactionsUseCase";
import { createTransactionsParams } from "./CreateTransactionsParams";

class CreateTransactionsController {
  async handle(request: FastifyRequest, response: FastifyReply) {
    try {
      const { transactions } = createTransactionsParams.parse(request.body);

      const createTransactionsUseCase = new CreateTransactionsUseCase();
      const createdTransactions = await createTransactionsUseCase.execute({
        transactions,
      });

      return response.status(201).send(createdTransactions);
    } catch (error) {
      return response.code(400).send(error);
    }
  }
}

export { CreateTransactionsController };
