import React from 'react'
import { useIntl } from "gatsby-plugin-intl"
import styled from 'styled-components'
import Bannerlogo from './banner-logo.png'


const StyledSection = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 160px 0 52px;

`

export const InnerSection = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (min-width: 1400px) {
    align-items: center;
  }
  @media screen and (max-width: 899px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 768px) {
    padding: 0 30px;
    .bglogo {
      display: flex;
      justify-content: center;
    }
  }
  
`

const Detail = styled.div`
  margin: 20px 0;
`

const Title = styled.div`
  font-size: 48px;
  color: #282828;
  font-weight: bold;
  line-height: 70px;
  margin-top: 30px;
  p {
    margin-bottom: 0px;
    @media screen and (min-width: 1024px) and (max-width: 1200px) {
      width: 470px;
      font-size: 42px;
    }
    @media screen and (min-width: 768px) and (max-width: 899px) {
      width: 530px;
    }
    @media screen and (min-width: 900px) and (max-width: 1023px) {
      width: 396px;
      font-size: 26px;
      line-height: 46px;
    }
    @media screen and (min-width: 1200px) {
      width: 530px;
    }
  }
  @media screen and (max-width: 539px) {
    font-size: 26px;
    line-height: 46px;
  }
  
`

const Contents = styled.p`
  font-size: 18px;
  color: #5C5C5C;
  line-height: 30px;
  margin: 4px 0 40px;
  @media screen and (min-width: 1024px) and (max-width: 1200px) {
    width: 470px;
  }
  @media screen and (min-width: 768px) and (max-width: 899px) {
    width: 620px;
  }
  @media screen and (min-width: 900px) and (max-width: 1023px) {
    width: 376px;
  }
  @media screen and (min-width: 1200px) {
    width: 620px;
  }
` 

const Linkbtn = styled.a`
  text-decoration: none;
  font-size: 16px;
  color: #282828;
  background: rgba(246,201,74,1);
  border-radius: 6px;
  padding: 13px 40px;
  &:hover {
    text-decoration: none;
    color: #282828;
    background: rgba(246,201,74,.8);
  }
` 

const Bannerbgpic = styled.p`
  width: 400px;
  height: 440px;
  background: url(${Bannerlogo});
  background-size: cover;
  @media screen and (min-width: 768px) and (max-width: 899px) {
    margin: 0 0 0 137px;
  }
  @media screen and (min-width: 900px) and (max-width: 1023px) {
    margin: 0;
    width: 360px;
    height: 396px;
  }
  @media screen and (min-width: 1024px) and (max-width: 1200px) {
    margin: 0 0 0 30px;
  }
  @media screen and (min-width: 1200px) and (max-width: 1399px) {
    margin: 0;
  }
  @media screen and (min-width: 1400px) {
    margin: 0 0 0 90px;
  }
  @media screen and (max-width: 539px) {
    width: 300px;
    height: 330px;
  }
`

export default function() {

  const intl = useIntl()

  return (
    <StyledSection>
      <InnerSection>
        <Detail key="amache" className="ani animate__animated animate__fadeInLeft">
          <Title>
            <p>{intl.formatMessage({ id: "POS version of BTC economic model" })}</p>
            <p>{intl.formatMessage({ id: "tens of thousands of cryptocurrencies cross-chain BTC Layer2 derivative platform" })}</p>
          </Title>
          <Contents>{intl.formatMessage({ id: "ChainX, the earliest launched project in polkadot ecosystem,ChainX is committed to the research and application of Bitcoin layer 2 expansion, digital asset gateway and Polkadot second-layer relay chain,To realize cross-chain asset exchange, leading the new direction of Bitcoin Cross-DEFi." })}</Contents>
          <Linkbtn href="/">{intl.formatMessage({ id: "White Paper" })}</Linkbtn>
        </Detail>
        <div key="amache1" className="bglogo ani1 animate__animated animate__fadeInRight" >
          <Bannerbgpic />
        </div>
      </InnerSection>
    </StyledSection>
  )
}
