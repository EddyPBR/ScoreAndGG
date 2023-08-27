import { Injectable, ConflictException } from "@nestjs/common";
import { PrismaService } from "../../common/prisma/prisma.service";
import type { ICreateUserContract } from "../../../../../shared/types/user/create-user.contract";
import { hashPassword, generateSalt } from "../../common/utils/hash.utils";
import { generateUUID } from "../../common/utils/uuid.utils";

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: ICreateUserContract) {
    const salt = generateSalt();
    const encryptedPassword = hashPassword(data.password, salt);
    const uuid = generateUUID();

    try {
      const user = await this.prisma.user.create({
        data: {
          id: uuid,
          name: data.name,
          email: data.email,
          password: encryptedPassword,
          salt,
        },
      });

      return user;
    } catch (error: any) {
      if (error.code === "P2002") {
        throw new ConflictException("Email already exists");
      }
      throw error;
    }
  }
}
