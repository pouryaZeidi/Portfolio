import { navbaritemprops } from '@/Types/type';
// import Link from 'next/link';
import { Link } from 'react-scroll'

const NavbarItems =({children, to }:navbaritemprops ) => {
  return (
    <Link to={to} smooth={true} duration={500} >
      <div className=" relative  flex items-center md:text-[17px]  lg:text-xl h-fit text-white hover:text-yellow-200   px-4 py-1  cursor-pointer">
        <span className="hover:typing-animation flex items-center">{children}</span>
      </div>
    </Link>
   
  );
};

export default NavbarItems;
