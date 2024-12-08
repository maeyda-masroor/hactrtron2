import Link from "next/link";
interface Item {
    id: number;
    name: string;
    image:string;
    quantity:number;
    total:number
    price:string;
}
const items: Item[] = [
    { id: 1, name: "Item 1" ,image:'https://via.placeholder.com/150' ,price:'20' ,quantity:12,total:12},
    { id: 2, name: "Item 2" ,image:"https://via.placeholder.com/150",price:'50',quantity:12,total:12},
    { id: 3, name: "Item 3" ,image:"https://via.placeholder.com/150",price:'40',quantity:12,total:13},
    { id: 4, name: "Item 4" ,image:"https://via.placeholder.com/150",price:'20',quantity:12,total:15},
    { id: 5, name: "Item 5" ,image:"https://via.placeholder.com/150",price:'10',quantity:12,total:15},
  ];

export default function ResponsiveGrid() {
    return (
        <div className="lg:pl-45 lg:pr-45"> 
        <div className="mx-auto w-full  bg-lightpurple">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4   p-10">
          <nav className="text-sm">
          <h1 className="text-6xl text-black">Shopping Cart</h1>
            <ol className="flex space-x-2">
              <li>
                <Link href="/" className="text-blue-500 hover:text-blue-700">Home</Link>
              </li>
              <li className="text-gray-500">.</li>
              <li>
                <Link href="#" className="text-blue-500 hover:text-blue-700">Cart</Link>
              </li>
            </ol>
          </nav>
        </div> 
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 min-h-screen p-4 mt-10 lg:pl-65 lg:pr-65">
      {/* First Div */}
      <div className="col-span-1 sm:col-span-1 lg:col-span-3  p-20 text-black">
      <div className="overflow-x-auto">
      <table className="min-w-full  text-sm text-left text-gray-500">
        {/* Table Header */}
        <thead className="bg-gray-50 text-gray-700 text-xs uppercase">
          <tr>
            <th scope="col" className="px-4 py-2 border-b">Product</th>
            <th scope="col" className="px-4 py-2 border-b">Price</th>
            <th scope="col" className="px-4 py-2 border-b">Quantity</th>
            <th scope="col" className="px-4 py-2 border-b">Total</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {items.map((row, index) => (
            <tr key={index} className="mt-10">
              <td className="px-4 py-2 border-b">{row.name}</td>
              <td className="px-4 py-2 border-b">{row.price}</td>
              <td className="px-4 py-2 border-b">{row.quantity}</td>
              <td className="px-4 py-2 border-b">{row.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    <div className="flex gap-60 mt-10">
    <button 
        type="submit" 
        className="px-6 py-2 bg-pink text-black rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Update cart
      </button>
      <button 
        type="submit" 
        className="px-6 py-2 bg-pink text-black rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Clear Cart
      </button>
    </div>
    </div>
      </div>

      {/* Second Div */}
      <div className="col-span-1 sm:col-span-1 lg:col-span-2 bg-green-500 p-4 text-black">
      
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
        className="mt-10 px-6 py-2 bg-green text-black rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Proceed to Checkout
      </button>
        </div>
        <br/>

        <div className="bg-lightpurple p-10">
            <h1 className="text-black">Calculate Shipping</h1>
            <div>
        <input
          type="text"
          placeholder="Bangladesh"
          className="border-b-2 border-gray-500 bg-transparent focus:outline-none focus:border-blue-500 w-full" 
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Mirpus khas"
          className="border-b-2 border-gray-500 bg-transparent focus:outline-none focus:border-blue-500 w-full" 
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Postal code"
          className="border-b-2 border-gray-500 bg-transparent focus:outline-none focus:border-blue-500 w-full" 
        />
      </div>
         <button 
        type="submit" 
        className="px-6 py-2 bg-pink text-black rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-10"
      >
        Calculate Shipping
      </button>
        </div>
      </div>
    </div>
        </div>
    );
  }
  