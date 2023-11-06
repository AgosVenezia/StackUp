import { Header } from "@/components/Header"
import { Swap } from "@/components/Swap"
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Header />
      <div id="logo">
        <Image src="/logo.png" alt="Logo" width={150} height={150} />
        <h1>MetaSwap</h1>
      </div>
      <div id="swapcom">
      <Swap />
      </div>
    </div>
  );
}