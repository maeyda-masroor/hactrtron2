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
        name: "Mini CVC Chairs",
        image:'https://res.cloudinary.com/di1kessdw/image/upload/v1734612322/Ecommerce/categories/image_1168_k7qgi2.png',
        price:30,
        products: [
          {
            id: "101",
            name: "Marget sagatis",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
            price: 699,
            status: "onsale",
            rating:2,
            discount:23.00,
            image:"https://res.cloudinary.com/di1kessdw/image/upload/v1734660436/Ecommerce/products/Rectangle_32_4_pvwnwm.png",

          },
          {
            id: "102",
            name: "Ni various",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
            price: 999,
            rating:1,
            discount:23.00,
            image:"https://res.cloudinary.com/di1kessdw/image/upload/v1734660435/Ecommerce/products/Rectangle_32_6_vzwvzm.png",

          },
        ],
      },
      {
        id: "2",
        name: "Mini C",
        image:"https://res.cloudinary.com/di1kessdw/image/upload/v1734612305/Ecommerce/categories/image_1171_wjixfu.png",
        price:40,
        products: [
          {
            id: "201",
            name: "Dicum morge",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
            price: 25,
            status: "thismonth",
            discount:26.00,
            rating:4,
            image:"https://res.cloudinary.com/di1kessdw/image/upload/v1734660435/Ecommerce/products/Rectangle_32_5_jgibzy.png",

          },
          {
            id: "202",
            name: "Pattriocum",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
            price: 50,
            discount:45.00,
            rating:5,
            image:"https://res.cloudinary.com/di1kessdw/image/upload/v1734660435/Ecommerce/products/Rectangle_32_vtshgd.png",
          },
        ],
      },
      {
        id: "2",
        name: "Mini C",
        image:"https://res.cloudinary.com/di1kessdw/image/upload/v1734612305/Ecommerce/categories/image_1171_wjixfu.png",
        price:40,
        products: [
          {
            id: "201",
            name: "Accumson llc",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
            price: 25,
            status: "thismonth",
            discount:26.00,
            rating:4,
            image:"https://res.cloudinary.com/di1kessdw/image/upload/v1734660435/Ecommerce/products/Rectangle_32_2_xn3ssd.png",

          },
          {
            id: "202",
            name: "Nunc",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
            price: 50,
            discount:45.00,
            rating:5,
            image:"https://res.cloudinary.com/di1kessdw/image/upload/v1734660435/Ecommerce/products/Rectangle_32_3_dygi3h.png",
          },
        ],
      },
      {
        id: "2",
        name: "Mini C",
        image:"https://res.cloudinary.com/di1kessdw/image/upload/v1734612287/Ecommerce/categories/image_20_xpddo5.png",
        price:40,
        products: [
          {
            id: "201",
            name: "In mulla",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
            price: 25,
            status: "thismonth",
            discount:26.00,
            rating:4,
            image:"https://res.cloudinary.com/di1kessdw/image/upload/v1734660435/Ecommerce/products/Rectangle_32_1_qtq8bf.png",

          },
          {
            id: "202",
            name: "Vel Seem",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.",
            price: 50,
            discount:45.00,
            rating:5,
            image:"https://res.cloudinary.com/di1kessdw/image/upload/v1734660435/Ecommerce/products/Rectangle_32_1_qtq8bf.png",
          },
        ],
      },
    ],
  };
  
  export type { Product, Category };
  export default dummyData;
  