import React from 'react'
import { IntlContextConsumer, useIntl } from "gatsby-plugin-intl"
import styled from 'styled-components'
import Roadmapeden from './roadmapen.webp'
import Roadmapedzh from './roadmapzh.webp'

const OuterSection = styled.section`
  display: flex;
  justify-content: space-around;
  background: #282828;
`

const InnerSection = styled.main`
  padding: 100px 0 130px;
  @media screen and (max-width: 768px) {
    padding: 60px 0;
  }
`

const Title = styled.div`
  font-size: 36px;
  color: #ffffff;
  text-align: center;
  line-height: 48px;
  margin-bottom: 80px;
`

const Details = styled.div`
  background: url(${Roadmapedzh});
  background-size: cover;
  @media screen and (min-width: 1400px) {
    width: 1060px;
    height: 1360px;
  }
  @media screen and (min-width: 1200px) and (max-width: 1399px) {
    width: 1060px;
    height: 1360px;
  }
  @media screen and (min-width: 1024px) and (max-width: 1199px) {
    width: 954px;
    height: 1224px;
  }
  @media screen and (min-width: 900px) and (max-width: 1023px) {
    width: 795px;
    height: 1020px;
  }
  @media screen and (min-width: 768px) and (max-width: 899px) {
    width: 530px;
    height: 680px;
  }
  @media screen and (min-width: 540px) and (max-width: 767px) {
    width: 530px;
    height: 680px;
  }
  @media screen and (min-width: 376px) and (max-width: 539px) {
    width: 265px;
    height: 340px;
  }
  @media screen and (max-width: 375px) {
    width: 265px;
    height: 340px;
  }
`



const Detailss = styled.div`
  background: url(${Roadmapeden});
  background-size: cover;
  @media screen and (min-width: 1400px) {
    width: 1000px;
    height: 1344px;
  }
  @media screen and (min-width: 1200px) and (max-width: 1399px) {
    width: 1000px;
    height: 1344px;
  }
  @media screen and (min-width: 1024px) and (max-width: 1199px) {
    width: 900px;
    height: 1208px;
  }
  @media screen and (min-width: 900px) and (max-width: 1023px) {
    width: 750px;
    height: 1008px;
  }
  @media screen and (min-width: 768px) and (max-width: 899px) {
    width: 520px;
    height: 698px;
  }
  @media screen and (min-width: 540px) and (max-width: 767px) {
    width: 500px;
    height: 672px;
  }
  @media screen and (min-width: 376px) and (max-width: 539px) {
    width: 250px;
    height: 336px;
  }
  @media screen and (max-width: 375px) {
    width: 250px;
    height: 336px;
  }
`

export default function() {

  const intl = useIntl()
  return (
    <OuterSection>
      <InnerSection>
        <Title>{intl.formatMessage({ id: "Roadmap" })}</Title>
        <IntlContextConsumer>
          {({ languages, language: currentLocale }) => (
            <div className="maplink">
              <Details style={{display: ( "zh" === currentLocale ) ? "block" : "none"}} />
              <Detailss style={{display: ( "en" === currentLocale ) ? "block" : "none"}} />
            </div>
          )}
        </IntlContextConsumer>
      </InnerSection>
    </OuterSection>
  )
}
