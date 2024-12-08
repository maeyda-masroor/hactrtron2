// /data/dummyData.ts

type Product = {
    id: string;
    name: string;
    description: string;
    price: number;
    status?: string;
    image:string;
    discount:number;
    rating:number;
    additional_info:string,
    review:string,
    video:string,
  };
  
  type Category = {
    id: string;
    name: string;
    products: Product[];
    image:string

  };
  
  const dummyData = {
    categories: [
      {
        id: "1",
        name: "Electronics",
        image:'https://via.placeholder.com/150',
        price:30,
        products: [
          {
            id: "101",
            name: "Smartphone",
            description: "A high-end smartphone with 128GB storage.",
            price: 699,
            status: "onsale",
            rating:2,
            discount:23.00,
            image:"https://via.placeholder.com/150",

          },
          {
            id: "102",
            name: "Laptop",
            description: "A powerful laptop with 16GB RAM.",
            price: 999,
            rating:1,
            discount:23.00,
            image:"https://via.placeholder.com/150",

          },
        ],
      },
      {
        id: "2",
        name: "Clothing",
        image:"https://via.placeholder.com/150",
        price:40,
        products: [
          {
            id: "201",
            name: "T-shirt",
            description: "A comfortable cotton T-shirt.",
            price: 25,
            status: "thismonth",
            discount:26.00,
            rating:4,
            image:"https://via.placeholder.com/150",

          },
          {
            id: "202",
            name: "Jeans",
            description: "Stylish slim-fit jeans.",
            price: 50,
            discount:45.00,
            rating:5,
            image:"https://via.placeholder.com/150",
          },
        ],
      },
    ],
  };
  
  export type { Product, Category };
  export default dummyData;
  