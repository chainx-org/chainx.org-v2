import React from 'react'
import { IntlContextConsumer, useIntl } from "gatsby-plugin-intl"
import styled from 'styled-components'
import Bannerlogo from './banner-logo.png'
import BannerLogo from './bannerlogo.png'
import ChainXWhitePaper from './ChainXWhitePaper.pdf'
import ChainX from './ChainX.pdf'


const StyledSection = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 180px 0 0;
  background-image: linear-gradient(180deg, #000000 0%, #101010 66%, #2D2D2D 81%, #000000 100%);
`

export const InnerSection = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: end;
  @media screen and (min-width: 1400px) {
    align-items: end;
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
  @media screen and (min-width: 1400px) {
    margin: 60px 0 20px;
  }
  @media screen and (min-width: 1200px) and (max-width: 1399px) {
    margin: 10px 0 20px;
  }
  .paperlink {
    margin-bottom: 30px;
  }
`

const Title = styled.div`
  font-size: 48px;
  color: #FFFFFF;
  font-weight: bold;
  line-height: 70px;
  margin-bottom: 20px;
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
      width: 630px;
    }
  }
  @media screen and (max-width: 539px) {
    font-size: 26px;
    line-height: 46px;
  }
  
`

const Contents = styled.p`
  font-size: 18px;
  color: #FFFFFF;
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
  text-align: center;
  &:hover {
    text-decoration: none;
    color: #282828;
    background: rgba(246,201,74,.8);
  }
  &.txtzh {
    width: 128px;
    height: 44px;
    line-height: 44px;
  }
  &.txten {
    width: 172px;
    height: 44px;
    line-height: 44px;
  }
` 

const Bannerbgpic = styled.p`
  width: 429px;
  height: 588px;
  background: url(${BannerLogo});
  background-size: cover;
  @media screen and (min-width: 768px) and (max-width: 899px) {
    margin: 0 0 0 137px;
    width: 286px;
    height: 392px;
  }
  @media screen and (min-width: 900px) and (max-width: 1023px) {
    margin: 0;
    width: 215px;
    height: 294px;
  }
  @media screen and (min-width: 1024px) and (max-width: 1199px) {
    margin: 0 0 0 30px;
  }
  @media screen and (min-width: 1200px) and (max-width: 1399px) {
    margin: 0 0 0 50px;
    width: 286px;
    height: 392px;
  }
  @media screen and (min-width: 1400px) {
    margin: 0 0 0 90px;
  }
  @media screen and (max-width: 539px) {
    width: 320px;
    height: 346px;
  }
`

export default function() {

  const intl = useIntl()

  return (
    <StyledSection>
      <InnerSection>
        
          <IntlContextConsumer>
            {({ languages, language: currentLocale }) => (
              <Detail key="amache" className="ani animate__animated animate__fadeInLeft">
                <Title>
                  <p style={{display: ( "zh" === currentLocale ) ? "block" : "none"}}>让比特币更具价值</p>
                  <p style={{display: ( "en" === currentLocale ) ? "block" : "none"}}>Make bitcoin more valuable</p>
                </Title>
                <Contents style={{display: ( "zh" === currentLocale ) ? "block" : "none"}}>ChainX 是波卡生态最早上线的项目，致力于 BTC Layer 2 拓展、数字资产网关及波卡二级中继链的开发研究，以实现跨链资产互通，引领比特币 Cross-Defi 新方向。</Contents>
                <Contents style={{display: ( "en" === currentLocale ) ? "block" : "none"}}>ChainX, one of the earliest projects to launch in the Polkadot ecosystem, is committed to the research and application of Bitcoin Layer 2 expansion, its growth as a digital asset gateway and becoming a Polkadot second-layer relay chain for cross-chain asset exchange. A true pioneer in the development of Bitcoin Cross-DeFi.</Contents>
                <div className="paperlink">
                  <Linkbtn style={{display: ( "zh" === currentLocale ) ? "block" : "none"}} href={ChainX} className="txt txtzh" target="_blank" rel="noreferrer">
                    白皮书
                  </Linkbtn>
                  <Linkbtn style={{display: ( "en" === currentLocale ) ? "block" : "none"}} href={ChainXWhitePaper} className="txt txten" target="_blank" rel="noreferrer">
                    White Paper
                  </Linkbtn>
                </div>
              </Detail>
            )}
          </IntlContextConsumer>
        <div key="amache1" className="bglogo ani1 animate__animated animate__fadeInRight" >
          <Bannerbgpic />
        </div>
      </InnerSection>
    </StyledSection>
  )
}
