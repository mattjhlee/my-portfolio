import React from "react";

function Navbar() {
    return (
        <nav>
            <div>
                
                <Link to="/">
                    <span className="home-link">
                    <h3>Home</h3>
                    </span>
                </Link>
                <Link to="/projects">
                    <span className="projects-link">
                    <h3>About Us</h3>
                    </span>
                </Link>
                <Link to="/aboutme">
                    <span className="aboutme-link">
                    <h3>Menu</h3>
                    </span>
                </Link>
                <Link to="/contact">
                    <span className="contactr-link">
                    <h3>Special Orders</h3>
                    </span>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;