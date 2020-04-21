import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Contract from '../components/Contract'
import DeployNode from '../components/DeployNode'
import Participator from '../components/Participator'

const SecondPage = () => (
  <Layout>
    <SEO title="ChainX" />
    <Participator />
    <DeployNode />
    <Contract />
  </Layout>
)

export default SecondPage
