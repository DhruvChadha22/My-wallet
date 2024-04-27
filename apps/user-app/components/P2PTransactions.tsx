import { Card } from "@repo/ui/card"

export const P2PTransactions = ({
    transactions
}: {
    transactions: {
        time: Date,
        amount: number,
        from: number
    }[]
}) => {
    if (!transactions.length) {
        return <Card title="Recent Transfers To You">
            <div className="text-center pb-8 pt-8">
                No Recent transfers to you
            </div>
        </Card>
    }
    return <Card title="Recent Transfers To You">
        <div className="pt-2">
            {transactions.map(t => <div className="flex justify-between">
                <div>
                    <div className="text-sm">
                        Received INR
                    </div>
                    <div className="text-slate-600 text-xs">
                        {t.time.toDateString()}
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    + Rs {t.amount / 100}
                </div>

            </div>)}
        </div>
    </Card>
}