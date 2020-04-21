import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Contract from '../components/Contract'
import DeployNode from '../components/DeployNode'

const SecondPage = () => (
  <Layout>
    <SEO title="ChainX" />
    <DeployNode />
    <Contract />
  </Layout>
)

export default SecondPage
