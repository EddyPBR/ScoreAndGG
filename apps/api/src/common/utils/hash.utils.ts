import * as crypto from "crypto";

const HASH_ALGORITHM = "sha256";

export function hashPassword(password: string, salt: string): string {
  const hash = crypto.createHash(HASH_ALGORITHM);
  hash.update(password + salt);
  return hash.digest("hex");
}

export function generateSalt(): string {
  return crypto.randomBytes(16).toString("hex");
}
