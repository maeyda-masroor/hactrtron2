export default function Navbar() {
    return (
      <nav className="bg-blue-500 p-4">
        <div
          className="
            grid
            grid-cols-1 gap-4
            lg:grid-cols-3 lg:items-center
          "
        >
          {/* Logo */}
          <div className="logo text-white text-lg font-bold lg:justify-self-start">
            <a href="#">Logo</a>
          </div>
  
          {/* Middle List */}
          <ul className="flex flex-col items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0 lg:space-x-6 text-white">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
  
          {/* Search Bar */}
          <div className="search-bar flex justify-center lg:justify-end">
            <input
              type="text"
              placeholder="Search..."
              className="p-2 rounded-md text-black w-full lg:w-1/2"
            />
          </div>
        </div>
      </nav>
    );
  }
  