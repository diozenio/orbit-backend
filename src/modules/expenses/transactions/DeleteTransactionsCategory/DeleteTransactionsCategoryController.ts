import { FastifyReply, FastifyRequest } from "fastify";
import { deleteTransactionsCategoryParams } from "./DeleteTransactionsCategoryParams";
import { DeleteTransactionsCategoryUseCase } from "./DeleteTransactionsCategoryUseCase";

class DeleteTransactionsCategoryController {
  async handle(request: FastifyRequest, response: FastifyReply) {
    try {
      const { id } = deleteTransactionsCategoryParams.parse(request.params);

      const deleteTransactionsCategoryUseCase =
        new DeleteTransactionsCategoryUseCase();
      await deleteTransactionsCategoryUseCase.execute({ id });

      return response.status(204).send();
    } catch (error) {
      return response.code(400).send(error);
    }
  }
}

export { DeleteTransactionsCategoryController };
