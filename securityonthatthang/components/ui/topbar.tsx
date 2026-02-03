import Image from "next/image";
import Link from "next/link";

export default function Navbar(){
    return <nav>
        <div className="bg-black/75 p-5 flex justify-center items-center gap-10">
            <Link href={"https://ironlung.com/"}><Image src={"/ironlung.png"} height={150} width={150} alt="Iron Lung"></Image></Link>
            <h1 className="text-red-800 text-lg sm:text-2xl font-bold text-shadow-xs text-shadow-red-600">Bare på Kino den 30. Januar</h1>
        </div>
    </nav>
}