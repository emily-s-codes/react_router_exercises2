import "./Navigation.css";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";


const NavUnlisted = styled.ul`

  display: flex;

  a {
    text-decoration: none;
  }

  li {
    color: red;
    margin: 0 0.8rem;
    font-size: 1.3rem;
    position: relative;
    list-style: none;
  }

  .current {
    li {
      border-bottom: 2px solid black;
    }
  }
`;

const Navigation = () => {
    return (<div className="navBar">
        <h1>My Life</h1>
        <NavUnlisted>
            <ul className="navUL">
                <NavLink to="/" activeClassName="current" exact><li>Home</li></NavLink>
                <NavLink to="/blog" activeClassName="current" exact><li>Blog</li></NavLink>
                <NavLink to="/contact" activeClassName="current" exact><li>Contact</li></NavLink>
            </ul>
        </NavUnlisted>
    </div>);
}

export default Navigation;