import React from 'react'

const navbar = () => {
    return (
        
            <div id="header-hero-container">
        <header>
                    <div class="flex container">
                    <img src='https://image.shutterstock.com/image-vector/real-estate-logo-260nw-338910956.jpg' height='70' width='70' />
                <nav>
                    <button id="nav-toggle" class="hamburger-menu">
                        <span class="strip"></span>
                        <span class="strip"></span>
                        <span class="strip"></span>
                    </button>

                    <ul id="nav-menu">
                        <li><a href="#" class="active">Home</a></li>
                        <li><a href="#properties" target="_blank">Properties</a></li>
                        <li><a href="#agents">Agents</a></li>
                        <li><a href="#about">About</a></li>
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