import Image from "next/image";
import { SidebarItem } from "../../components/SidebarItem";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="flex">
        <div className="w-72 border-r border-slate-300 min-h-screen mr-4 pt-28">
            <div className="space-y-2">
                <SidebarItem href={"/dashboard"} icon={<Image src="/home-icon.svg" alt="Home-Icon" height={25} width={25} />} title="Home" />
                <SidebarItem href={"/transfer"} icon={<Image src="/transfer-icon.svg" alt="Transfer-Icon" height={25} width={25} />} title="Transfer" />
                <SidebarItem href={"/transactions"} icon={<Image src="/transactions-icon.svg" alt="Transactions-Icon" height={25} width={25} />} title="Transactions" />
                <SidebarItem href={"/p2ptransfer"} icon={<Image src="/p2p-transfer-icon.svg" alt="P2P-Transactions-Icon" height={25} width={25} />} title="P2P Transfer" />
            </div>
        </div>
        {children}
    </div>
  );
}
