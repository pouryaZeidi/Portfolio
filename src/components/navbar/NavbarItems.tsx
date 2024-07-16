import { navbaritemprops } from '@/Types/type';
import Link from 'next/link';

const NavbarItems =({children, href }:navbaritemprops ) => {
  return (
    <Link href={href}>
      <div className=" relative flex items-center md:text-[17px]  lg:text-xl h-fit text-gray-800 hover:typing-animation lg:bg-orange-800 px-4 py-1 rounded-xl  cursor-pointer">
        <span className="hover:typing-animation flex items-center">{children}</span>
      </div>
    </Link>
  );
};

export default NavbarItems;
