import "./Navigation.css";
import restaurant_icon from "../../assets/img/restaurant_icon.svg";
import { NavLink } from "react-router-dom";
import React from "react";
import styled from "styled-components";

const NavUnlisted = styled.ul`
    a {
        text-decoration:none;
    }

    a:hover {
        text-decoration:underline;
    }

    li {
        color: #2A3990;
        font-size: 2rem;
    }

    .current {
        li {
            border-bottom:2px solid #2A3990;
        }
    }
`;


const Navigation = () => {
    return (
        <div className="navigation">
            <section className="iconName">
                <img src={restaurant_icon} alt="restaurant icon" />
                <h1>Best Restaurant Ever</h1>
            </section>
            <NavUnlisted>
                <ul className="navigationUL">
                    <NavLink to="/menu" activeClassName="current" exact><li>
                        Menu
                    </li></NavLink>
                    <NavLink to="/contact" activeClassName="current" exact><li>
                        Contact
                    </li></NavLink>
                    <NavLink to="/hours" activeClassName="current" exact><li>
                        Hours
                    </li></NavLink>
                    <NavLink to="/photos" activeClassName="current" exact><li>
                        Photos
                    </li></NavLink>
                </ul>
            </NavUnlisted>
        </div>
    );
}

export default Navigation;