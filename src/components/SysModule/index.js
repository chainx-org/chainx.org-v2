import React, { useEffect } from 'react'
import { IntlContextConsumer, useIntl } from "gatsby-plugin-intl"
import styled from 'styled-components'
import jquery from 'jquery'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import "animate.css"

const OuterSection = styled.section`
  display: flex;
  justify-content: space-around;
  background: #FFF;
`

const InnerSection = styled.main`
  padding: 0 0 100px;
`

const Apps = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: nowrap;
  @media screen and (max-width:1300px){
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`

const Item = styled.div`
  visibility: hidden;
  &.ShowAnimation_show {
    animation: show 1.1s ease;
    animation-fill-mode: forwards;
  }
  @keyframes show {
    0% {
        pointer-events: none;
        visibility: visible;
        opacity: 0;
        transform: translate3d(0, 60%, 0);
    }
    100% {
        pointer-events: inherit;
        visibility: visible;
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
  }
  &.ani7 {
    animation-delay: 0.3s;
  }
  &.ani8 {
    animation-delay: 0.6s;
  }
  &.ani9 {
    animation-delay: 0.9s;
  }
  &.ani10 {
    animation-delay: 1.2s;
  }
  margin: 0 30px;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
 
  @media screen and (min-width:1400px){
    &:nth-child(1) {
      margin: 0 30px 0 0;
    }
    &:nth-child(4) {
      margin: 0 0 0 30px;
    }
  }
  @media screen and (min-width:1200px) and (max-width:1399px){
    margin: 0 20px;
  }
  @media screen and (min-width:1024px) and (max-width:1199px){
    margin: 0 10px;
  }
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
    width: 276px;
    @media screen and (min-width:1024px) and (max-width:1200px){
      width: 205px;
    }
    @media screen and (min-width:1200px) and (max-width:1400px){
      width: 220px;
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

  useEffect(()=>{

    jquery(document).on("mousewheel DOMMouseScroll", function (event) {
      const delta = (event.originalEvent.wheelDelta && (event.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  
                  (event.originalEvent.detail && (event.originalEvent.detail > 0 ? -1 : 1));             
      let scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
      let windo = document.documentElement.clientHeight || document.body.clientHeight;
      const sysmodules = jquery(".sysmodules").offset().top;
      if((scrollTop+windo) > sysmodules && delta < 0) {
        jquery(".ani7").addClass("ShowAnimation_show");
        jquery(".ani8").addClass("ShowAnimation_show");
        jquery(".ani9").addClass("ShowAnimation_show");
        jquery(".ani10").addClass("ShowAnimation_show");
      } 
    });
   
  })
  const intl = useIntl()
  return (
    <OuterSection>
      <InnerSection className="sysmodules">
        <Apps>
          <Item className="ani7">
            <Img fixed={Pcxmodule.childImageSharp.fixed} />
            <IntlContextConsumer>
              {({ languages, language: currentLocale }) => (
                <div>
                  <h5 style={{display: ( "zh" === currentLocale ) ? "block" : "none"}}>PCX 模块</h5>
                  <h5 style={{display: ( "en" === currentLocale ) ? "block" : "none"}}>PCX module</h5>
                </div>
              )}
            </IntlContextConsumer>
            <p>{intl.formatMessage({ id: "an operating program based on the native token PCX, it mainly includes functions performed by PCX such as staking, paying fees, on-chain governance, distributing inter-chain mining rewards, and backing Bitcoin financial derivatives. PCX is related to most programs running on ChainX." })}</p>
          </Item>
          <Item className="ani8">
            <Img fixed={Dexmodule.childImageSharp.fixed} />
            <IntlContextConsumer>
              {({ languages, language: currentLocale }) => (
                <div>
                  <h5 style={{display: ( "zh" === currentLocale ) ? "block" : "none"}}>PCX 模块</h5>
                  <h5 style={{display: ( "en" === currentLocale ) ? "block" : "none"}}>PCX module</h5>
                </div>
              )}
            </IntlContextConsumer>
            <p>{intl.formatMessage({ id: "A cross-asset transaction module, it promotes circulation of assets on different chains while minimizing transaction costs." })}</p>
          </Item>
          <Item className="ani9">
            <Img fixed={Acrosschain.childImageSharp.fixed} />
            <div><h5>{intl.formatMessage({ id: "Inter-chain module" })}</h5></div>            
            <p>{intl.formatMessage({ id: "an entering or exiting module for different chain assets and X-Token, it mainly includes an inter-chain transaction verification system, on-chain mintage program, trusteeship program, and deposit and withdrawal program for X-Token." })}</p>
          </Item>
          <Item className="ani10">
            <Img fixed={Relaymodule.childImageSharp.fixed} />
            <div><h5>{intl.formatMessage({ id: "Relay module" })}</h5></div>
            <p>{intl.formatMessage({ id: "a window of information exchange and verification between ChainX and outside chains, it mainly includes chain information update program, chain monitor program, and inter-chain information collection and transmission program." })}</p>
          </Item>
        </Apps>
      </InnerSection>
    </OuterSection>
  )
}
