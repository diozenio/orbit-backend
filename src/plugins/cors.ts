import { FastifyInstance } from "fastify";
import cors from "@fastify/cors";

export default async function corsPlugin(app: FastifyInstance): Promise<void> {
  await app.register(cors, {
    origin: (origin, cb) => {
      const allowedOrigins = ["http://localhost:3000"];

      // Permite requisições sem origin (ex: curl, SSR)
      if (!origin) return cb(null, true);

      if (allowedOrigins.includes(origin)) {
        cb(null, true);
      } else {
        cb(new Error("Not allowed by CORS"), false);
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  });
}
