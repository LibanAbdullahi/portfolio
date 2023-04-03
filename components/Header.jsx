import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { Container } from "../styles/globalStyles";

const HeaderContainer = styled.header`
  backdrop-filter: blur(10px);
  padding: 2rem 0;
`;

const Logo = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: -1px;
  color: ${({ theme }) => theme.colors.primary};
  animation: glow 2s ease-in-out infinite alternate;
  @keyframes glow {
    from {
      text-shadow: 0 0 5px ${({ theme }) => theme.colors.primary},
        0 0 10px ${({ theme }) => theme.colors.primary},
        0 0 15px ${({ theme }) => theme.colors.primary};
    }
    to {
      text-shadow: 0 0 10px ${({ theme }) => theme.colors.primary},
        0 0 20px ${({ theme }) => theme.colors.primary},
        0 0 30px ${({ theme }) => theme.colors.primary};
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
`;

const NavItem = styled.li`
  margin-right: 2.5rem;
`;

const NavLink = styled.a`
  font-size: 1.8rem;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <Nav>
          <Link href="/">
            <Logo>Liban</Logo>
          </Link>
          <NavLinks>
            <NavItem>
              <Link href="/">
                <NavLink>Home</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/portfolio">
                <NavLink>Portfolio</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/about">
                <NavLink>About</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="/contact">
                <NavLink>Contact</NavLink>
              </Link>
            </NavItem>
          </NavLinks>
        </Nav>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
