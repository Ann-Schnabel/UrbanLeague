import React from "react"

import Layout from "../components/layout"
import Footer from "../components/Footer"
import Seo from "../components/seo"

const Events = () => {
  return (
    <Layout>
      <Seo title="Events" />
      <h2>Upcoming Events</h2>
      <div className="sm:flex items-center">
        <h3 className="text-xl font-thin mb-4 sm:text-left mt-8">
          Annual Jazz Brunch
        </h3>
        <a
          href="https://app.etapestry.com/onlineforms/Tri-CountyPeoriaUrbanLeague/2021jazzbrunch.html"
          rel="noreferrer"
          target="_blank"
          className="sm:ml-8"
        >
          <button className="bg-white hover:bg-gray-300 text-gray-900 font-bold py-2 px-8 rounded-full sm:mt-4">
            Buy Tickets
          </button>
        </a>
      </div>
      <p className="w-100% md:w-7/12 mt-0 z-10 mb-8 mt-8">
        Join us in honoring Laraine Bryson’s 2021 Retirement. This Jazz Brunch
        will feature The Judy Page Project. Tickets for individuals are $50.
        Consider a Platinum, Gold or Silver Sponsorship. Click above for tickets
        or call <a href="tel:309-673-7474">309-673-7474</a> for more
        information.
      </p>
      <p className="mb-2">
        <strong>Date:</strong> October 10, 2021
      </p>
      <p className="mb-2">
        <strong>Time:</strong> 1pm-5pm
      </p>
      <p>
        <strong>Location:</strong> Par-A-Dice Hotel Casino
      </p>
      <p className="mb-2">21 Blackjack Boulevard, East Peoria IL</p>
      <p className="mb-64">
        <strong>Tickets:</strong> $50 each. Tables of 8 available.
      </p>
      <Footer />
    </Layout>
  )
}

export default Events
