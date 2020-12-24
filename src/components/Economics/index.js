import styled from 'styled-components'
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

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
  &:after {
    position: absolute;
    bottom: 0;
    width: 100px;
    height: 3px;
    background: #F6C94A;
    content: "";
  }
`

const ItemTit = styled.div`
  padding: 70px 160px 80px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  background-image: linear-gradient(-45deg, #CBCBCB 0%, #F9DA82 100%);
  @media screen and (min-width:1024px) and (max-width:1280px){
    padding: 70px 151px 80px;
  }
  @media screen and (min-width:1280px) and (max-width:1300px){
    padding: 70px 161px 80px;
  }
  @media screen and (max-width:1023px){
    padding: 50px 70px 80px;
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
  @media screen and (min-width:1024px) and (max-width:1280px){
    width: 600px;
  }
  @media screen and (min-width:1280px) and (max-width:1300px){
    width: 890px;
  }
  @media screen and (min-width:768px) and (max-width:1023px){
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
  @media screen and (min-width:1280px) and (max-width:1300px){
    padding: 50px 58px 80px;
  }
  // @media screen and (min-width:1200px){
  //   width: 500px;
  //   height: 315px;
  // }
  // @media screen and (min-width:1080px) and (max-width:1200px) {
  //   width: 500px;
  //   height: 315px;
  //   margin: 60px 10px;
  // }
  // @media screen and (max-width:1080px) {
  //   width: 340px;
  //   height: 315px;
  //   margin: 60px 10px;
  // }

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
  @media screen and (min-width:1300px){
    width: 500px;
  }
  @media screen and (min-width:1024px) and (max-width:1280px){
    width: 310px;
  }
  @media screen and (min-width:1280px) and (max-width:1300px){
    width: 490px;
  }
  @media screen and (min-width:768px) and (max-width:1023px){
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
  @media screen and (min-width:1280px) and (max-width:1300px){
    padding: 50px 58px 80px;
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


  return (
    <OuterSection>
      <InnerSection>
        <ItemTit>
          <EconTit>经济系统</EconTit>
          <Classtit>ChainX 发行的加密货币 PCX（P 代表 Polkadot），总量 2100万枚，前 21 万个分红周期（即初始轮分红周期），每个分红周期奖励为 50 个 PCX。次轮分红周期奖励为 25个 PCX，依次类推。初始轮分红周期发行量的 20% 归创始团队所有，用于持续性的开发经费。之后的发行量将全部归社区所有，创始团队将只占总量的 10%。</Classtit>
          <Linkbtn href="/">了解更多</Linkbtn>
        </ItemTit>
        <Apps>
          <ItemSys>
            <Img fixed={consensus.childImageSharp.fixed} />
            <SysTit>共识系统</SysTit>
            <SysCon>ChainX 采用波卡全新的共识机制即“Babe+Grandpa”混合共识机制。该共识机制最显著的特点就是将确定最终性的任务从区块生产的流程中分离出来，BABE 模块 6秒稳定出块，Grandpa 进行最终确认。</SysCon>
            <Linkbtns href="/">了解更多</Linkbtns>
          </ItemSys>
          <Item>
            <Img fixed={community.childImageSharp.fixed} />
            <SysTit>社区自治</SysTit>
            <SysCon>为推动社区的去中心化治理，ChainX 采用波卡三院制（Tricameral）的治理结构，包括公投议院，理事会和技术委员会。除此之外，通过引入 X - Association 和国库概念进一步完善社区自治的框架。</SysCon>
            <Linkbtns href="/">了解更多</Linkbtns>
          </Item>
        </Apps>
      </InnerSection>
    </OuterSection>
  )
}
