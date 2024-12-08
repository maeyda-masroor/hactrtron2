import Image from "next/image";
import notfound1 from '../../public/404.png';
import Sponser from "@/components/Sponser";
import Link from "next/link";
export default function notfound(){
    return <div className="lg:pl-56 lg:pr-56"> 
    <div className="mx-auto w-full  bg-lightpurple">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4   p-2">
      <nav className="text-sm">
      <h1 className="text-6xl text-black">FAQ</h1>
        <ol className="flex space-x-2">
          <li>
            <Link href="/" className="text-blue-500 hover:text-blue-700">Home</Link>
          </li>
          <li className="text-gray-500">.</li>
          <li>
            <Link href="#" className="text-blue-500 hover:text-blue-700">About</Link>
          </li>
        </ol>
      </nav>
    </div>
    </div>
    <div className="grid place-items-center lg:place-items-center xl:place-items-center 2xl:place-items-center sm:m-0 md:m-0 sm:p-0 md:p-0">
     <center><Image src={notfound1} alt="x" width={913} height={526.6}/></center>
     <p className="text-2xl">Oops!page you are searching for is not found!</p>
     <Link href='/'><button className="w-[165px] h-[44px] bg-pink">
        Back to Home
     </button></Link>
     <br/>
     <Sponser/>
     </div>
     </div>
  
}