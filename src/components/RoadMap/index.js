import React from 'react'
import styled from 'styled-components'

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
  
`

const HorizontalItems = styled.div`
  width: 192px;
  position: relative;
  padding: 21px 0 0 18px;
  margin-left: 210px;
  @media screen and (min-width: 1024px) and (max-width: 1280px) {
    width: 140px;
    margin-left: 140px;
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
  return (
    <OuterSection>
      <InnerSection>
        <Title>路线图</Title>
        <Horizontal className="horizontal">
          <HorizontalList>
            <HorizontalItem>
              <div className="tit">2019年05月</div>
              <p className="txt">ChainX 1.0 上线</p>
              <p className="txt">X-BTC 1.0 上线</p>
            </HorizontalItem>
            <HorizontalItem>
              <div className="tit">2021年01月</div>
              <p className="txt">X-BTC 2.0 上线</p>
              <p className="txt">Kusama 插槽竞拍</p>
              <p className="txt">Polkadot 插槽竞拍</p>
            </HorizontalItem>
            <HorizontalItem>
              <div className="tit">2021年03月</div>
              <p className="txt">X-BTC 4.0 上线</p>
              <p className="txt">X-BTC 流通至 Ethereum</p>
            </HorizontalItem>
          </HorizontalList>
          <Gradualhr />
          <HorizontalLists>
            <HorizontalItems>
              <div className="tit">2020年11月</div>
              <p className="txt">ChainX 2.0 上线</p>
            </HorizontalItems>
            <HorizontalItems>
              <div className="tit">2021年02月</div>
              <p className="txt">X-BTC 3.0 上线</p>
              <p className="txt">X-BTC 衍生品上线</p>
              <p className="txt">X-BTC 流通至 Polkadot</p>
            </HorizontalItems>
            <HorizontalItems>
              <div className="tit">2022年01月</div>
              <p className="txt">波卡二级中继链上线</p>
            </HorizontalItems>
          </HorizontalLists>
        </Horizontal>

        <Vertical className="vertical">
          <VerticalList>
            <VerticalItem>
              <div className="tit">2019年05月</div>
              <p className="txt">ChainX 1.0 上线</p>
              <p className="txt">X-BTC 1.0 上线</p>
            </VerticalItem>
            <VerticalItem>
              <div className="tit">2021年01月</div>
              <p className="txt">X-BTC 2.0 上线</p>
              <p className="txt">Kusama 插槽竞拍</p>
              <p className="txt">Polkadot 插槽竞拍</p>
            </VerticalItem>
            <VerticalItem>
              <div className="tit">2021年03月</div>
              <p className="txt">X-BTC 4.0 上线</p>
              <p className="txt">X-BTC 流通至 Ethereum</p>
            </VerticalItem>
          </VerticalList>
          <Gradualshr />
          <VerticalLists>
            <VerticalItems>
              <div className="tit">2020年11月</div>
              <p className="txt">ChainX 2.0 上线</p>
            </VerticalItems>
            <VerticalItems>
              <div className="tit">2021年02月</div>
              <p className="txt">X-BTC 3.0 上线</p>
              <p className="txt">X-BTC 衍生品上线</p>
              <p className="txt">X-BTC 流通至 Polkadot</p>
            </VerticalItems>
            <VerticalItems>
              <div className="tit">2022年01月</div>
              <p className="txt">波卡二级中继链上线</p>
            </VerticalItems>
          </VerticalLists>
        </Vertical>
      </InnerSection>
    </OuterSection>
  )
}
