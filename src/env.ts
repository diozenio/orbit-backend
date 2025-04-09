import { z } from "zod";
import dotenv from "dotenv";

dotenv.config();

const envSchema = z.object({
  PORT: z.coerce.number().default(8080),
  NODE_ENV: z.string(),
  DATABASE_URL: z.string().url(),
});

export const env = envSchema.parse(process.env);
