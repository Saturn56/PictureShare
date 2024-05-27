import { User } from "@prisma/client";
import bcrypt from "bcrypt";

export type ExtendedUser = User &{
    jwtToken?: string;

    place?: number;

}

export function hashPassword(password: string): string {
    return bcrypt.hashSync(password, 8);
}

export function checkIfUnencryptedPasswordIsValid(
    unencryptedPassword: string,
    user: User,
): boolean {
    if (unencryptedPassword) {
        return bcrypt.compareSync(unencryptedPassword, user.password);
    }
    return false;
}