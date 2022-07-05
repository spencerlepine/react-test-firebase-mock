import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom"
import useAuth from "../hooks/useAuth.js";
import logo from '../logo.svg';

const Menu = (props) => <ul>{props.children}</ul>
const Link = (props) => <a id={props.id} href={props.to}>{props.children}</a>
const Button = (props) => <button>{props.children}</button>

const Navbar = (props) => {
  // Get auth state and re-render anytime it changes
  const auth = useAuth();
  const navigate = useNavigate()

  return (
    <header>
      <img src={logo} className="App-logo" alt="logo" />

      <Menu>
        <Link to="/" id="homeLink">Home</Link>
        {auth.user ? (
          <Fragment>
            <Link to="/account">Account ({auth.user.email})</Link>
            <Button onClick={() => auth.signOut(() => navigate("/"))}>Signout</Button>
          </Fragment>
        ) : (
          <Link to="/signup">Signup</Link>
        )}
      </Menu>
    </header>
  );
}

export default Navbar