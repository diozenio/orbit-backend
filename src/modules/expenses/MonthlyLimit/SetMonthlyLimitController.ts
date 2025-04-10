import { FastifyRequest, FastifyReply } from "fastify";
import { SetMonthlyLimitUseCase } from "./SetMonthlyLimitUseCase";
import { setMonthlyLimitParams } from "./SetMonthlyLimitParams";

class SetMonthlyLimitController {
  async handle(request: FastifyRequest, response: FastifyReply) {
    try {
      const body = setMonthlyLimitParams.parse(request.body);
      const setMonthlyLimitUseCase = new SetMonthlyLimitUseCase();
      const result = await setMonthlyLimitUseCase.execute(body);

      return response.status(200).send(result);
    } catch (error) {
      return response.status(400).send({ error });
    }
  }
}

export { SetMonthlyLimitController };
