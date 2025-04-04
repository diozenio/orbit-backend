import { FastifyReply, FastifyRequest } from "fastify";
import { UpdateTransactionUseCase } from "./UpdateTransactionUseCase";
import { updateTransactionParams } from "./UpdateTransactionParams";

class UpdateTransactionController {
  async handle(request: FastifyRequest, response: FastifyReply) {
    try {
      const { id, title, amount, transactionCategoryId, type } =
        updateTransactionParams.parse({
          ...(request.params as Record<string, unknown>),
          ...(request.body as Record<string, unknown>),
        });

      const updateTransactionUseCase = new UpdateTransactionUseCase();
      const transaction = await updateTransactionUseCase.execute({
        id,
        title,
        amount,
        transactionCategoryId,
        type,
      });
      return response.status(200).send(transaction);
    } catch (error) {
      return response.code(400).send(error);
    }
  }
}

export { UpdateTransactionController };
