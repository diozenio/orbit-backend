import { FastifyRequest, FastifyReply } from "fastify";
import { GetExpensesUseCase } from "./GetExpensesUseCase";
import { getExpensesParams } from "./GetExpensesParams";

class GetExpensesController {
  async handle(request: FastifyRequest, response: FastifyReply) {
    try {
      const { month, year } = getExpensesParams.parse(request.query);
      const getExpensesUseCase = new GetExpensesUseCase();
      const data = await getExpensesUseCase.execute({ month, year });
      return response.status(200).send(data);
    } catch (error) {
      return response.code(400).send(error);
    }
  }
}

export { GetExpensesController };
