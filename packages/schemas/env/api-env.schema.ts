import { z } from "zod";

export const ApiEnvSchema = z.object({
  API_PORT: z.number().int().gt(0),
  DATABASE_URL: z.string(),
});

export interface IApiEnvSchema extends z.infer<typeof ApiEnvSchema> {}
