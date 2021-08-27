import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import CityScape from "../images/Peoria_Skyline.svg"
import { Tabs, Tab } from "@material-ui/core"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => {
  const [tabsValue, setTabsValues] = React.useState(0)

  const handleChange = (event, newValue) => {
    setTabsValues(newValue)
  }

  const TabPanel = ({ children, value, index }) => {
    return <div>{value === index && <>{children}</>}</div>
  }

  return (
    <Layout>
      <Seo title="Home" />
      <div className="relative pt-16 pb-48">
        <div className="w-screen absolute -ml-24 bottom-0 left-0 right-0 z-0 overflow-hidden">
          <CityScape className="ml-24" />
        </div>
        <h3 className="text-xl font-thin mb-4">
          Serving the Greater Peoria, IL and Tri-County area
        </h3>
        <h1 className="text-6xl leading-relaxed font-black">
          Empowering Communities.
          <br />
          Changing Lives.
        </h1>
        <p className="w-7/12 mt-8 z-10">
          The Tri-County Urban League mission is to advance the regional economy
          and quality of life in Central Illinois by promoting education and
          improving the employability skills, self-sufficiency and social
          well-being of African Americans and those in need. Throughout
        </p>
        <AnchorLink to="/#programs" title="Discover Programs" className="z-10">
          <button className="mt-12 bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-8 rounded-full ">
            Discover Programs
          </button>
        </AnchorLink>
      </div>
      <div className="bg-gray-700 px-24 py-16 -mx-24 mb-0">
        <h2 id="programs" className="text-white">
          Areas of Focus
        </h2>
        <div className="mt-4">
          <Tabs
            value={tabsValue}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab label="Daycare" />
            <Tab label="Youth" />
            <Tab label="Education" />
            <Tab label="Workforce Development" />
            <Tab label="Health & Wellness" />
            <Tab label="Counseling" />
          </Tabs>
        </div>
        <TabPanel value={tabsValue} index={0}>
          <div className="flex">
            <div className="w-24 h-24" />
            <p className="p-16">Lalalalal</p>
          </div>
        </TabPanel>
        <TabPanel value={tabsValue} index={1}>
          <div className="flex">
            <div className="w-24 h-24" />
            <p className="p-16">Lalalalal</p>
          </div>
        </TabPanel>
        <TabPanel value={tabsValue} index={2}>
          <div className="flex">
            <div className="w-24 h-24" />
            <p className="p-16">Lalalalal</p>
          </div>
        </TabPanel>
        <TabPanel value={tabsValue} index={3}>
          <div className="flex">
            <div className="w-24 h-24" />
            <p className="p-16">Lalalalal</p>
          </div>
        </TabPanel>
        <TabPanel value={tabsValue} index={4}>
          <div className="flex">
            <div className="w-24 h-24" />
            <p className="p-16">Lalalalal</p>
          </div>
        </TabPanel>
        <TabPanel value={tabsValue} index={5}>
          <div className="flex">
            <div className="w-24 h-24" />
            <p className="p-16">Lalalalal</p>
          </div>
        </TabPanel>
      </div>
    </Layout>
  )
}

export default IndexPage
