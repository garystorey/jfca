import React from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { Link } from "gatsby"
import { Button } from "../../elements"

export const NavBar = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0()
  return (
    <>
      <h1>Junkfood Custom Arcade</h1>
      <nav>
        <ul className="main">
          <li>
            <Link to="/">Shop</Link>
          </li>
          <li>
            <Link to="/">Blog</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            {isAuthenticated ? (
              <Button as="primary" onClick={() => logout()}>
                Logout
              </Button>
            ) : (
              <Button as="primary" onClick={() => loginWithRedirect()}>
                Login
              </Button>
            )}
          </li>
        </ul>
      </nav>
    </>
  )
}
