import { z } from "zod";

export const UserCreateContract = z.object({
  name: z.string().min(3).max(32),
  email: z.string().email(),
  password: z.string().min(6).max(32),
});

export type IUserCreateContract = z.infer<typeof UserCreateContract>;
