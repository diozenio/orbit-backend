import { FastifyReply, FastifyRequest } from "fastify";
import { UpdateTransactionsCategoryUseCase } from "./UpdateTransactionsCategoryUseCase";
import { updateTransactionsCategoryParams } from "./UpdateTransactionsCategoryParams";

class UpdateTransactionsCategoryController {
  async handle(request: FastifyRequest, response: FastifyReply) {
    try {
      const { id, name } = updateTransactionsCategoryParams.parse({
        ...(request.params as Record<string, unknown>),
        ...(request.body as Record<string, unknown>),
      });

      const updateTransactionsCategoryUseCase =
        new UpdateTransactionsCategoryUseCase();
      const transactionCategory =
        await updateTransactionsCategoryUseCase.execute({ id, name });
      return response.status(200).send(transactionCategory);
    } catch (error) {
      return response.code(400).send(error);
    }
  }
}

export { UpdateTransactionsCategoryController };
