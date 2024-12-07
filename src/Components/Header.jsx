import React, { useState } from 'react';
import { FaSearch, FaSignInAlt, FaShoppingCart, FaHeart } from 'react-icons/fa';

const Header = () => {
    const [navActive, setNavActive] = useState(false);

    const toggleNavbar = () => {
        setNavActive(!navActive);
    };

    return (
        <div>
            <header className="header" data-header>
                <div className="container">
                    {/* Header Search */}
                    <div className="header-search">
                        <input
                            type="search"
                            name="search"
                            placeholder="Search Product..."
                            className="input-field"
                        />
                        <button className="search-btn" aria-label="Search">
                            <FaSearch />
                        </button>
                    </div>

                    {/* Logo */}
                    <a href="#" className="logo">
                        <img
                            src="https://casmart.vercel.app/assets/images/logo.svg"
                            alt="Casmart logo"
                            width="130"
                            height="31"
                        />
                    </a>

                    {/* Header Actions */}
                    <div className="header-actions">
                        <button className="header-action-btn">
                            <FaSignInAlt />
                            <p className="header-action-label">Sign in</p>
                        </button>

                        <button className="header-action-btn">
                            <FaShoppingCart />
                            <p className="header-action-label">Cart</p>
                            <div className="btn-badge green" aria-hidden="true">
                                3
                            </div>
                        </button>

                        <button className="header-action-btn">
                            <FaHeart />
                            <p className="header-action-label">Wishlist</p>
                            <div className="btn-badge" aria-hidden="true">
                                2
                            </div>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="nav-open-btn"
                        aria-label="Open Menu"
                        onClick={toggleNavbar} 
                    >
                        {/* <span></span>
                        <span></span>
                        <span></span> */}
                        <ion-icon name="menu-outline"></ion-icon>
                    </button>

                    {/* Navbar */}
                    <nav className={`navbar ${navActive ? 'active' : ''}`} data-navbar>
                        <div className="navbar-top">
                            <a href="#" className="logo">
                                <img
                                    src="https://casmart.vercel.app/assets/images/logo.svg"
                                    alt="Casmart logo"
                                    width="130"
                                    height="31"
                                />
                            </a>
                           <button
                                className="nav-close-btn"
                                aria-label="Close Menu"
                                onClick={toggleNavbar}
                            >
                                <ion-icon name="close-outline"></ion-icon>
                            </button>
                        </div> 

                        <ul className="navbar-list">
                            <li>
                                <a href="#home" className="navbar-link">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="navbar-link">
                                    Shop
                                </a>
                            </li>
                            <li>
                                <a href="#" className="navbar-link">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#blog" className="navbar-link">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a href="#" className="navbar-link">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default Header;
