import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { NavbarData } from "./NavbarData.jsx"

const Navbar = () => {
    const [showNav, setshowNav] = useState(false)

    return (
        <div className="navbar bg-white border-none fixed py-4 top-0 -mt-1 z-[100] selection:bg-blue-400">
            <div className="navbar-start laptop:ml-[6.5rem] mx-4">
                <a className="leading-[1.5rem] text-black font-black text-[2rem]">
                    {/* <img className="w-[60%]" src={BlackLogo} alt="web Logo" /> */}
                    <h1 className="font-bold">
                        Logo
                    </h1>
                </a>
            </div>

            {/* displays on wide screen */}
            <div className="navbar-center hidden laptop:flex ">
                {/* laptop:mr-[20rem] */}
                <ul className="menu-horizontal px-1">
                    {NavbarData.map((item, index) => {
                        return (
                            <li key={index} className="">
                                <NavLink to={item.path} className={({ isActive }) =>
                                    isActive ? 'flex min-w-max rounded-none mx-2 pb-[0.3rem] border-b-[3px] px-1 border-[black] font-medium transition duration-500 ease-linear'
                                        :
                                        'min-w-max px-1 mx-2 transition duration-500 ease-linear'
                                }>
                                    <span className={item.className}>{item.title}</span>
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </div>

            <div className="navbar-end">
                <div className="">
                    {/* dropdown */}
                    {/* hamburger menu */}
                    <label onClick={() => setshowNav(!showNav)}
                        tabIndex={0} className="btn btn-ghost laptop:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            viewBox="0 0 24 24" className="h-5 w-5">
                            <path
                                d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
                        </svg>
                    </label>
                    {/* end of hamburger menu */}

                    {/* mobile navbar */}
                    {showNav && <ul tabIndex={0} className="absolute flex w-full p-12 -ml-[18.7rem] mt-2 border border-t-2 z-[10] bg-black">
                        {/* dropdown-content */}
                        {NavbarData.map((item, index) => {
                            return (
                                <li key={index} className="">
                                    {/* "flex min-w-max p-4" */}
                                    <NavLink to={item.path} className={({ isActive }) =>
                                        isActive ? 'flex min-w-max ' : 'flex rounded-none min-w-max'
                                    }>
                                        <span className="p-4 text-white bg-transparent hover:bg-transparent mx-1 btn">
                                            {item.title}
                                        </span>
                                    </NavLink>
                                </li>
                            );
                        })}
                    </ul>}
                    {/* end of mobile navbar */}
                </div>
            </div>


        </div>

    );
};

export default Navbar;
