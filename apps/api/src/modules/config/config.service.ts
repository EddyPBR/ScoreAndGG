import { Injectable } from "@nestjs/common";
import {
  ApiEnvSchema,
  IApiEnvSchema,
} from "@score-and-gg/schemas/env/api-env.schema";

@Injectable()
export class ConfigService {
  private readonly envVars: IApiEnvSchema;

  constructor() {
    const validatedEnv = ApiEnvSchema.safeParse(process.env);

    if (!validatedEnv.success) {
      console.error("Invalid environment variables");
      process.exit(1);
    }

    this.envVars = validatedEnv.data;
  }

  getEnvVars(): IApiEnvSchema {
    return this.envVars;
  }
}
