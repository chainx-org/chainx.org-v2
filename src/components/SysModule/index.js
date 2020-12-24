import styled from 'styled-components'
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const OuterSection = styled.section`
  display: flex;
  justify-content: space-around;
  background: #FFF;
`

const InnerSection = styled.main`
  padding: 0 0 100px;
`

const Apps = styled.main`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: nowrap;
  @media screen and (max-width:1190px){
    display: flex;
    flex-wrap: wrap;
  }
`

const Item = styled.div`
  // @media screen and (max-width:750px){
  //   margin: 80px 0 0;
  // }
  margin: 0 30px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  h5{
    font-size: 20px;
    color: #282828;
    text-align: center;
    margin: 24px 0 14px;
  }
  p {
    font-size: 15px;
    color: #5C5C5C;
    text-align: center;
    line-height: 24px;
    @media screen and (min-width:375px){
      width: 276px;
    }
  }
`

export default function() {

  const { Pcxmodule, Dexmodule, Acrosschain, Relaymodule } = useStaticQuery(graphql`
    query {
      Pcxmodule: file(relativePath: { eq: "Pcxmodule.png" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      Dexmodule: file(relativePath: { eq: "Dexmodule.png" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      Acrosschain: file(relativePath: { eq: "Acrosschain.png" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      Relaymodule: file(relativePath: { eq: "Relaymodule.png" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  
  return (
    <OuterSection>
      <InnerSection>
        <Apps>
          <Item>
            <Img fixed={Pcxmodule.childImageSharp.fixed} />
            <h5>PCX 模块</h5>
            <p>基于原生资产 PCX 的运作程序。包含 PCX 质押挖矿，支付手续费，参与链上治理，发放跨链挖矿奖励，用于 BTC 金融衍生抵押等。</p>
          </Item>
          <Item>
            <Img fixed={Dexmodule.childImageSharp.fixed} />
            <h5>DEX 模块</h5>
            <p>在 ChainX 链上发生的不同资产之间的交易。促进异链资产快速流通且能最大化的节省交易费用。</p>
          </Item>
          <Item>
            <Img fixed={Acrosschain.childImageSharp.fixed} />
            <h5>跨链模块</h5>
            <p>异链资产及 X-Token 在进入或者转出 ChainX 网络时用到的模块。包括跨链交易验证系统，链上铸币程序，信托程序以及 X-Token 充提程序等。</p>
          </Item>
          <Item>
            <Img fixed={Relaymodule.childImageSharp.fixed} />
            <h5>中继模块</h5>
            <p>ChainX 网络与外界各原链传递信息及辅助验证的主要窗口。包含更新原链信息程序，原链监听程序及 ChainX 跨链信息收集传递程序等。</p>
          </Item>
        </Apps>
      </InnerSection>
    </OuterSection>
  )
}
