import { useState } from "react";
import logo from "../imgs/logo.png";

import { Link, Outlet } from "react-router-dom";

const Navbar = () => {

    const [searchBoxVisibility, setSearchBoxVisibility] = useState(false)





    return (
        <>
            <nav className="navbar gap-4">

                <Link to="/" className="flex-none w-10" >
                    <img src={logo} className="w-full" />
                </Link>

                <div className={"absolute bg-white w-full left-0 top-full mt-0.5 border-b border-grey py-4 px-[5vw] md:border-0 md:block md:relative md:inset-0 md:p-0 md:w-auto md:show " + (searchBoxVisibility ? "show" : "hide")}>
                    <input type="text" placeholder="Search" className="w-full md:w-auto bg-grey p-5 pl-6 pr-[12%] md:pr-6 rounded-full placeholder:text-dark-grey md:pl-12" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"} className="absolute right-[10%] md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2 text-xl text-dark-grey">
                        <path d="M17.5 17.5L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    </svg>
                </div>

                <div className="flex items-center gap-3 md:gap-6 ml-auto">
                    <button className="md:hidden bg-grey w-12 h-12 rounded-full flex items-center justify-center"
                        onClick={() => setSearchBoxVisibility(
                            currentVal => !currentVal
                        )}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"} >
                            <path d="M17.5 17.5L22 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

                <Link to="/editor" className="hidden md:flex gap-2 link">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"} className="bg-grey">
                        <path d="M20.0544 10.9996V7.81719C20.0544 6.12367 20.0544 5.27691 19.7855 4.60062C19.3533 3.5134 18.4393 2.65581 17.2805 2.25029C16.5597 1.99805 15.6572 1.99805 13.8521 1.99805C10.6933 1.99805 9.11389 1.99805 7.85245 2.43947C5.82453 3.14912 4.22491 4.64991 3.46854 6.55255C2.99805 7.73606 2.99805 9.21789 2.99805 12.1816V14.7275C2.99805 17.7973 2.99805 19.3322 3.84856 20.3982C4.09224 20.7037 4.38124 20.9748 4.70676 21.2033C5.75513 21.9397 7.22909 21.9966 10.0213 22.001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3 11.979C3 10.1381 4.58007 8.66472 6.42102 8.66472C7.08681 8.66472 7.87173 8.78138 8.51906 8.60793C9.09421 8.45381 9.54345 8.00457 9.69757 7.42941C9.87102 6.78209 9.75436 5.99717 9.75436 5.33138C9.75436 3.49043 11.2468 1.99805 13.0877 1.99805" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M19.8772 14.4829L20.5647 15.167C21.1465 15.7458 21.1465 16.6842 20.5647 17.263L16.9625 20.9145C16.6791 21.1964 16.3166 21.3865 15.9227 21.4597L13.6901 21.9419C13.3376 22.018 13.0237 21.7066 13.0992 21.3557L13.5744 19.1471C13.648 18.7551 13.839 18.3945 14.1224 18.1126L17.7705 14.4829C18.3523 13.9041 19.2954 13.9041 19.8772 14.4829Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p>
                        Write
                    </p>
                </Link>

                <Link className="btn-dark " to="/signin">
                    Sign In
                </Link>

                <Link className="btn-light hidden md:block" to="/signup">
                    Sign Up
                </Link>
            </nav>

        <Outlet/>
        </>
    )
}
export default Navbar; 
