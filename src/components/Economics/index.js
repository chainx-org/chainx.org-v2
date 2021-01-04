import React, { useEffect } from 'react'
import { IntlContextConsumer, useIntl } from "gatsby-plugin-intl"
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import jquery from 'jquery'
import ChainXWhitePaper from './ChainXWhitePaper.pdf'
import ChainX from './ChainX.pdf'

const OuterSection = styled.section`
  display: flex;
  justify-content: space-around;
  background: #FFFFFF;
`

const InnerSection = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  @media screen and (max-width:767px){
    padding: 100px 30px;
  }
  position: relative;
  &:before {
    position: absolute;
    top: 0;
    width: 100px;
    height: 3px;
    background: #F6C94A;
    content: "";
  }
  // &:after {
  //   position: absolute;
  //   bottom: 0;
  //   width: 100px;
  //   height: 3px;
  //   background: #F6C94A;
  //   content: "";
  // }
`

const ItemTit = styled.div`
  padding: 70px 160px 80px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(-45deg, #CBCBCB 0%, #F9DA82 100%);
  @media screen and (min-width:1024px) and (max-width:1200px){
    padding: 70px 150px 80px;
  }
  @media screen and (min-width:1200px) and (max-width:1400px){
    padding: 70px 75px 80px;
  }
  @media screen and (max-width:767px){
    padding: 50px 70px 80px;
  }
  @media screen and (min-width:900px) and (max-width:1023px){
    padding: 50px 60px 70px;
  }
  @media screen and (min-width:768px) and (max-width:899px){
    padding: 50px 60px 70px;
  }
  @media screen and (max-width:414px){
    padding: 50px 25px 80px;
  }
  visibility: hidden;
  &.ShowAnimation_show {
    animation: show 1s ease 0.3s;
    animation-fill-mode: forwards;
  }
  @keyframes show {
    0% 
    {
      pointer-events: none;
      visibility: visible;
      opacity: 0;
      transform: translate3d(0, 60%, 0);
    }
    100% 
    {
      pointer-events: inherit;
      visibility: visible;
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`

const  EconTit = styled.div`
  font-size: 36px;
  color: #282828;
  text-align: center;
  line-height: 48px;
  margin-bottom: 24px;
`
const Classtit = styled.p`
  @media screen and (min-width:1280px){
    width: 960px;
  }
  @media screen and (min-width:1024px) and (max-width:1200px){
    width: 600px;
  }
  @media screen and (min-width:1200px) and (max-width:1400px){
    width: 890px;
  }
  @media screen and (min-width:900px) and (max-width:1023px){
    width: 680px;
  }
  @media screen and (min-width:768px) and (max-width:899px){
    width: 500px;
  }
  font-size: 16px;
  color: #282828;
  text-align: center;
  line-height: 28px;
`

const  Linkbtn = styled.a`
  text-decoration: none;
  font-size: 14px;
  color: #FFFFFF;
  text-align: center;
  background: rgba(40,40,40,1);
  border-radius: 6px;
  padding: 12px 30px;
  &:hover {
    text-decoration: none;
    color: #FFFFFF;
    background: rgba(40,40,40,.8);
  }
`

const Apps = styled.main`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: nowrap;
  @media screen and (max-width:1023px){
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`

const ItemSys = styled.div`
  padding: 50px 70px 80px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  background: #F9F9F9;
  @media screen and (min-width:1200px) and (max-width:1400px){
    padding: 50px 58px 80px;
  }
  @media screen and (min-width:768px) and (max-width:899px){
    padding: 50px 60px 60px;
  }
  @media screen and (max-width:414px){
    padding: 50px 27px 80px;
  }
  visibility: hidden;
  &.ShowAnimation_show {
    animation: show 1s ease 0.3s;
    animation-fill-mode: forwards;
  }
  @keyframes show {
    0% 
    {
      pointer-events: none;
      visibility: visible;
      opacity: 0;
      transform: translate3d(0, 60%, 0);
    }
    100% 
    {
      pointer-events: inherit;
      visibility: visible;
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`

const  SysTit = styled.div`
  font-size: 30px;
  color: #282828;
  text-align: center;
  line-height: 40px;
  margin: 30px 0 20px;
`

const  SysCon = styled.p`
  font-size: 16px;
  color: #5C5C5C;
  text-align: center;
  margin-bottom: 40px;
  @media screen and (min-width:1400px){
    width: 500px;
  }
  @media screen and (min-width:1024px) and (max-width:1200px){
    width: 310px;
  }
  @media screen and (min-width:1200px) and (max-width:1400px){
    width: 404px;
  }
  @media screen and (min-width:900px) and (max-width:1023px){
    width: 660px;
  }
  @media screen and (min-width:768px) and (max-width:899px){
    width: 500px;
  }
`

const  Linkbtns = styled.a`
  text-decoration: none;
  font-size: 14px;
  color: #282828;
  text-align: center;
  border: 1px solid #F6C94A;
  border-radius: 6px;
  padding: 12px 30px;
  &:hover {
    text-decoration: none;
    color: #282828;
    background: #F6C94A;
  }
`

const Item = styled.div`
  padding: 50px 70px 80px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  background: #EFEFEF;
  @media screen and (min-width:1200px) and (max-width:1400px){
    padding: 50px 58px 80px;
  }
  @media screen and (min-width:768px) and (max-width:899px){
    padding: 50px 60px 60px;
  }
  @media screen and (max-width:414px){
    padding: 50px 23px 80px;
  }
  visibility: hidden;
  &.ShowAnimation_show {
    animation: show 1s ease 0.6s;
    animation-fill-mode: forwards;
  }
  @keyframes show {
    0% 
    {
      pointer-events: none;
      visibility: visible;
      opacity: 0;
      transform: translate3d(0, 60%, 0);
    }
    100% 
    {
      pointer-events: inherit;
      visibility: visible;
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`


export default function() {
  
  const { consensus, community } = useStaticQuery(graphql`
    query {
      consensus: file(relativePath: { eq: "consensus.png" }) {
        childImageSharp {
          fixed(width: 120, height: 120) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      community: file(relativePath: { eq: "community.png" }) {
        childImageSharp {
          fixed(width: 120, height: 120) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  useEffect(()=>{

    jquery(document).on("mousewheel DOMMouseScroll", function (event) {
      const delta = (event.originalEvent.wheelDelta && (event.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  
                  (event.originalEvent.detail && (event.originalEvent.detail > 0 ? -1 : 1));             
      let scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
      const ani11 = jquery(".ani11").offset().top;
      const ani12 = jquery(".ani12").offset().top;
      let windsd = document.documentElement.clientHeight || document.body.clientHeight;
      if((scrollTop+windsd)> ani11 && delta < 0)  {
        jquery(".ani11").addClass("ShowAnimation_show");
      } 
      if((scrollTop+windsd)> ani12 && delta < 0)  {
        jquery(".ani12").addClass("ShowAnimation_show");
        jquery(".ani13").addClass("ShowAnimation_show");
      } 
    });

    jquery(document).on("touchmove", function (event) {          
      let scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
      const ani11 = jquery(".ani11").offset().top;
      const ani12 = jquery(".ani12").offset().top;
      let windsd = document.documentElement.clientHeight || document.body.clientHeight;
      if((scrollTop+windsd)> ani11)  {
        jquery(".ani11").addClass("ShowAnimation_show");
      } 
      if((scrollTop+windsd)> ani12)  {
        jquery(".ani12").addClass("ShowAnimation_show");
        jquery(".ani13").addClass("ShowAnimation_show");
      } 
    });

  })

  const intl = useIntl()

  return (
    <OuterSection>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) => (
          <InnerSection className="economics">
            <ItemTit className="ani11">
              <EconTit>{intl.formatMessage({ id: "Economic system" })}</EconTit>
              <Classtit style={{display: ( "zh" === currentLocale ) ? "block" : "none"}}>ChainX 将发行加密货币 PCX（P 代表 Polkadot），总量2100万枚，前 21 万个分红周期，即初始轮分红周期，每个分红周期奖励为 50 个 PCX。次轮分红周期奖励为25个PCX，依次类推。初始轮分红周期发行量的20% 归创始团队所有，用于持续性的开发经费。之后的发行量将全部归社区所有，创始团队将只占总量的10%。</Classtit>
              <Classtit style={{display: ( "en" === currentLocale ) ? "block" : "none"}}>The cryptocurrency PCX (P stands for Polkadot) issued by ChainX has 21 million supply in total. In the initial dividend round or the first 210,000 cycles, 50 PCXs are distributed as rewards in each cycle, and 25 PCXs for the second round. 20% of the issuance in the initial round which accounts for 10% of the total goes to the founding team for ongoing development and all the subsequent issuance goes to the community.</Classtit>
              <div className="paperlink">
                <Linkbtn style={{display: ( "zh" === currentLocale ) ? "block" : "none"}} href={ChainX} className="txt" target="_blank" rel="noreferrer">
                  查看详情
                </Linkbtn>
                <Linkbtn style={{display: ( "en" === currentLocale ) ? "block" : "none"}} href={ChainXWhitePaper} className="txt" target="_blank" rel="noreferrer">
                  Detail
                </Linkbtn>
              </div>
            </ItemTit>
            <Apps>
              <ItemSys className="ani12">
                <Img fixed={consensus.childImageSharp.fixed} />
                <SysTit>{intl.formatMessage({ id: "Consensus algorithm" })}</SysTit>
                <SysCon style={{display: ( "zh" === currentLocale ) ? "block" : "none"}}>ChainX 采用波卡全新的共识机制即“Babe+Grandpa”混合共识机制。该共识机制最显著的特点就是将确定最终性的任务从区块生产的流程中分离出来，Babe模块 6秒稳定出块，Grandpa进行最终确认。</SysCon>
                <SysCon style={{display: ( "en" === currentLocale ) ? "block" : "none"}}>ChainX adopts the 'Babe+Grandpa' hybrid consensus, Polkadot's brand-new mechanism whose most notable feature is to separate block confirmation from block generation with Babe module generating blocks every 6 seconds and Grandpa making the final confirmation.</SysCon>
                <div className="paperlinks">
                  <Linkbtns style={{display: ( "zh" === currentLocale ) ? "block" : "none"}} href={ChainX} className="txt" target="_blank" rel="noreferrer">
                    查看详情
                  </Linkbtns>
                  <Linkbtns style={{display: ( "en" === currentLocale ) ? "block" : "none"}} href={ChainXWhitePaper} className="txt" target="_blank" rel="noreferrer">
                    Detail
                  </Linkbtns>
                </div>
              </ItemSys>
              <Item className="ani13">
                <Img fixed={community.childImageSharp.fixed} />
                <SysTit>{intl.formatMessage({ id: "Community autonomy" })}</SysTit>
                <SysCon style={{display: ( "zh" === currentLocale ) ? "block" : "none"}}>为推动社区的去中心化治理，ChainX依据波卡采用三院制（Tricameral）的治理结构，包括公投议院，理事会和技术委员会。除了链上三院制外，通过引入了 X - Association 和国库的概念完善社区自治的框架。</SysCon>
                <SysCon style={{display: ( "en" === currentLocale ) ? "block" : "none"}}>ricameral governance structure is adopted by ChainX at the advice of Polkadot for better decentralized community governance, including Referendum Chamber, Council and Technical Committee. In addition to the three, X-Association and Treasury are introduced to enrich the framework of community autonomy.</SysCon>
                <div className="paperlinks">
                  <Linkbtns style={{display: ( "zh" === currentLocale ) ? "block" : "none"}} href={ChainX} className="txt" target="_blank" rel="noreferrer">
                    查看详情
                  </Linkbtns>
                  <Linkbtns style={{display: ( "en" === currentLocale ) ? "block" : "none"}} href={ChainXWhitePaper} className="txt" target="_blank" rel="noreferrer">
                    Detail
                  </Linkbtns>
                </div>
              </Item>
            </Apps>
          </InnerSection>
        )}
      </IntlContextConsumer>
    </OuterSection>
  )
}
