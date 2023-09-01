import dotenv from "dotenv";

import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ConfigService } from "./modules/config/config.service";

async function bootstrap() {
  dotenv.config({ path: ".env.development" });

  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  const { API_PORT } = configService.getEnvVars();

  await app.listen(API_PORT);
}

bootstrap();
