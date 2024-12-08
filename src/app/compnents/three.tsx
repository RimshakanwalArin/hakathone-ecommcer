
// In your component

import React from "react";

import { ReactNode } from "react";
import Image from "next/image";
import { TiShoppingCart } from "react-icons/ti";
import Link from "next/link";

export interface carde {
  id: number;
  title: string;
  icon: ReactNode;
  imgurl: string;
  price:string;
}

export const carder: carde[] = [
  {
    id: 1,
    title: "Phone",
    icon: <TiShoppingCart />,
    imgurl: "/01.jpg",
    price: "$100",
  },
  {
    id: 2,
    title: "Email",
    icon: <TiShoppingCart/>,
    imgurl: "/02.jpg",
    price: "$150",
  },
  {
    id: 3,
    title: "Location",
    icon: <TiShoppingCart />,
    imgurl: "/03.jpg",
    price: "$120",
  },
  {
    id: 4,
    title: "Profile",
    icon: <TiShoppingCart  />,
    imgurl: "/04.jpg",
    price: "$180",
  },
  
];

const HeroSectionThree  = () => {
  return (
    <div> 
        <h3 className="text-black font-bold m-28 mb-20">Feather Product</h3>
        

    <div className="flex flex-wrap gap-5 m-44 mt-0 hover:border border-solid">
        {carder.map((item) => (
            <div key={item.id} >
              <Link href={`/${item.id}`}>
            <Image className="flex w-[182px] h-[182px] rounded-lg  hover:border-blue-400" 
            src={item.imgurl} alt={item.title} width={200} height={200}/>
              
              <p>{item.title}</p>
              <Link href={'/card'}  className="flex justify-between">{item.price}  {item.icon}</Link>
              </Link>
              <p></p>
            </div>
          
        ))}
      </div>
        </div>
  );
};

export default HeroSectionThree;