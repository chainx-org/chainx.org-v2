import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Contract from '../components/Contract'
import DeployNode from '../components/DeployNode'
import Participator from '../components/Participator'
import Opreturn from '../components/Opreturn'
import News from '../components/News'

const SecondPage = () => (
  <Layout>
    <SEO title="ChainX" />
    <News />
    <Participator />
    <Opreturn />
    <DeployNode />
    <Contract />
  </Layout>
)

export default SecondPage
