import React, { useEffect } from 'react'
import { useIntl } from "gatsby-plugin-intl"
import styled from 'styled-components'
import jquery from 'jquery'

const OuterSection = styled.section`
  display: flex;
  justify-content: space-around;
  background: #fff;
`

const InnerSection = styled.main`
  padding: 60px 0 200px;
  @media screen and (max-width: 768px) {
    padding: 60px 0;
  }
`

const  Gradualhr = styled.div`
  width: 1280px;
  height: 2px;
  background-image: linear-gradient(-63deg, rgba(246,201,74,0.10) 0%, #F6C94A 55%, rgba(246,201,74,0.20) 95%);
  @media screen and (min-width: 900px) and (max-width: 1023px) {
    width: 800px;
  }
  @media screen and (min-width: 1024px) and (max-width: 1280px) {
    width: 900px;
  }
  @media screen and (min-width: 1280px) and (max-width: 1300px) {
    width: 1180px;
  }
`

const Title = styled.div`
  font-size: 36px;
  color: #282828;
  text-align: center;
  line-height: 48px;
  margin-bottom: 80px;
`

const Horizontal = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 900px) {
    display: none;
  }
`
const HorizontalList = styled.div`
  display: flex;
  align-items: flex-end;
`

const HorizontalLists = styled.div`
  display: flex;
  align-items: flex-start;
`

const HorizontalItem = styled.div`
  width: 382px;
  position: relative;
  padding: 0 0 21px 18px;
  margin-left: 20px;
  visibility: hidden;
  &.ShowAnimation_show {
    animation: show 1s ease;
    animation-fill-mode: forwards;
  }
  &.ani15 {
    animation-delay: 0.2s;
  }
  &.ani16 {
    animation-delay: 0.6s;
  }
  &.ani17 {
    animation-delay: 1.0s;
  }
  @media screen and (min-width: 1024px) and (max-width: 1280px) {
    width: 260px;
  }
  @media screen and (min-width: 900px) and (max-width: 1023px) {
    width: 200px;
  }
  &:before {
    content: '';
    width: 2px;
    height: 94px;
    background-image: linear-gradient(-63deg, rgba(246,201,74,0.10) 0%, #F6C94A 100%);
    display: inline-block;
    position: absolute;
    left: 0;
  }
  &:nth-child(2):before {
    content: '';
    width: 2px;
    height: 116px;
    background-image: linear-gradient(-63deg, rgba(246,201,74,0.10) 0%, #F6C94A 100%);
    display: inline-block;
    position: absolute;
    left: 0;
  }
  &:after {
    content: '';
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-image: linear-gradient(45deg, #FEF6E0 0%, #F6C94A 100%);
    border: 2px solid #FFFFFF;
    display: inline-block;
    position: absolute;
    bottom: -6px;
    left: -5px;
  }
  .tit {
    font-size: 20px;
    color: #E2B534;
    margin-bottom: 8px;
  }
  .txt {
    font-size: 15px;
    color: #5C5C5C;
    margin: 0;
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

const HorizontalItems = styled.div`
  width: 388px;
  position: relative;
  padding: 21px 0 0 18px;
  visibility: hidden;
  &.ShowAnimation_show {
    animation: show 1s ease;
    animation-fill-mode: forwards;
  }
  &.ani18 {
    animation-delay: 0.4s;
  }
  &.ani19 {
    animation-delay: 0.8s;
  }
  &.ani20 {
    animation-delay: 1.2s;
  }
  @media screen and (min-width: 1024px) and (max-width: 1280px) {
    width: 280px;
    &:nth-child(1) {
      margin-left: 160px;
    }
  }
  @media screen and (min-width: 900px) and (max-width: 1023px) {
    margin-left: 40px;
    &:nth-child(1) {
      margin-left: 120px;
    }
  }
  @media screen and (min-width: 1280px) {
    &:nth-child(1) {
      margin-left: 230px;
    }
  }
  &:before {
    content: '';
    width: 2px;
    height: 72px;
    background-image: linear-gradient(rgba(246,201,74,0.10) 0%, #F6C94A 100%);
    display: inline-block;
    position: absolute;
    left: 0;
    top: 10px;
  }
  &:nth-child(2):before {
    content: '';
    width: 2px;
    height: 116px;
    background-image: linear-gradient(rgba(246,201,74,0.10) 0%, #F6C94A 100%);
    display: inline-block;
    position: absolute;
    left: 0;
    top: 10px;
  }
  .tit {
    font-size: 20px;
    color: #E2B534;
    margin-bottom: 8px;
    position: relative;
    &:before {
      content: '';
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-image: linear-gradient(45deg, #FEF6E0 0%, #F6C94A 100%);
      border: 2px solid #FFFFFF;
      display: inline-block;
      position: absolute;
      top: -28px;
      left: -23px;
    }
  }
  .txt {
    font-size: 15px;
    color: #5C5C5C;
    margin: 0;
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

const Vertical = styled.div`
  display: flex;

  @media screen and (min-width: 900px) {
    display: none;
  }
`
const VerticalList = styled.div`
  display: flex;
  flex-direction: column;
`
const VerticalLists = styled.div`
  display: flex;
  flex-direction: column;

`
const VerticalItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 18px 21px;
  @media screen and (max-width: 375px) {
    padding: 16px 8px;
  }
  &:nth-child(1) {
    margin: 20px 0 80px;
  }
  &:nth-child(2) {
    margin: 20px 0 120px;
  }
  &:nth-child(3) {
    margin: 20px 0 80px;
  }
  position: relative;
  .tit {
    font-size: 20px;
    color: #E2B534;
    margin-bottom: 8px;
    position: relative;
    &:after {
      content: '';
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-image: linear-gradient(45deg, #FEF6E0 0%, #F6C94A 100%);
      border: 2px solid #FFFFFF;
      display: inline-block;
      position: absolute;
      top: -23px;
      right: -28px;
    }
  }
  @media screen and (max-width: 413px) {
    .tit {
      font-size: 20px;
      color: #E2B534;
      margin-bottom: 8px;
      position: relative;
      &:after {
        content: '';
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-image: linear-gradient(45deg, #FEF6E0 0%, #F6C94A 100%);
        border: 2px solid #FFFFFF;
        display: inline-block;
        position: absolute;
        top: -23px;
        right: -15px;
      }
    }
  }
  .txt {
    font-size: 15px;
    color: #5C5C5C;
    margin: 0;
  }
  &:before {
    content: '';
    width: 112px;
    height: 2px;
    background-image: linear-gradient(-63deg, rgba(246,201,74,0.10) 0%, #F6C94A 100%);
    display: inline-block;
    position: absolute;
    top: 0;
  }
`
const VerticalItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 18px 21px;
  @media screen and (max-width: 375px) {
    padding: 16px 8px;
  }
  position: relative;
  &:nth-child(1) {
    margin-top: 140px;
  }
  &:nth-child(2) {
    margin-top: 140px;
  }
  &:nth-child(3) {
    margin-top: 102px;
  }
  &:before {
    content: '';
    width: 112px;
    height: 2px;
    background-image: linear-gradient(-63deg, #F6C94A 5%, rgba(246,201,74,0.20) 95%);
    display: inline-block;
    position: absolute;
    top: 0;
  }
  .tit {
    font-size: 20px;
    color: #E2B534;
    margin-bottom: 8px;
    position: relative;
    &:before {
      content: '';
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-image: linear-gradient(45deg, #FEF6E0 0%, #F6C94A 100%);
      border: 2px solid #FFFFFF;
      display: inline-block;
      position: absolute;
      top: -23px;
      left: -28px;
    }
  }
  @media screen and (max-width: 413px) {
    .tit {
      font-size: 20px;
      color: #E2B534;
      margin-bottom: 8px;
      position: relative;
      &:before {
        content: '';
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-image: linear-gradient(45deg, #FEF6E0 0%, #F6C94A 100%);
        border: 2px solid #FFFFFF;
        display: inline-block;
        position: absolute;
        top: -23px;
        left: -15px;
      }
    }
  }
  .txt {
    font-size: 15px;
    color: #5C5C5C;
    margin: 0;
  }
`
const Gradualshr = styled.div`
  width: 2px;
  height: 730px;
  background-image: linear-gradient(-63deg, rgba(246,201,74,0.10) 0%, #F6C94A 55%, rgba(246,201,74,0.20) 95%);
  
`



export default function() {

  useEffect(()=>{

    jquery(document).on("mousewheel DOMMouseScroll", function (event) {
      const delta = (event.originalEvent.wheelDelta && (event.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  
                  (event.originalEvent.detail && (event.originalEvent.detail > 0 ? -1 : 1));             
      let scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
      let windss = document.documentElement.clientHeight || document.body.clientHeight;
      let horizontals = jquery(".horizontal").offset().top;
      if((scrollTop+windss) > horizontals  && delta < 0) {
        jquery(".ani15").addClass("ShowAnimation_show");
        jquery(".ani16").addClass("ShowAnimation_show");
        jquery(".ani17").addClass("ShowAnimation_show");
        jquery(".ani18").addClass("ShowAnimation_show");
        jquery(".ani19").addClass("ShowAnimation_show");
        jquery(".ani20").addClass("ShowAnimation_show");
      } 
    });
   
  })
  const intl = useIntl()
  return (
    <OuterSection>
      <InnerSection>
        <Title>{intl.formatMessage({ id: "Roadmap" })}</Title>
        <Horizontal className="horizontal">
          <HorizontalList>
            <HorizontalItem className="ani15">
              <div className="tit">{intl.formatMessage({ id: "May 2019" })}</div>
              <p className="txt">{intl.formatMessage({ id: "ChainX 1.0 was launched" })}</p>
              <p className="txt">{intl.formatMessage({ id: "X-BTC 1.0 was launched" })}</p>
            </HorizontalItem>
            <HorizontalItem className="ani16">
              <div className="tit">{intl.formatMessage({ id: "January 2021" })}</div>
              <p className="txt">{intl.formatMessage({ id: "X-BTC 2.0 was launched" })}</p>
              <p className="txt">{intl.formatMessage({ id: "Kusama slot auction" })}</p>
              <p className="txt">{intl.formatMessage({ id: "Polkadot slot auction" })}</p>
            </HorizontalItem>
            <HorizontalItem className="ani17">
              <div className="tit">{intl.formatMessage({ id: "March 2021" })}</div>
              <p className="txt">{intl.formatMessage({ id: "X-BTC 4.0 was launched" })}</p>
              <p className="txt">{intl.formatMessage({ id: "X-BTC is circulated to Ethereum" })}</p>
            </HorizontalItem>
          </HorizontalList>
          <Gradualhr />
          <HorizontalLists>
            <HorizontalItems className="ani18">
              <div className="tit">{intl.formatMessage({ id: "November 2020" })}</div>
              <p className="txt">{intl.formatMessage({ id: "ChainX 2.0 was released" })}</p>
            </HorizontalItems>
            <HorizontalItems className="ani19">
              <div className="tit">{intl.formatMessage({ id: "February 2021" })}</div>
              <p className="txt">{intl.formatMessage({ id: "X-BTC 3.0 was launched" })}</p>
              <p className="txt">{intl.formatMessage({ id: "X-BTC derivatives came online" })}</p>
              <p className="txt">{intl.formatMessage({ id: "X-BTC is circulated to Polkadot" })}</p>
            </HorizontalItems>
            <HorizontalItems className="ani20">
              <div className="tit">{intl.formatMessage({ id: "January 2022" })}</div>
              <p className="txt">{intl.formatMessage({ id: "Polkadot second-layer relay chain online" })}</p>
            </HorizontalItems>
          </HorizontalLists>
        </Horizontal>

        <Vertical className="vertical">
          <VerticalList>
            <VerticalItem>
              <div className="tit">{intl.formatMessage({ id: "May 2019" })}</div>
              <p className="txt">{intl.formatMessage({ id: "ChainX 1.0 was launched" })}</p>
              <p className="txt">{intl.formatMessage({ id: "X-BTC 1.0 was launched" })}</p>
            </VerticalItem>
            <VerticalItem>
              <div className="tit">{intl.formatMessage({ id: "January 2021" })}</div>
              <p className="txt">{intl.formatMessage({ id: "X-BTC 2.0 was launched" })}</p>
              <p className="txt">{intl.formatMessage({ id: "Kusama slot auction" })}</p>
              <p className="txt">{intl.formatMessage({ id: "Polkadot slot auction" })}</p>
            </VerticalItem>
            <VerticalItem>
              <div className="tit">{intl.formatMessage({ id: "March 2021" })}</div>
              <p className="txt">{intl.formatMessage({ id: "X-BTC 4.0 was launched" })}</p>
              <p className="txt">{intl.formatMessage({ id: "X-BTC is circulated to Ethereum" })}</p>
            </VerticalItem>
          </VerticalList>
          <Gradualshr />
          <VerticalLists>
            <VerticalItems>
              <div className="tit">{intl.formatMessage({ id: "November 2020" })}</div>
              <p className="txt">{intl.formatMessage({ id: "ChainX 2.0 was released" })}</p>
            </VerticalItems>
            <VerticalItems>
              <div className="tit">{intl.formatMessage({ id: "February 2021" })}</div>
              <p className="txt">{intl.formatMessage({ id: "X-BTC 3.0 was launched" })}</p>
              <p className="txt">{intl.formatMessage({ id: "X-BTC derivatives came online" })}</p>
              <p className="txt">{intl.formatMessage({ id: "X-BTC is circulated to Polkadot" })}</p>
            </VerticalItems>
            <VerticalItems>
              <div className="tit">{intl.formatMessage({ id: "January 2022" })}</div>
              <p className="txt">{intl.formatMessage({ id: "Polkadot second-layer relay chain online" })}</p>
            </VerticalItems>
          </VerticalLists>
        </Vertical>
      </InnerSection>
    </OuterSection>
  )
}
