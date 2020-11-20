import React from 'react'
import { FaBars } from 'react-icons/fa'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks
  } from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo>
                        La Net
                    </NavLogo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="home" >Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about" >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="products" >Products</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services" >Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="conatact-us" >Contact Us</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
