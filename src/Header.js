import React from 'react';
import './style.css';

function Header() {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li>Home |</li>
                        <li>About |</li>
                        <li>Services |</li>
                        <li>Contacts</li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Header;