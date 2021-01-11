import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

function OurWork() {
  return (
    <Work>
      <Movie>
        <h2>The Athlete</h2>
        <div className="line"></div>
        <NavLink to="/work/the-athlete">
          <img src={athlete} alt="athlete movie poster" />
        </NavLink>
      </Movie>
      <Movie>
        <h2>The Racer</h2>
        <div className="line"></div>
        <NavLink to="/work/the-racer">
          <img src={theracer} alt="athlete movie poster" />
        </NavLink>
      </Movie>
      <Movie>
        <h2>Good Times</h2>
        <div className="line"></div>
        <NavLink to="/work/good-times">
          <img src={goodtimes} alt="athlete movie poster" />
        </NavLink>
      </Movie>
    </Work>
  );
}

const Work = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;
const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background-color: #ccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default OurWork;
