/*THIS IS A HAMBURGER COMPONENT AND STATE*/ 

import { useState} from "react";
const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
            <div className="hamburger-icon" onClick={handleToggle}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                </div>
                {isOpen && (
                    <div className="menu-content">
                        {/*add menu items here*/}
                        <a href="/">Home</a>
                        <a href="/about">About</a>
                        <a href="/contact">Contact</a>
                    </div> 
                    )}
                    </div>
                );
                };



                    export default HamburgerMenu;