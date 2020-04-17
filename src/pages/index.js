import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import EcoSystem from '../components/EcoSystem'
import Scan from '../components/Scan'
import Wallet from '../components/Wallet'
import Properties from '../components/Properties'
import Assets from '../components/Assets'

const IndexPage = () => (
  <Layout>
    <SEO title="ChainX" />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <Assets />
    <Properties />
    <Wallet />
    <Scan />
    <EcoSystem />
  </Layout>
)

export default IndexPage
