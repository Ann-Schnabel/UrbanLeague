import * as React from "react"
import { Link } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"

const Nav = () => (
  <nav className="p-4 flex justify-between items-center">
    <Link to="/">
      <StaticImage
        className="w-32 sm:w-48"
        src="../images/TriCounty_Logo.png"
        alt="Tri-county Urban League Logo"
      />
    </Link>
    <div className="flex items-center">
      <Link to="/events/" className="text-lg mr-4">
        Events
      </Link>
      <a
        href="https://app.etapestry.com/hosted/Tri-CountyPeoriaUrbanLeague/Registration.html"
        target="_blank"
        rel="noreferrer"
      >
        <button className="m-4 bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-8 rounded-full">
          Donate
        </button>
      </a>
    </div>
  </nav>
)

export default Nav
