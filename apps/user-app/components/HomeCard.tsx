"use client"
import Image from "next/image";
import { Card } from "@repo/ui/card"
import { useRouter } from "next/navigation"


export const HomeCard = () => {

    return <Card title="Features">
        <div>
            <div className="flex flex-row items-center justify-between">
                <span>● Transfer money from selected bank account:</span>
                <FeatureButton href="/transfer" src="/transfer-icon.svg" alt="Transfer-Icon" title="Transfer/Add" />
            </div>
            <div className="flex flex-row items-center justify-between">
                <span>● Check your recent transactions history:</span>
                <FeatureButton href="/transactions" src="/transactions-icon.svg" alt="Transactions-Icon" title="Transactions" />
            </div>
            <div className="flex flex-row items-center justify-between">
                <span>● Send money to a peer:</span>
                <FeatureButton href="/p2ptransfer" src="/p2p-transfer-icon.svg" alt="P2P-Transfer-Icon" title="P2P Transfer" />
            </div>
        </div>
    </Card>
}

type Props = {
    href: string;
    src: string;
    alt: string;
    title: string;
};

function FeatureButton({
    href,
    src,
    alt,
    title,
}: Props) {
    const router = useRouter();

    return <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-200" 
        onClick={() => {
            router.push(href)
        }}>
        <span className="flex items-center justify-center relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
            <Image src={src} alt={alt} height={25} width={25} className="text-gray-900 hover:text-white mr-2" />
            {title}
        </span>
    </button>
}
