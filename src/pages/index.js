import * as React from "react"
import { graphql } from "gatsby"
import { Tabs, Tab } from "@material-ui/core"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Footer from "../components/Footer"
import Seo from "../components/seo"
import CityScape from "../images/Peoria_Skyline.svg"

const IndexPage = ({ data }) => {
  const [tabsValue, setTabsValues] = React.useState(0)

  const handleChange = (event, newValue) => {
    setTabsValues(newValue)
  }

  const TabPanel = ({ children, value, index }) => {
    return <div>{value === index && <>{children}</>}</div>
  }

  const TabsInfoObjects = [
    {
      pic: getImage(
        data.allFile.nodes[1].childrenImageSharp[0].gatsbyImageData
      ),
      alt: "Young girl wears Future Leader shirt",
      content:
        "Daycare services offered through the Urban League help clients stay at work and pursue employment opportunities.",
    },
    {
      pic: getImage(
        data.allFile.nodes[5].childrenImageSharp[0].gatsbyImageData
      ),
      alt: "Student taking classes online",
      content:
        "Tri-County Urban League offers outstanding programs in all subjects that set students up for success.",
    },
    {
      pic: getImage(
        data.allFile.nodes[3].childrenImageSharp[0].gatsbyImageData
      ),
      alt: "A teacher helps a student with a coding assignement",
      content:
        "Education is a core of the Tri-County Urban League's mission. The department and its staff make every effort to provide excellent services to clients and other persons in need of improving educational opportunities.",
    },
    {
      pic: getImage(
        data.allFile.nodes[2].childrenImageSharp[0].gatsbyImageData
      ),
      alt: "A young professional works on her laptop",
      content:
        "Employment services offered through the Urban League help clients through a variety of programs that support individuals in obtaining employment. Each individual is assigned a counselor who assesses, coordinates individual skills and capabilities for available jobs.",
    },
    // {
    //   pic: getImage(
    //     data.allFile.nodes[0].childrenImageSharp[0].gatsbyImageData
    //   ),
    //   alt: "A grandmother and grandchild wash hands at the sink",
    //   content: "",
    // },
    {
      pic: getImage(
        data.allFile.nodes[4].childrenImageSharp[0].gatsbyImageData
      ),
      alt: "Two women sit on a couch as one takes notes",
      content:
        "The Urban League's dynamic counseling department serves clientele from all walks of lives. Our counseling department programs help individuals and families from birth to adulthood. Our viable counseling programs address the social and cultural needs of our clients.",
    },
  ]

  const Panels = () => {
    return TabsInfoObjects.map((object, index) => {
      return (
        <TabPanel value={tabsValue} index={index} key={index}>
          <div className="md:flex mt-16 items-start">
            <div className="md:w-5/12 max-h-96 overflow-hidden">
              <GatsbyImage image={object.pic} alt={object.alt} />
            </div>
            <div className=" md:w-7/12 mt-8 sm:mt-0 sm:p-16">
              <p className="text-white text-center md:text-left leading-relaxed">
                {object.content}
              </p>
              <a href="mailto:uleague@tcpul.com">
                <button className="bg-white hover:bg-gray-300 text-gray-900 font-bold py-2 px-8 rounded-full mt-8 md:mt-16 block mx-auto md:mx-0">
                  Request More Information
                </button>
              </a>
            </div>
          </div>
        </TabPanel>
      )
    })
  }

  return (
    <Layout>
      <Seo title="Home" />
      <main>
        <section className="relative pt-16 pb-48">
          <div
            className="w-screen absolute -ml-24 bottom-0 left-0 right-0 z-0 overflow-hidden"
            id="cityWrapper"
          >
            <CityScape className="ml-24" />
          </div>
          <h3 className="text-xl font-thin mb-4 text-center sm:text-left">
            Serving the Greater Peoria, IL and Tri-County area
          </h3>
          <h1 className="text-5xl sm:text-6xl text-center sm:text-left leading-snug sm:leading-relaxed font-black">
            Empowering Communities.
            <br />
            <span className="italic font-semibold sm:font-bold">
              Changing Lives.
            </span>
          </h1>
          <p className="w-100% md:w-7/12 mt-8 z-10">
            The Tri-County Urban League mission is to advance the regional
            economy and quality of life in Central Illinois by promoting
            education and improving the employability skills, self-sufficiency
            and social well-being of African Americans and those in need.
          </p>
          <AnchorLink
            to="/#programs"
            title="Discover Programs"
            className="z-10"
          >
            <p className="text-sm text-red-700 mt-16">
              <span className="mr-4 text-xs">&#x25BC;</span> Scroll to Discover
              Programs
            </p>
          </AnchorLink>
        </section>
        <section className="bg-gray-700 px-24 py-16 -mx-24 mb-0">
          <h2 id="programs" className="text-white">
            Areas of Focus
          </h2>
          <div className="mt-4">
            <Tabs
              value={tabsValue}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="on"
            >
              <Tab label="Daycare" />
              <Tab label="Youth" />
              <Tab label="Education" />
              <Tab label="Workforce Development" />
              {/* <Tab label="Health & Wellness" /> */}
              <Tab label="Counseling" />
            </Tabs>
          </div>
          <Panels />
        </section>
      </main>
      <Footer />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "program-images" } }) {
      nodes {
        childrenImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`
