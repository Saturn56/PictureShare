import { hashPassword } from "../src/entity/User";
import { prisma } from "../src/helpers/prisma";


(async () => {
    await prisma.user.create({
        data: {
            nickname: "admin",
            password: hashPassword("admin"),
            isAdmin: true,
        },
    });
})();