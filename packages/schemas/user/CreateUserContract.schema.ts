import { z } from "zod";

export const CreateUserContract = z.object({
  name: z.string().min(3).max(32),
  email: z.string().email(),
  password: z.string().min(6).max(32),
});

export interface ICreateUserContract
  extends z.infer<typeof CreateUserContract> {}
