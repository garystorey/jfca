import React from "react";
import { Auth0Provider } from "@auth0/auth0-react";
import { NavBar } from "../Navbar";
import "./default.scss";

export const Layout = ({ children }) => {
  return (
    <Auth0Provider
      domain={process.env.GATSBY_AUTH0_DOMAIN}
      clientId={process.env.GATSBY_AUTH0_CLIENT_ID}
      redirectUri={`https://jfca.netlify.com`}
      audience={process.env.GATSBY_AUTH0_AUDIENCE}
      scope={process.env.GATSBY_AUTH0_SCOPE}
    >
      <header>
          <NavBar />
      </header>
      <main>{children}</main>
      <footer>&copy; Copyright 2021 Junkfood Custom Arcades</footer>
    </Auth0Provider>
  );
};
