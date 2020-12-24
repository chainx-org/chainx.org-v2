import React from "react"
import SEO from "../components/seo"
import Layout from "../components/Layout"

import Header from "../components/Header"
import Banner from "../components/Banner"
import Platform from "../components/Platform"
import Framework from "../components/Framework"
import SysModule from "../components/SysModule"
import Economics from "../components/Economics"
import RoadMap from "../components/RoadMap"
import Footer from "../components/Footer"


class CampPage extends React.Component  {
  
  
  render() {
    return (
      <Layout>
      <SEO title="ChainX" />
      <Header />
      <Banner />
      <Platform />
      <Framework />
      <SysModule />
      <Economics />
      <RoadMap />
      <Footer />
    </Layout>
    )
  }

}

export default CampPage
