import React from 'react';

export default class Navbar extends React.Component {
    render() {
        return (
            <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
                <a className='navbar-brand' href='#'>Cornerstone Games</a>
                <button 
                    className='navbar-toggler' 
                    type='button' 
                    data-bs-toggle='collapse' 
                    data-bs-target='#navbarNavDropdown' 
                    aria-controls='navbarNavDropdown' 
                    aria-expanded='false' 
                    aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse' id='navbarNavDropdown'>
                    <ul className='navbar-nav'>
                        <li className='nav-item active'>
                            <a className='nav-link' href="#">Home</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href="#">About</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href="#">Contact Us</a>
                        </li>
                    </ul>    
                </div>
            </nav>
        );
    }
}