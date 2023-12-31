


import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
//import useAuth from '../../hooks/useAuth';

const Navbar = () => {
    //const { user, logOut } = Auth();
    const { user, logout } = useContext(AuthContext);
    return (
        <div className="fixed top-0  z-50 bg-base-100 shadow-xl m-auto w-11/12 rounded-full ">
            <div className="navbar bg-base-100 rounded-full shadow-xl  ">
            <div className="navbar-start ">
                <div className="dropdown">
                <label tabindex="0" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabindex="0" className="menu menu-sm dropdown-content font-semibold mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li><NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                        >
                         Home
                        </NavLink></li>
                    <li><NavLink
                        to="/allfooditems"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "" : ""
                        }
                        
                        >
                       All Food Items
                        </NavLink></li>
                    <li><NavLink
                        to="/blog"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                        >
                        Blog
                        </NavLink></li>
                   
                  
                    
                </ul>
                </div>
            <div className=""><img className="h-20" src="https://i.ibb.co/ccWjsYR/download-5-removebg-preview.png" alt="" />
            </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-semibold">
                <li><NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                        >
                         Home
                        </NavLink></li>
                    <li><NavLink
                        to="/allfooditems"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "" : ""
                        }
                        
                        >
                       All Food Items
                        </NavLink></li>
                    <li><NavLink
                        to="/blog"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                        >
                        Blog
                        </NavLink></li>
                </ul>
            </div>
           
                    <div className="navbar-end">
                    {
                        user?.email ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} alt={user.displayName} />
                                    
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-60">
                                <li>
                                    <button className="btn btn-sm  btn-ghost">{user.displayName}</button>

                                </li>
                               
                                <li>
                                    <button className="btn btn-sm  btn-ghost">My added food items</button>

                                </li>
                                <li>
                                    <Link to={"/addfood"}><button className="btn btn-sm  btn-ghost">Add a food item</button></Link>

                                </li>
                                <li>
                                    <button className="btn btn-sm  btn-ghost">My ordered food items
</button>

                                </li>
                                <li>
                                    <button className="btn btn-sm  btn-ghost bg-black text-white"
                                        onClick={logout}
                                    >Logout</button>

                                </li>
                            </ul>
                        </div>
                            :
                            <Link to='/login'>
                                <button className="btn btn-sm  btn-ghost">Login</button>
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;
