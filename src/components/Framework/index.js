import React, { useEffect } from 'react'
import { useIntl } from "gatsby-plugin-intl"
import styled from 'styled-components'
import Sysframework from './sysframework.png'
import jquery from 'jquery'

const StyledSection = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 100px 0;
  @media screen and (max-width: 539px) {
    padding: 70px 30px;
  }
`

export const InnerSection = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-image: linear-gradient(-45deg, #EFEFEF 0%, #ABABAB 100%);
  padding: 70px 40px;
  @media screen and (max-width:1023px){
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media screen and (min-width:375px) and (max-width:539px){
    padding: 70px 30px;
  }
  @media screen and (max-width: 375px) {
    padding: 70px 10px;
  }
  .ani21 {
    visibility: hidden;
    &.ShowAnimation_show {
      animation: show 1.1s ease;
      animation-fill-mode: forwards;
    }
  }
  .ani22 {
    visibility: hidden;
    &.ShowAnimation_show {
      animation: show 1.1s ease 0.3s;
      animation-fill-mode: forwards;
    }
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

const Detail = styled.div`
  margin-left: 120px;
  @media screen and (min-width:1024px) and (max-width:1280px){
    margin-left: 60px;
  }
  @media screen and (min-width:1280px) and (max-width:1295px){
    margin-left: 106px;
  }
  @media screen and (max-width:1023px){
    margin: 60px 0 0;
  }
`

const Title = styled.div`
  font-size: 36px;
  color: #282828;
  line-height: 48px;
`

const Contents = styled.p`
  font-size: 16px;
  color: #5C5C5C;
  line-height: 30px;
  margin: 20px 0 0;
  @media screen and (min-width:1024px) and (max-width:1280px){
    width: 360px;
  }
  @media screen and (min-width:768px) and (max-width:1023px){
    width: 480px;
  }
  @media screen and (min-width: 540px) and (max-width:767px){
    width: 360px;
  }
  @media screen and (min-width:1280px){
    width: 480px;
  }
  @media screen and (max-width: 375px) {
    width: 260px;
  }
` 

const Sysbgpic = styled.p`
  width: 600px;
  height: 300px;
  background: url(${Sysframework});
  background-size: cover;
  margin: 0;
  @media screen and (min-width:1024px) and (max-width:1280px){
    width: 402px;
    height: 200px;
  }
  @media screen and (min-width: 540px) and (max-width:767px){
    width: 402px;
    height: 200px;
  }
  @media screen and (max-width: 539px) {
    width: 300px;
    height: 150px;
  }
`

export default function() {

  useEffect(()=>{

    jquery(document).on("mousewheel DOMMouseScroll", function (event) {
      const delta = (event.originalEvent.wheelDelta && (event.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  
                  (event.originalEvent.detail && (event.originalEvent.detail > 0 ? -1 : 1));             
      let scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
      let winds = document.documentElement.clientHeight || document.body.clientHeight;
      const frameworks = jquery(".frameworks").offset().top;
      if((scrollTop+winds)> frameworks && delta < 0)  {
        jquery(".ani21").addClass("ShowAnimation_show")
        jquery(".ani22").addClass("ShowAnimation_show")
      }
    });
   
  })
  const intl = useIntl()

  return (
    <StyledSection>
      <InnerSection className="frameworks">
        <div className="ani21">
          <Sysbgpic />
        </div>
        <Detail className="ani22">
          <Title>{intl.formatMessage({ id: "system architecture" })}</Title>
          <Contents>{intl.formatMessage({ id: "ChainX 2.0 combines and coordinates various functions like hybrid PoS consensus, on-chain council governance, Wasm virtual machine, native execution of smart contracts, efficient light-client protocol, Off-chain worker, and multi-signature, what’s more it is highly compatible with Polkadot." })}</Contents>
        </Detail>
      </InnerSection>
    </StyledSection>
  )
}
