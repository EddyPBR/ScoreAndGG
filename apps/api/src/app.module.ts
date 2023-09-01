import { Module } from "@nestjs/common";
import { ConfigModule } from "./modules/config/config.module";
import { UserModule } from "./modules/user/user.module";

@Module({
  imports: [ConfigModule, UserModule],
})
export class AppModule {}
