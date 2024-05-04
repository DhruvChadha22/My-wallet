"use server";

import prisma from "@repo/db/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import axios from "axios";

export async function createOnRampTransaction(provider: string, amount: number) {
    const session = await getServerSession(authOptions);
    if (!session?.user || !session.user?.id) {
        return {
            message: "Unauthenticated request"
        }
    }
    const token = (Math.random() * 1000).toString();

    await prisma.$transaction(async (tx) => {
        await tx.onRampTransaction.create({
            data: {
                provider,
                status: "Processing",
                startTime: new Date(),
                token: token,
                userId: Number(session?.user?.id),
                amount: amount * 100
            }
        });

        await tx.balance.update({
            where: {
                userId: Number(session?.user?.id)
            },
            data: {
                locked: {
                    increment: amount * 100
                }
            }
        })
    });

    await axios.post("http://127.0.0.1:3003/bankWebhook", {
        token: token,
        user_identifier: Number(session?.user?.id),
        amount: String(amount * 100)
    });

    return {
        message: "Captured"
    }
}
