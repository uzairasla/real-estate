import React from 'react'

const navbar = () => {
    return (
        
            <div id="header-hero-container">
        <header>
            <div class="flex container">
                <a id="logo" href="#">STATED.</a>
                <nav>
                    <button id="nav-toggle" class="hamburger-menu">
                        <span class="strip"></span>
                        <span class="strip"></span>
                        <span class="strip"></span>
                    </button>

                    <ul id="nav-menu">
                        <li><a href="#" class="active">Home</a></li>
                        <li><a href="http://www.google.com" target="_blank">Properties</a></li>
                        <li><a href="#">Agents</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Contact</a></li>
                        <li id="close-flyout"><span class="fas fa-times"></span></li>
                    </ul>
                </nav>
            </div>
        </header>

        </div>
    )
}
export default navbar;