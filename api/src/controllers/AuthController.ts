import { User } from "@prisma/client";
import * as jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { prisma } from "../helpers/prisma";
import { checkIfUnencryptedPasswordIsValid, hashPassword } from "../entity/User";

export class AuthController {
    public static async login(req: Request, res: Response): Promise<void> {
        const { nickname, password } = req.body;
        if (!(nickname && password)) {
            res.status(400).end(JSON.stringify({ message: "Nicht alle Felder ausgefüllt!" }));
            return;
        }

        // Get user from database
        const user = await prisma.user.findUnique({
            where: {
                nickname: nickname,
            },
        });

        if (!user) {
            res.status(401).end(JSON.stringify({ message: "Falscher Nickname!" }));
            return;
        }
        if (!checkIfUnencryptedPasswordIsValid(password, user)) {
            res.status(401).end(JSON.stringify({ message: "Falsches Passwort!" }));
            return;
        }
        const token = AuthController.signToken(user);

        const response = {
            ...user,
            jwtToken: token,
        };

        // Send the jwt in the response
        res.send(response);
    }


    /**
     * creates the JWT with the JWT_SECRET and the user information
     */
    private static signToken(user: User) {
        return jwt.sign(
            {
                userId: user.nickname,
                isAdmin: user.isAdmin,
            },
            process.env.JWT_SECRET,
            { expiresIn: "1d" },   //should be changed if a method of renwing the token is added
        );
    }
}