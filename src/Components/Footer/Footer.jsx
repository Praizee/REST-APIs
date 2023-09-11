import React from "react";
import { FiArrowRight } from "react-icons/fi";

const Footer = () => {
    // date for copyright
    const theDate = new Date().getFullYear();
    // end of date

    return (
        <div className="bg-[black] text-white ">
            <footer
                className="footer laptop:p-10 p-6 max-w-[90%] laptop:mx-[7rem] mx-0">

                <p className="py-2 copyright laptop:mr-[rem] laptop:ml-0 mx-8 text-[0.85rem] laptop:block tablet:block text-[#ffffff74]">
                    <span className="text-[0.85rem]">{theDate} </span>
                    @
                    Company.
                    All rights reserved.
                </p>
            </footer>

        </div>

    );
};

export default Footer;