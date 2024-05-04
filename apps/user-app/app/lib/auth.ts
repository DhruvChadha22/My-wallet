import prisma from "@repo/db/client";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

export const authOptions = {
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                phone: { label: "Phone Number", type: "text", placeholder: "XXXXXXXXXX" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials: any) {
                const hashedPassword = await bcrypt.hash(credentials.password, 10);
                const existingUser = await prisma.user.findFirst({
                    where: {
                        number: credentials.phone
                    }
                });

                if (existingUser) {
                    const passwordValidation = await bcrypt.compare(credentials.password, existingUser.password);

                    if (passwordValidation) {
                        return {
                            id: existingUser.id.toString(),
                            name: existingUser.name,
                            phone: existingUser.number
                        }
                    }

                    return null;
                }

                try {
                    await prisma.$transaction(async (tx) => {
                        const user = await prisma.user.create({
                            data: {
                                number: credentials.phone,
                                password: hashedPassword
                            }
                        });

                        await prisma.balance.create({
                            data: {
                                userId: user.id,
                                amount: 0,
                                locked: 0
                            }
                        });
                    
                        return {
                            id: user.id.toString(),
                            name: user.name,
                            phone: user.number
                        }
                    });
                }
                catch(e) {
                    console.error(e);
                }

                return null;
            }
        })    
    ],
    secret: process.env.JWT_SECRET,
    callbacks: {
        async session({ token, session }: any) {
            session.user.id = token.sub;

            return session;
        }
    }
}
