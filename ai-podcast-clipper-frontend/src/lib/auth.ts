import { hash, compare } from "bcryptjs";

export async function hashPassword(password: string) {
    return hash(password, 12);
}

export async function comparePasswords(plainPassword: string, hashPassword: string) {
    return compare(plainPassword, hashPassword);
}