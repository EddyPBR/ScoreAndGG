import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import { UserService } from "./User.service";
import { ICreateUserResponseDTO } from "@score-and-gg/schemas/user/CreateUserResponseDTO.schema";
import {
  ICreateUserContract,
  CreateUserContract,
} from "@score-and-gg/schemas/user/CreateUserContract.schema";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(
    @Body() userData: ICreateUserContract,
  ): Promise<ICreateUserResponseDTO> {
    try {
      const validatedData = CreateUserContract.parse(userData);

      const newUser = await this.userService.createUser(validatedData);

      return {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
      };
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      throw new HttpException("Invalid user data", HttpStatus.BAD_REQUEST);
    }
  }
}
