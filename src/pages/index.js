import * as React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Layout, Profile } from "../components";

const IndexPage = () => {
  const { user } = useAuth0();
  return <Layout>{user ? <Profile user={user} /> : null}</Layout>;
};

export default IndexPage;
