import React from 'react';
import './Header.css';

const Header = () => {
    const headerStyle = {
        backgroundColor: '#E4E7EF',
        width: '100%',
        height: '80px',
        zIndex: 1000,
        top: 0,
        left: 0,
        position: 'fixed',
        display: 'flex', 
        alignItems: 'center', 
        paddingLeft: '15px',
    };

    
    const headerTextStyle = {
        verticalAlign: 'middle', 
        fontSize: '50px', 
    }

    return (
        <div style={headerStyle}>
            <h1 style={headerTextStyle}> 🧑‍🍳 Culinary Recipe Explorer 🥘 </h1>
        </div>
    )
};

export default Header;
