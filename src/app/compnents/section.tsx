import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Logo {
  id: number;
  imgurl: string;
  title: string;
}

const HeroSectionTwo: React.FC = () => {
  const logos: Logo[] = [
    { id: 1, imgurl: '/logo.png', title: 'logo' },
    { id: 2, imgurl: '/logo4.png', title: 'logo' },
    { id: 3, imgurl: '/logo3.png', title: 'logo' },
    { id: 4, imgurl: '/logo6.png', title: 'logo' },
    { id: 5, imgurl: '/logo4.png', title: 'logo' },
    { id: 6, imgurl: '/logo5.png', title: 'logo' },
    { id: 7, imgurl: '/logo1.png', title: 'logo' },
  ];

  return (
    <div className="flex justify-between gap-2 m-32">
      {logos.map((item) => (
        <div key={item.id} className="w-1/6">
          <Link href={`/logo/${item.id}`}>
             <p> 
              <Image
                className="h-20 object-contain"
                src={item.imgurl}
                alt={item.title}
                width={100}
                height={100}
              />
             </p> 
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HeroSectionTwo;
