import React from "react";

const Footer = () => {
    // date for copyright
    const theDate = new Date().getFullYear();
    // end of date

    return (
        <div className="bg-[black] text-white selection:bg-blue-800">
            <footer
                className="footer laptop:p-10 p-6 max-w-[90%] laptop:mx-[7rem] mx-0">

                <div className="flex justify-between w-full gap-[rem]">
                    <p className="py-2 copyright laptop:mr-[rem] laptop:ml-0 mx-8 text-[0.85rem] laptop:block tablet:block ">
                        {/* text-[#ffffff74] */}
                        Made with 💙

                        by &nbsp;
                        <a href="https://stephen-adeniji.netlify.app/"
                            className="text-[0.85rem] text-blue-300 link link-hover">
                            Stephen Adeniji
                        </a>
                    </p>
                    <p className="py-2 copyright text-white/50 laptop:mr-[rem] laptop:ml-0 mx-8 text-[0.85rem] laptop:block tablet:block ">
                        *API Consumption => (IMDB)*
                    </p>
                    <p className="py-2 copyright laptop:mr-[rem] laptop:ml-0 mx-8 text-[0.85rem] laptop:block tablet:block ">
                        {/* text-[#ffffff74] */}
                        <span className="text-[0.85rem]">{theDate} </span>
                        @
                        Company.
                        All rights reserved.
                    </p>
                </div>
            </footer>

        </div>

    );
};

export default Footer;