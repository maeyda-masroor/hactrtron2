"use client"
import React, { useState } from "react";

type Product = {
  id: number;
  name: string;
  description: string;
  price: string;
};

const products: Product[] = [
  { id: 1, name: "Product 1", description: "Description for Product 1", price: "$20" },
  { id: 2, name: "Product 2", description: "Description for Product 2", price: "$30" },
  { id: 3, name: "Product 3", description: "Description for Product 3", price: "$40" },
  { id: 4, name: "Product 4", description: "Description for Product 4", price: "$50" },
  { id: 5, name: "Product 5", description: "Description for Product 5", price: "$60" },
  { id: 6, name: "Product 6", description: "Description for Product 6", price: "$70" },
];

const TabsWithProducts: React.FC = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <section className="space-y-4 pr-56 pl-56 pt-20">
        <div className="text-center">
        <h1 className="text-3xl font-semibold">Latest Products</h1>
      </div>  
      {/* Tab Links */}
      <div className="flex space-x-4 mb-6">
        <button
          className={`py-2 px-4 rounded-md text-lg ${activeTab === "tab1" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => handleTabClick("tab1")}
        >
          Tab 1
        </button>
        <button
          className={`py-2 px-4 rounded-md text-lg ${activeTab === "tab2" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => handleTabClick("tab2")}
        >
          Tab 2
        </button>
      </div>
      {/* Product Grid */}
      {activeTab === "tab1" && (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id} className="p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-blue-500 font-bold">{product.price}</p>
            </div>
          ))}
        </div>
      )}

      {activeTab === "tab2" && (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id} className="p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-blue-500 font-bold">{product.price}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default TabsWithProducts;
