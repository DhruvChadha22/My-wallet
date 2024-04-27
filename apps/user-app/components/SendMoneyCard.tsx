"use client";

import { TextInput } from "@repo/ui/TextInput";
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { useState } from "react";
import { p2pTransfer } from "../app/lib/action/p2pTransfer";

export const SendMoney = () => {
    const [number, setNumber] = useState("");
    const [amount, setAmount] = useState(0);

    return <Card title="Send Money" >
        <TextInput placeholder="XXXXXXXXXX" label="Phone No." onChange={(val) => {
            setNumber(val);
        }} />
        <TextInput placeholder="Amount" label="Amount" onChange={(val) => {
            setAmount(Number(val));
        }} />
        
        <div className="flex justify-center pt-4">
            <Button onClick={async () => {
                await p2pTransfer(number, amount * 100);
            }}>Send Money</Button>
        </div>
    </Card>
}
