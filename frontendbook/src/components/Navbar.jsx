
// import { useContext, useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// // React icons
// import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";
// import { AuthContext } from '../contects/AuthProvider';
// import { BsFillCartPlusFill } from "react-icons/bs";
// // import {useLoaderData} from "react-router-dom"



// const Navbar = () => {
//     // const {_id, bookTitle, URL,bookDescription,authorName,count} = useLoaderData();
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [isSticky, setIsSticky] = useState(false);
//     const [cartInfo, setCartInfo] = useState(()=>{ 
//         const storedCart =localStorage.getItem('count')
//         return storedCart ? Number(storedCart) : 0;
//     })
//     const { user } = useContext(AuthContext);
//     console.log(user);
//     console.log(cartInfo);

//     // Toggle menu
//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     useEffect(() => {
//         const handleScroll = () => {
//             setIsSticky(window.scrollY > 100);
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     // Nav items
//     const navItems = [
//         { link: "Home", path: "/" },
//         { link: "Shop", path: "/shop" },
//         { link: "blog", path: "/blog" },
//         { link: "About", path: "/about" },
//         { link: "Sell Your Book", path: "/admin/dashboard" },
//         { link: <div className='relative '><BsFillCartPlusFill size={25} className='text-rose'/> 
//         <span className='absolute w-5 h-5 p-0.5 rounded-full bg-rose-800 text-white text-sm  -top-4 -right-4'>{cartInfo}</span></div>, path: "/cart" },
//     ];

//     return (
//         <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300 z-10'>
//             <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-yellow-300" : ""}`}>
//                 <div className='flex justify-between items-center text-base gap-8'>
//                     {/* Logo */}
//                     <Link to='/' className='text-2xl font-bold text-blue-700 flex items-center gap-2'>
//                         <FaBlog className='inline-block' /> <span className='text-pink-800 font-extrabold'>
//                             Book<span className='text-base'>Store</span></span>
//                     </Link>

//                     {/* Nav items for large devices */}
//                     <ul className='md:flex space-x-3 hidden'>
//                         {navItems.map(({ link, path }) => (
//                             <Link key={path} to={path} className='block text-base text-rose-800 uppercase cursor-pointer hover:bg-gray-200 items-center py-1.5 px-3 rounded-full duration-300 font-semibold'>
//                                 {link}
//                             </Link>
//                         ))}
//                     </ul>

//                     {/* Button for large devices */}
//                     <div className='space-x-12 hidden lg:flex items-center'>
//                         <button><FaBarsStaggered className='w-5 hover:text-blue-700' /></button>
                       
//                     </div>

//                     {/* Menu button for mobile devices */}
//                     <div className='md:hidden'>
//                         <button onClick={toggleMenu} className='text-black focus:outline-none'>
//                             {isMenuOpen ? <FaXmark className='h-5 w-5 text-black' /> : <FaBarsStaggered className='h-5 w-5 text-black' />}
//                         </button>
//                     </div>
//                 </div>

//                 {/* Nav items for small devices */}
//                 <div className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
//                     {navItems.map(({ link, path }) => (
//                         <Link key={path} to={path} className='block text-base text-white uppercase cursor-pointer'>
//                             {link}
//                         </Link>
//                     ))}
//                 </div>
//             </nav>
//         </header>
//     );
// };

// export default Navbar;


import { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// React icons
import { FaBarsStaggered, FaBlog, FaXmark } from "react-icons/fa6";
import { AuthContext } from '../contects/AuthProvider';
import { BsFillCartPlusFill } from "react-icons/bs";

const Navbar = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [cartInfo, setCartInfo] = useState(()=>{ 
        const storedCart =localStorage.getItem('count')
        return storedCart ? Number(storedCart) : 0;
    });
    const { user } = useContext(AuthContext);

    // Toggle menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Nav items
    const navItems = [
        { link: "Home", path: "/" },
        { link: "Shop", path: "/shop" },
        { link: "Blog", path: "/blog" },
        { link: "About", path: "/about" },
        { link: "Sell Your Book", path: "/admin/dashboard" },

    ];

    return (
        <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300 z-10'>
            <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-yellow-300" : ""}`}>
                <div className='flex justify-between items-center text-base gap-8'>
                    {/* Logo */}
                    <Link to='/' className='text-2xl font-bold text-blue-700 flex items-center gap-2'>
                        <FaBlog className='inline-block' /> <span className='text-pink-800 font-extrabold'>
                            Book<span className='text-base'>Store</span></span>
                    </Link>

                    {/* Nav items for large devices */}
                    <ul className='md:flex space-x-3 hidden bg-rose-200/50 px-3 py-1.5 rounded-full'>
                        {navItems.map(({ link, path }) => (
                            <Link key={path} to={path} className={`block text-base uppercase cursor-pointer hover:bg-gray-200 items-center py-1.5 px-3 rounded-full duration-300 font-semibold ${location.pathname === path ? 'bg-gray-300 text-blue-700' : 'text-rose-800'}`}>
                                {link}
                            </Link>
                        ))}

                    </ul>
                    

                    {/* Button for large devices */}
                    <div className='space-x-8 hidden lg:flex items-center'>
                    <Link  to= {'/cart'}>
                         <div className='relative '><BsFillCartPlusFill size={25} className='text-gray-800/80'/> 
                        <span className='absolute w-5 h-5 p-0.5 rounded-full bg-rose-800 text-white text-sm  -top-4 -right-4'>{cartInfo}</span></div>
                        
                        </Link>


                        <button><FaBarsStaggered className='w-5 hover:text-blue-700'/></button>
                    </div>

                    {/* Menu button for mobile devices */}
                    <div className='md:hidden'>
                        <button onClick={toggleMenu} className='text-black focus:outline-none'>
                            {isMenuOpen ? <FaXmark className='h-5 w-5 text-black' /> : <FaBarsStaggered className='h-5 w-5 text-black' />}
                        </button>
                    </div>
                </div>

                {/* Nav items for small devices */}
                <div className={`space-y-4 px-4 mt-16 py-7 bg-rose-700 ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                    {navItems.map(({ link, path }) => (
                        <Link key={path} to={path} className={`block text-base uppercase cursor-pointer ${location.pathname === path ? 'text-yellow-300' : 'text-white'}`}>
                            {link}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
