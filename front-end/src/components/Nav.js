import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

const Nav = () => {
    let auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/login');
    }
    return(
        <div>
        {
            auth ? 
        <ul className='nav-ul'>
        <li><Link to = "/">Products</Link></li>
        <li><Link to = "/add">Add Product</Link></li>
        <li><Link to = "/update/:id">Update Product</Link></li>
        <li><Link to = "/profile">Profile</Link></li>
        <li><Link to = "/login" onClick={logout}>Logout</Link></li>
        </ul>
        : 
        <ul className='nav-ul navRight'>
        <li><Link to = "/signup">Sign Up</Link></li>
        <li><Link to = "/login">Login</Link></li>
        </ul>
        }
        </div>
    )
}
export default Nav