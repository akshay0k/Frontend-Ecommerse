// Navbar.js
import React, { useContext, useRef, useState } from 'react';
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from 'react-router-dom';
import nav_dropdown from "../Assets/nav_dropdown.png";
import CartContext from '../../Context/CartContext';
import { AuthContext } from '../../Context/AuthContext';
import products from '../Assets/all_product'; // Import the products data

export default function Navbar() {
    const [menu, setMenu] = useState("shop");
    const [searchQuery, setSearchQuery] = useState("");
    const [showSearchResults, setShowSearchResults] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const { items } = useContext(CartContext);
    const { isLoggedIn, login, logout } = useContext(AuthContext);
    const mmenuRef = useRef();

    const handleLogout = () => {
        logout();
    };

    const dropdown_toggle = (e) => {
        mmenuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    };

    const handleSearchInputChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        if (query.trim() !== "") {
            setShowSearchResults(true);
        } else {
            setShowSearchResults(false);
            setSelectedProduct(null);
        }
    };

    const handleProductClick = (product) => {
        setSelectedProduct(product);
        setShowSearchResults(false);
        setSearchQuery(product.name); // Display selected product name in the search input
    };

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>SHOPPIFY</p>
            </div>
            <div className="nav-search">
                <input
                    type="text"
                    placeholder="Search products"
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                />
            </div>
            <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
            <ul ref={mmenuRef} className="nav-menu">
             
                    <li onClick={()=>{setMenu("men")}}><Link style={{textDecoration:'none'}} to='/mens'>Mens</Link> {menu === "men" ? <hr/>:<></>}</li>
                    <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:'none'}} to='/womens'>Womens</Link> {menu === "womens" ? <hr/>:<></>}</li>
                    <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>Kids</Link> {menu === "kids" ? <hr/>:<></>}</li>
                    <li onClick={()=>{setMenu("orderhistory")}}><Link style={{textDecoration:'none'}} to='/orderhistory'>OrderHistory</Link> {menu === "orderhistory" ? <hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                {
                    isLoggedIn ? <button onClick={handleLogout}>Logout</button> : <Link to='/login'> <button>Login</button></Link>
                }
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{items.length}</div>
            </div>
         
            {showSearchResults && (
                <div className="search-results">
                    {products
                        .filter(product =>
                            product.name.toLowerCase().includes(searchQuery.toLowerCase())
                        )
                        .map(product => (
                            <Link key={product.id} to={`/product/${product.id}`} onClick={() => handleProductClick(product)}>
                                {product.name}
                            </Link>
                        ))}
                </div>
            )}
            {selectedProduct && (
                <div className="selected-product">
                   <Link to={`/product/${selectedProduct.id}`}></Link>
                </div>
            )}
        </div>
    );
}













