import Image from "next/image";
import notfound1 from '../../public/Vector 15.png';
import Sponser from "@/components/Sponser";
import Link from "next/link";
export default function notfound(){
    return <div className="lg:pl-56 lg:pr-56"> 
    <div className="mx-auto w-full  bg-lightpurple">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4   p-2">
      <nav className="text-sm">
      <h1 className="text-6xl text-black">order Completed!</h1>
        <ol className="flex space-x-2">
          <li>
            <Link href="/" className="text-blue-500 hover:text-blue-700">Home</Link>
          </li>
          <li className="text-gray-500">.</li>
          <li>
            <Link href="#" className="text-blue-500 hover:text-blue-700">order completed</Link>
          </li>
        </ol>
      </nav>
    </div>
    </div>
    <div className="grid place-items-center lg:place-items-center xl:place-items-center 2xl:place-items-center sm:m-0 md:m-0 sm:p-0 md:p-0 mt-10">
     <center><Image src={notfound1} alt="x" width={50} height={50}/></center>
     <h1 className="text-6xl text-center">Your Order is completed</h1>
     <p className="text-2xl text-center">Thank you for your order! Your order is being processed and will be completed within 3-6
hours. You will receive an email confirmation when your order is completed.
</p>
     <Link href='/'><button className="w-[165px] h-[44px] bg-pink">
        Continue Shopping
     </button></Link>
     <br/>
     <Sponser/>
     </div>
     </div>
  
}