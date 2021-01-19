import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { NavBar } from "../Navbar";
import "./default.scss";

export const Layout = ({ children }) => {
  return (
    <Auth0Provider
      domain="dev-oekrcomv.us.auth0.com"
      clientId="sVEWSZPdgBxdlHqLYeuMJTKH3a8zWydR"
      redirectUri={window.location.origin}
      audience="https://dev-oekrcomv.us.auth0.com/api/v2/"
      scope="read:current_user"
    >
      <header>
          <NavBar />
      </header>
      <main>{children}</main>
      <footer>&copy; Copyright 2021 Junkfood Custom Arcades</footer>
    </Auth0Provider>
  );
};
