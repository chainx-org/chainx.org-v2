import React, { useEffect } from 'react'
import { useIntl } from "gatsby-plugin-intl"
import styled from 'styled-components'
import bitplat from './bitplat.png'
import numplat from './numplat.png'
import padplat from './padplat.png'
import jquery from 'jquery'

const PlatSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FFF;
`

const InnerSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  @media screen and (max-width: 767px){
    padding: 50px 30px 50px;
  }
  position: relative;
  // &:before {
  //   position: absolute;
  //   top: 0;
  //   width: 100px;
  //   height: 3px;
  //   background: #F6C94A;
  //   content: "";
  // }
  &:after {
    position: absolute;
    bottom: 0;
    width: 100px;
    height: 3px;
    background: #F6C94A;
    content: "";
  }
`
const Item = styled.div`
  .ani2 {
    animation-delay: 0.3s;
  }
  .ani3 {
    animation-delay: 0.6s;
  }
  .ani4 {
    animation-delay: 1.2s;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 899px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    &.picCon {
      display: flex;
      flex-direction: column-reverse;
    }
  }
`

const BitPic = styled.div`
  width: 200px;
  height: 200px;
  background: url(${bitplat});
  background-size: cover;
  margin: 0 240px;
  @media screen and (min-width:1024px) and (max-width:1200px){
    margin: 0 60px;
  }
  @media screen and (min-width:1200px) and (max-width:1400px){
    margin: 0 130px;
  }
  @media screen and (min-width: 900px) and (max-width:1023px){
    margin: 60px 50px;
  }
  @media screen and (max-width: 899px){
    margin: 60px 0;
  }
`
const NumPic = styled.div`
  width: 200px;
  height: 200px;
  background: url(${numplat});
  background-size: cover;
  margin: 120px 240px;
  @media screen and (min-width:1024px) and (max-width:1200px){
    margin: 100px 60px;
  }
  @media screen and (min-width:1200px) and (max-width:1400px){
    margin: 100px 130px;
  }
  @media screen and (min-width: 900px) and (max-width:1023px){
    margin: 60px 50px;
  }
  @media screen and (max-width: 899px){
    margin: 60px 0;
  }
  visibility: hidden;
  &.ShowAnimation_show {
    animation: show 1.1s ease 0.3s;
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
`
const PadPic = styled.div`
  width: 200px;
  height: 200px;
  background: url(${padplat});
  background-size: cover;
  margin: 0 240px;
  @media screen and (min-width:1024px) and (max-width:1200px){
    margin: 0 60px;
  }
  @media screen and (min-width:1200px) and (max-width:1400px){
    margin: 0 130px;
  }
  @media screen and (min-width: 900px) and (max-width:1023px){
    margin: 60px 50px;
  }
  @media screen and (max-width: 899px){
    margin: 60px 0;
  }
  visibility: hidden;
  &.ShowAnimation_show {
    animation: show 1.1s ease 0.3s;
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
`

const PlatMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  &.anishow2, .anishow3 {
    visibility: hidden;
  }
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

`

const PlatTit = styled.div`
  font-size: 30px;
  color: #282828;
  margin-bottom: 20px;
  line-height: 30px;
  @media screen and (min-width: 1300px){
    width: 560px;
  }
`

const PlatCon = styled.p`
  font-size: 16px;
  color: #5C5C5C;
  margin-bottom: 16px;
  @media screen and (min-width:1024px){
    width: 580px;
  }
  @media screen and (min-width: 900px) and (max-width:1023px){
    width: 500px;
  }
  @media screen and (min-width: 768px) and (max-width:899px){
    width: 620px;
  }
`

export default function() {

  const intl = useIntl()
  
  useEffect(()=>{

    jquery(document).on("mousewheel DOMMouseScroll", function (event) {
      const delta = (event.originalEvent.wheelDelta && (event.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  
                  (event.originalEvent.detail && (event.originalEvent.detail > 0 ? -1 : 1));             
      let scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
      let wind = document.documentElement.clientHeight || document.body.clientHeight;
      let ani2 = jquery(".ani2").offset().top;
      let ani3 = jquery(".ani3").offset().top;
      let ani4 = jquery(".ani4").offset().top;
      if((scrollTop+wind) > ani2  && delta < 0) {
        jquery(".ani2").addClass("animate__fadeInUp");
      }
      if ((scrollTop+wind) > ani3 && delta < 0) {
        jquery(".anishow2").addClass("ShowAnimation_show")
        jquery(".anihidden2").addClass("ShowAnimation_show")
      } 
      if ((scrollTop+wind) > ani4 && delta < 0) {
        jquery(".anishow3").addClass("ShowAnimation_show")
        jquery(".anihidden3").addClass("ShowAnimation_show")
      } 
    });
  })
 

  return (
    <PlatSection>
      <InnerSection className="platforms">
        <Item key="amache2" className="ani2 animate__animated animate__fadeInUp">
          <PlatMain className="anishow1">
            <PlatTit>{intl.formatMessage({ id: "Bitcoin financial platform" })}</PlatTit>
            <PlatCon>{intl.formatMessage({ id: "Bitcoin, with its market value reaching 470 billion U.S. dollars, holds the key to the digital currency world and leads towards deeper blockchain breakthroughs, which indicates that Bitcoin is being re-recognized as a payment method, perhaps only a tip of the iceberg in terms of its full potential." })}</PlatCon>
            <PlatCon>{intl.formatMessage({ id: "ChainX committed to the research on the expansion of Bitcoin’s Layer2 financial platform strives to promote Bitcoin’s value flow, enrich its financial derivatives and improve the hedging tools." })}</PlatCon>
          </PlatMain>
          <BitPic className="anihidden1" />
        </Item>
        <Item className="picCon ani3">
          <NumPic className="anihidden2" /> 
          <PlatMain className="anishow2">
            <PlatTit>{intl.formatMessage({ id: "Digital asset gateway" })}</PlatTit>
            <PlatCon>{intl.formatMessage({ id: "ChainX asset gateway is composed of two parts: decentralized Bitcoin trusteeship and inter-chain asset mirroring." })}</PlatCon>
            <PlatCon>{intl.formatMessage({ id: "Users deposit and collateralize bitcoins for X-BTC which is used in transactions with synthetic assets of other cryptocurrencies, so that all sorts of cryptos can be exchanged and traded on the same chain." })}</PlatCon>
          </PlatMain>
        </Item>
        <Item className="ani4">
          <PlatMain className="anishow3">
            <PlatTit>{intl.formatMessage({ id: "Polkadot second-layer relay chain" })}</PlatTit>
            <PlatCon>{intl.formatMessage({ id: "Parachains are developed using different types of blockchain technology, and relay chains are responsible for safeguarding the network’s co-sharing consensus and facilitating inter-chain transactions among parachains. Relay chain itself does not deploy any applications. It is parachains that develop and deploy applications." })}</PlatCon>
            <PlatCon>{intl.formatMessage({ id: "Polkadot focusing on efficient inter-chain connection within its ecosystem advances the entire blockchain development to a new level and looks set to usher in blockchain 3.0. ChainX will run as the second-layer network to Polkadot after it releases the 2.0 version." })}</PlatCon>
          </PlatMain>
          <PadPic className="anihidden3" />
        </Item>
      </InnerSection>
    </PlatSection>
  )
}
