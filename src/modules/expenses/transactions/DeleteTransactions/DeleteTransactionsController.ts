import { FastifyReply, FastifyRequest } from "fastify";
import { deleteTransactionsParams } from "./DeleteTransactionsParams";
import { DeleteTransactionsUseCase } from "./DeleteTransactionsUseCase";

class DeleteTransactionsController {
  async handle(request: FastifyRequest, response: FastifyReply) {
    try {
      const { transactionsIds } = deleteTransactionsParams.parse(request.body);
      const deleteTransactionsUseCase = new DeleteTransactionsUseCase();
      const deletedTransactions = await deleteTransactionsUseCase.execute({
        transactionsIds,
      });

      if (!deletedTransactions.count || deletedTransactions.count === 0) {
        return response.status(404).send({
          message: "No transactions found to delete",
        });
      }

      return response.status(200).send({
        message: `${deletedTransactions.count} transactions deleted successfully`,
      });
    } catch (error) {
      return response.code(400).send(error);
    }
  }
}

export { DeleteTransactionsController };
