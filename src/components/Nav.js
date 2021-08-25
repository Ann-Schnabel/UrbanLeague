import * as React from "react"
import { Link } from "gatsby"

import { StaticImage } from "gatsby-plugin-image"

const Nav = () => (
  <nav className="p-4 flex-none">
    <Link>
      <StaticImage
        className="w-48"
        src="../images/TriCounty_Logo.png"
        alt="Tri-county Urban League Logo"
      />
    </Link>
    <div className="flex-none1">
      <Link>
        <p>About</p>
      </Link>
      <Link>
        <p>Volunteer</p>
      </Link>
      <button>Donate</button>
    </div>
  </nav>
)

export default Nav
