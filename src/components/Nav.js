import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <StyledNav>
      <h1>
        <NavLink to="/" id="logo">
          Capture
        </NavLink>
      </h1>
      <ul>
        <li>
          <NavLink to="/">1. About us</NavLink>
        </li>
        <li>
          <NavLink to="/work">2. Our work</NavLink>
        </li>
        <li>
          <NavLink to="/contact">3. Contact us</NavLink>
        </li>
      </ul>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 10rem;
  background-color: #282828;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-family: "Lobster", cursive;
    font-size: 1.5rem;
    font-weight: lighter;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
`;
