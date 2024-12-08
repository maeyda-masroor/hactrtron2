export default function HeroSection() {
    return (
      <section
        className="
          hidden 
          lg:grid 
          grid-cols-3 
          gap-4 
          p-8 
          bg-gray-100
        "
      >
        {/* Column 1 */}
        <div className="bg-blue-500 text-white p-6 rounded-lg text-center">
          <h2 className="text-xl font-bold">Column 1</h2>
          <p>This is the content for column 1.</p>
        </div>
  
        {/* Column 2 */}
        <div className="bg-green-500 text-white p-6 rounded-lg text-center">
          <h2 className="text-xl font-bold">Column 2</h2>
          <p>This is the content for column 2.</p>
        </div>
  
        {/* Column 3 */}
        <div className="bg-red-500 text-white p-6 rounded-lg text-center">
          <h2 className="text-xl font-bold">Column 3</h2>
          <p>This is the content for column 3.</p>
        </div>
      </section>
    );
  }
  