import Link from "next/link";
import Image from "next/image";
interface Item {
    id: number;
    name: string;
    image:string;
    color:string;
    price:string;
    size:string
}
export default function Cart(){
    const items: Item[] = [
        { id: 1, name: "Item 1" ,image:'https://via.placeholder.com/150' ,price:'20' ,color:'brown',size:'XL'},
        { id: 2, name: "Item 2" ,image:"https://via.placeholder.com/150",price:'50',color:'brown',size:'XL'},
        { id: 3, name: "Item 3" ,image:"https://via.placeholder.com/150",price:'40',color:'brown',size:'XL'},
        { id: 4, name: "Item 4" ,image:"https://via.placeholder.com/150",price:'20',color:'brown',size:'XL'},
        { id: 5, name: "Item 5" ,image:"https://via.placeholder.com/150",price:'10',color:'brown',size:'XL'},
      ];
   
    return <div className="lg:pl-45 lg:pr-45"> 
    <div className="mx-auto w-full  bg-lightpurple">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4   p-10">
      <nav className="text-sm">
      <h1 className="text-6xl text-black">Hackto Demo</h1>
        <ol className="flex space-x-2">
          <li>
            <Link href="/" className="text-blue-500 hover:text-blue-700">Home</Link>
          </li>
          <li className="text-gray-500">.</li>
          <li>
            <Link href="#" className="text-blue-500 hover:text-blue-700">My Cart</Link>
          </li>
        </ol>
      </nav>
    </div> 
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 min-h-screen lg:pl-36 lg:pr-36 mt-10">
      {/* First Div */}
      <div className="col-span-1 sm:col-span-1 lg:col-span-3 bg-blue-500 p-4 bg-lightpurple">
        <div className="flex gap-56">
            <h3 className="text-black justify-start">Contact information</h3>
            <h3 className="text-black justify-end">Already have an account?<Link href='/account'>,Login</Link></h3>
        </div>
        <div className="mt-10 text-black">
        <input 
            type="text" 
            className="border-b-2 border-gray-500 bg-transparent focus:outline-none focus:border-blue-500 w-full" 
            placeholder="Email or mobile phone number"
            />
        <br/>
        <br/>
        <label className="flex items-center space-x-2">
        {/* Checkbox */}
        <input
            type="checkbox"
            className="peer hidden"
            id="customCheckbox"
        />
        
        {/* Custom Checkbox Design */}
        <span className="w-5 h-5 border-2 border-gray-300 rounded-md flex items-center justify-center peer-checked:bg-green-500 peer-checked:border-green-500 transition duration-300">
            <svg
            className="w-3 h-3 text-white hidden peer-checked:block"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
            </svg>
        </span>
        
  {/* Label Text */}
        <span className="text-gray-700">Keep me up to date on news and excluive offers</span>
        </label>
        </div>
        <div>
        <br/>
        <h1 className="text-black text-sm">Shipping Address</h1>    
        <form className="space-y-4 p-4">
      {/* First Row: 2 inputs in line */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="First name (optional)"
          className="border-b-2 border-gray-500 bg-transparent focus:outline-none focus:border-blue-500 w-full" 
          
        />
        <input
          type="text"
          placeholder="last name"
          className="border-b-2 border-gray-500 bg-transparent focus:outline-none focus:border-blue-500 w-full" 
          
        />
      </div>

      {/* Second Row: 1 full-width input */}
      <div>
        <input
          type="text"
          placeholder="Address"
          className="border-b-2 border-gray-500 bg-transparent focus:outline-none focus:border-blue-500 w-full" 
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Appaetnentment,suit,e.t.c (optinal)"
          className="border-b-2 border-gray-500 bg-transparent focus:outline-none focus:border-blue-500 w-full" 
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="City"
          className="border-b-2 border-gray-500 bg-transparent focus:outline-none focus:border-blue-500 w-full" 
        />
      </div>

      {/* Third Row: 2 inputs in line */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Bangladesh"
          className="border-b-2 border-gray-500 bg-transparent focus:outline-none focus:border-blue-500 w-full" 
          
        />
        <input
          type="text"
          placeholder="Postal Code"
          className="border-b-2 border-gray-500 bg-transparent focus:outline-none focus:border-blue-500 w-full" 
          
         />
      </div>
      <div className="flex justify-start">
      <button 
        type="submit" 
        className="px-6 py-2 bg-pink text-black rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Send
      </button>
    </div>
      {/* Fourth Row: 2 inputs in line */}
    </form>

        </div>
        </div>

      {/* Second Div */}
      <div className="col-span-1 sm:col-span-1 lg:col-span-2 bg-green-500 p-4">
        <div>
        {items.slice(0, 4).map((item) => (
        <div
          key={item.id}
          className="p-4 mb-2 bg-blue-500 text-black rounded-md shadow"
        >
            <div className="flex gap-2">
            <div>
            <Image src={item.image} alt="c" width={64} height={71}/>
            </div>
            <div className="w-[200px] h-[33px]">
            <h1 className="text-sm font-extrabold">{item.name}</h1>
            <p className="text-sm">{item.color}</p>
            <p className="text-sm">{item.size}</p>
            </div> 
            <div className="text-sm">{item.price}</div>           
            </div>
        </div>
      ))}
        </div>
        <div className="bg-lightpurple p-10">
            <div className="flex gap-56 mt-10">
                <h1 className="text-sm font-extrabold">Sub Total</h1>
                <h1 className="text-sm font-extrabold">£219.00</h1>
            </div>
            <hr/>
            <div className="flex gap-64 mt-10">
                <h1 className="text-sm font-extrabold">Total</h1>
                <h1 className="text-sm font-extrabold">£219.00</h1>
            </div>
            <hr/>
            <label className="flex items-center space-x-2 mt-10">
        {/* Checkbox */}
        <input
            type="checkbox"
            className="peer hidden"
            id="customCheckbox"
        />
        
        {/* Custom Checkbox Design */}
        <span className="w-5 h-5 border-2 border-gray-300 rounded-md flex items-center justify-center peer-checked:bg-green-500 peer-checked:border-green-500 transition duration-300">
            <svg
            className="w-3 h-3 text-white hidden peer-checked:block"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
            </svg>
        </span>
        
  {/* Label Text */}
        <span className="text-gray-700">Keep me up to date on news and excluive offers</span>
        </label>

         <button 
        type="submit" 
        className="px-6 py-2 bg-green text-black rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Proceed to Checkout
      </button>
        </div>
     </div>
    </div>
    </div>

}