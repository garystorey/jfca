import React from 'react'
import {Link} from 'gatsby'
import './default.scss';

export const Layout = ({children}) => (
    <>
    <header>
        <h1>Junkfood Custom Arcade</h1>
        <nav>
             <ul>
                 <li><Link to="/">Shop</Link></li>
                 <li><Link to="/">Blog</Link></li>
                 <li><Link to="/">About</Link></li>
                 <li><Link to="/">Login</Link></li>
             </ul>
        </nav>
    </header>
    <main>
        {children}
    </main>
    <footer>
        &copy; Copyright 2021 Junkfood Custom Arcades
    </footer>
    </>
)
