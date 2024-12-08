export default function Navbar() {
    return (
      <nav className="bg-blue-500 p-4">
        <div
          className="
            grid 
            grid-cols-1 gap-4
            lg:grid-cols-2 lg:gap-8
          "
        >
          {/* First List */}
          <ul className="flex flex-row space-x-4 bg-blue-700 p-4 rounded-lg text-white">
            <li>List 1 - Item 1</li>
            <li>List 1 - Item 2</li>
            <li>List 1 - Item 3</li>
          </ul>
  
          {/* Second List */}
          <ul className="flex flex-row space-x-4 bg-blue-700 p-4 rounded-lg text-white">
            <li>List 2 - Item 1</li>
            <li>List 2 - Item 2</li>
            <li>List 2 - Item 3</li>
          </ul>
        </div>
      </nav>
    );
  }
  