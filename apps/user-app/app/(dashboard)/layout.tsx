import Image from "next/image";
import { SidebarItem } from "../../components/SidebarItem";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="flex flex-col">
        <div className="flex left-0 top-[57px] w-screen justify-center p-4 bg-[#ebe6e6] border-slate-300 border-y">
            <span className="text-sm">NOTE: This site is a clone website. It is not the real, official site. Its purpose is to look like the official site for portfolio purposes. This site is not for active use. Do NOT enter your credentials or share any personal information.</span>
        </div>
        <div className="flex">
            <div className="w-72 border-r border-slate-300 mr-4 pt-28 space-y-2">
                <SidebarItem href={"/dashboard"} icon={<Image src="/home-icon.svg" alt="Home-Icon" height={25} width={25} />} title="Home" />
                <SidebarItem href={"/transfer"} icon={<Image src="/transfer-icon.svg" alt="Transfer-Icon" height={25} width={25} />} title="Transfer" />
                <SidebarItem href={"/transactions"} icon={<Image src="/transactions-icon.svg" alt="Transactions-Icon" height={25} width={25} />} title="Transactions" />
                <SidebarItem href={"/p2ptransfer"} icon={<Image src="/p2p-transfer-icon.svg" alt="P2P-Transactions-Icon" height={25} width={25} />} title="P2P Transfer" />
            </div>
            {children}
        </div>
    </div>
  );
}
