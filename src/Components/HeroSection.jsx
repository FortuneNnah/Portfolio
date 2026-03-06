import React from 'react'

const Header = () => {
    return(
        <header className="header">
            <nav className="navbar">
                <div className="logo">&lt;/&gt;</div>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

const HeroSection = () => {
  return (
    <Header />
  )
}

export default HeroSection