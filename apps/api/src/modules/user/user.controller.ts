import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { ICreateUserResponseDTO } from "../../../../../shared/types/user/create-user-response.dto";
import {
  ICreateUserContract,
  CreateUserContract,
} from "../../../../../shared/types/user/create-user.contract";

@Controller("user")
export class UsersController {
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
