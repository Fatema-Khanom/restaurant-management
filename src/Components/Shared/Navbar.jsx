
// import { NavLink } from 'react-router-dom';
// const Navbar = () => {
//     return (
//         <div>
//             <div className="navbar bg-base-100 my-8  ">
//             <div className="navbar-start">
//                 <div className="dropdown">
//                 <label tabindex="0" className="btn btn-ghost lg:hidden">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//                 </label>
//                 <ul tabindex="0" className="menu menu-sm dropdown-content font-semibold mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
//                     <li><NavLink
//                         to="/"
//                         className={({ isActive, isPending }) =>
//                             isPending ? "pending" : isActive ? "active" : ""
//                         }
//                         >
//                          Home
//                         </NavLink></li>
//                     <li><NavLink
//                         to="/allfooditems"
//                         className={({ isActive, isPending }) =>
//                             isPending ? "pending" : isActive ? "" : ""
//                         }
                        
//                         >
//                        All Food Items
//                         </NavLink></li>
//                     <li><NavLink
//                         to="/blog"
//                         className={({ isActive, isPending }) =>
//                             isPending ? "pending" : isActive ? "active" : ""
//                         }
//                         >
//                         Blog
//                         </NavLink></li>
                   
                  
                    
//                 </ul>
//                 </div>
//             <img className='h-16 ' src="" alt="" />
//             </div>
//             <div className="navbar-center hidden lg:flex">
//                 <ul className="menu menu-horizontal px-1 font-semibold">
//                 <li><NavLink
//                         to="/"
//                         className={({ isActive, isPending }) =>
//                             isPending ? "pending" : isActive ? "active" : ""
//                         }
//                         >
//                          Home
//                         </NavLink></li>
//                     <li><NavLink
//                         to="/allfooditems"
//                         className={({ isActive, isPending }) =>
//                             isPending ? "pending" : isActive ? "" : ""
//                         }
                        
//                         >
//                        All Food Items
//                         </NavLink></li>
//                     <li><NavLink
//                         to="/blog"
//                         className={({ isActive, isPending }) =>
//                             isPending ? "pending" : isActive ? "active" : ""
//                         }
//                         >
//                         Blog
//                         </NavLink></li>
//                 </ul>
//             </div>
//             <div className="navbar-end  ">
//                <ul className='menu menu-horizontal px-1 font-semibold '>
                
//                <li><NavLink
//                         to="/login"
//                         className={({ isActive, isPending }) =>
//                             isPending ? "pending" : isActive ? "active" : ""
//                         }
//                         >
//                             Login
//                         </NavLink></li>
//                </ul>
               
               
//             </div>
//             </div>
//         </div>
//     );
// };

// export default Navbar;

import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navbarClasses = isScrolled
        ? "navbar bg-base-100 my-8 fixed top-0 left-0 right-0 rounded-box shadow"
        : "navbar bg-base-100 my-8";

    return (
        <div>
            <div className={navbarClasses}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-sm dropdown-content font-semibold mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active" : ""
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/allfooditems"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "" : ""
                                    }
                                >
                                    All Food Items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/blog"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active" : ""
                                    }
                                >
                                    Blog
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <img className='h-16' src="" alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/allfooditems"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "" : ""
                                }
                            >
                                All Food Items
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/blog"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                Blog
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <ul className='menu menu-horizontal px-1 font-semibold'>
                        <li>
                            <NavLink
                                to="/login"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "active" : ""
                                }
                            >
                                Login
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
