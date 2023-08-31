import { z } from "zod";

export const CreateUserResponseDTO = z.object({
  id: z.string(),
  name: z.string().min(3).max(32),
  email: z.string().email(),
});

export interface ICreateUserResponseDTO
  extends z.infer<typeof CreateUserResponseDTO> {}
