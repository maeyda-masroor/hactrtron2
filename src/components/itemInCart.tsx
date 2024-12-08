import Image from "next/image";
interface Item {
    id: number;
    name: string;
    image:string;
    price:string
}
const DiscountAd: React.FC = () => {
    const items: Item[] = [
        { id: 1, name: "Item 1" ,image:'https://via.placeholder.com/150' ,price:'20'},
        { id: 2, name: "Item 2" ,image:"https://via.placeholder.com/150",price:'50'},
        { id: 3, name: "Item 3" ,image:"https://via.placeholder.com/150",price:'40'},
        { id: 4, name: "Item 4" ,image:"https://via.placeholder.com/150",price:'20'},
        { id: 5, name: "Item 5" ,image:"https://via.placeholder.com/150",price:'10'},
      ];
    return (
        <div>
        {items.map((item) => (
        <div
          key={item.id}
          className="p-4 mb-2 bg-blue-500 text-black rounded-md shadow"
        >
            <div className="flex gap-2">
            <div>
            <Image src={item.image} alt="c" width={64} height={71}/>
            </div>
            <div className="w-[200px] h-[33px]">
            <h1 className="text-sm">{item.name}</h1>
            <p className="text-sm">{item.price}</p>
            </div>            
            </div>
        </div>
      ))}
        </div>
    )
}

