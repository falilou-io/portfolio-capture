import styled from "styled-components";

export default function Nav() {
  return (
    <StyledNav>
      <h1>
        <a id="logo" href="#">
          Capture
        </a>
      </h1>
      <ul>
        <li>
          <a href="#">1. About us</a>
        </li>
        <li>
          <a href="#">2. Our work</a>
        </li>
        <li>
          <a href="#">3. Contact us</a>
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
