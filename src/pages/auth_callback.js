import React from "react";
import {useAuth0} from '@auth0/auth0-react'
import { Layout,Profile } from "../components";

const AuthCallback = () => {
    const {user,isAuthenticated} =useAuth0();
  return (
    <Layout>
      <p>Auth Content</p>
      <Profile user={user} loggedIn={isAuthenticated} />
    </Layout>
  );
};

export default AuthCallback;
