import Image from "next/image";
import SponserImage from '../public/image 1174.png';
export default function Sponser(){
    return <div className="hidden lg:grid grid-cols-1 p-10 lg:pr-56 lg:pl-56">
            <Image src={SponserImage} alt="iamge" width={904} height={93} />
       </div>
}