import React from 'react'
import {Link, NavLink} from 'react-router-dom'
//IMP!
//link is basically same as a tag, but a tag is not prefered to use as the whole page reloads when clicked!
// link --- to :: a --- href
//NavLink automatically adds an active class to the rendered link when its to route matches the current URL. This feature is particularly useful for styling active navigation links differently from inactive ones.
//just to make the code readible and more accessible we use nav tag, to show the particular code written is for user readibility
export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
{/* logo */}
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
{/* for right section (login, getstarted)*/}

                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                //IMP!!!!!!
                                //you can see the classname provided is in form of a callback function
                                //and not passed directly
                                //this is done to pass a variable and to check whether the link matches with the current url, if it does then we highlight that name
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                //so the variable passed isActive, is checked, if its present then, textorange, if not then text gray    
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                            <NavLink
                                to = "/about"
                                //IMP!!!!!
                                //we specify the route here
                                //and this route is defined in the main.jsx file 
                                //under createBrowserRouter Method
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                //so the variable passed isActive, is checked, if its present then, textorange, if not then text gray    
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                            <NavLink
                                to = "/contactus"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                //so the variable passed isActive, is checked, if its present then, textorange, if not then text gray    
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                            <li>
                            <NavLink
                                to = "/github"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                //so the variable passed isActive, is checked, if its present then, textorange, if not then text gray    
                                >
                                    GitHub
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

