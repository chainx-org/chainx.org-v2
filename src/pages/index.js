import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import EcoSystem from '../components/EcoSystem'
import Scan from '../components/Scan'
import Wallet from '../components/Wallet'
import Properties from '../components/Properties'
import Assets from '../components/Assets'
import Banner from '../components/Banner'

const IndexPage = () => (
  <Layout>
    <SEO title="ChainX" />
    <Banner />
    <Assets />
    <Properties />
    <Wallet />
    <Scan />
    <EcoSystem />
  </Layout>
)

export default IndexPage
