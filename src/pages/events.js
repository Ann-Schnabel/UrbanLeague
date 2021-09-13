import React from "react"
import { graphql } from "gatsby"
import moment from "moment"
import { tz } from "moment-timezone"

import Layout from "../components/layout"
import Footer from "../components/Footer"
import Seo from "../components/seo"

const Events = ({ data }) => {
  console.log(data)

  const eventsArray = [data.allContentfulEvents.edges[1], data.allContentfulEvents.edges[0]]

  const renderEvent = (eventObj, index) => {
    const datum = eventObj.node

    const dateTime = moment(datum.dateTime).tz("America/Chicago")
    const dateEnd = moment(datum.dateTimeEnd).tz("America/Chicago")

    const dateDay = `${dateTime.format("MMM DD")}`

    return (
      <div
        className="relative rounded-xl overflow-hidden min-w-sm max-w-sm mr-8 mb-8 bg-white self-stretch flex flex-col justify-between"
        key={`Event-Card--${index}`}
      >
        <div>
          <div className="w-full h-32 bg-gray-900" />
          <div className="bg-white w-full p-8 mb-4">
            <div>
              <h3 className="text-2xl font-bold sm:text-left mt-4 mb-4">
                {datum.eventName}
              </h3>
              <p className="text-xl font-thin sm:text-left">{`${datum.locationName}`}</p>
              <p className="text-xl font-thin italic sm:text-left mb-4">{`${dateTime.format(
                "ha"
              )}–${dateEnd.format("ha")}`}</p>
              <p>{datum.aboutEvent.aboutEvent}</p>
            </div>
          </div>
        </div>
        <p className="px-8 pb-8 font-bold">{datum.cost}</p>

        <div className="bg-white rounded-full px-2 w-max absolute top-4 left-4">
          <p className="">{dateDay}</p>
        </div>
        {datum.ticketLink && (
          <a
            href={datum.ticketLink}
            target="_blank"
            rel="noreferrer"
            className="bg-red-700 rounded-full px-4 absolute top-4 right-4 text-white font-bold"
          >
            Buy Tickets
          </a>
        )}
      </div>
    )
  }

  return (
    <Layout>
      <Seo title="Events" />
      <h2 className="mb-8">
        Upcoming Events{" "}
        <span className="font-thin">{`( ${data.allContentfulEvents.totalCount} )`}</span>
      </h2>
      <div className="flex mb-32 items-stretch flex-wrap mx-auto justify-center">
        {eventsArray.map(eventObj => renderEvent(eventObj))}
      </div>
      <Footer />
    </Layout>
  )
}

export default Events

export const data = graphql`
  query MyQuery {
    allContentfulEvents {
      edges {
        node {
          cost
          eventName
          locationName
          ticketLink
          aboutEvent {
            aboutEvent
          }
          addressString {
            addressString
          }
          dateTime
          dateTimeEnd
        }
      }
      totalCount
    }
  }
`
