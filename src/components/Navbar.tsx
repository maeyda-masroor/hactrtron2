import Link from "next/link";
import Image from "next/image";
import SEARCH from '../public/uil_envelope-alt.png';
export default function Navbar() {
    return (
      <nav className="bg-white lg:pl-56 lg:pr-56 p-4">
        <div
          className="
            grid
            grid-cols-1 gap-4
            lg:grid-cols-3 lg:items-center
          "
        >
          {/* Logo */}
          <div className="logo text-black text-2xl font-bold lg:justify-self-start">
            <Link href="/">Hekto</Link>
          </div>
  
          {/* Middle List */}
          <ul className="flex flex-col items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0 lg:space-x-6 text-black">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/product">Product</Link></li>
            <li><Link href="/blog">BLog</Link></li>
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
          {/* Search Bar */}
          <div className="search-bar flex justify-center lg:justify-end">
            <input
              type="text"
              placeholder="Search..."
              className="p-2 rounded-md text-black w-full lg:w-1/2 border-2 border-gray-300"
            />
          </div>
        </div>
      </nav>
    );
  }
  