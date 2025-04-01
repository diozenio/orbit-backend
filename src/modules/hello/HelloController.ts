import { FastifyRequest, FastifyReply } from "fastify";
import { HelloUseCase } from "./HelloUseCase";

class HelloController {
  async handle(_: FastifyRequest, response: FastifyReply) {
    try {
      const helloUseCase = new HelloUseCase();
      const hello = await helloUseCase.execute();
      return response.status(200).send(hello);
    } catch (error) {
      return response.code(400).send("Failed to fetch tasks data");
    }
  }
}

export { HelloController };
