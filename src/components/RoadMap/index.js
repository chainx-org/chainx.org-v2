import React from 'react'
import styled from 'styled-components'

const OuterSection = styled.section`
  display: flex;
  justify-content: space-around;
  background: #fff;
`

const InnerSection = styled.main`
  padding: 60px 0 200px;

  // @media screen and (min-width: 860px) {
  //   margin: 0 20px;
  //   width: 100%;
  // }

  // @media screen and (min-width: 1080px) {
  //   margin: unset;
  //   width: 1080px;
  // }
`

const  Gradualhr = styled.div`
  width: 1280px;
  height: 2px;
  background-image: linear-gradient(-63deg, rgba(246,201,74,0.10) 0%, #F6C94A 55%, rgba(246,201,74,0.20) 95%);
`

const Title = styled.div`
  font-size: 36px;
  color: #282828;
  text-align: center;
  line-height: 48px;
  margin-bottom: 80px;
`

const Detail = styled.div`
  margin-top: 36px;
`

const Horizontal = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: space-between;

  // @media screen and (max-width: 859px) {
  //   display: none;
  // }
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
    bottom: -9px;
    left: -7px;
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
  &:nth-child(1) {
    margin-left: 230px;
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
      top: -30px;
      left: -25px;
    }
  }
  .txt {
    font-size: 15px;
    color: #5C5C5C;
    margin: 0;
  }
`

const Vertical = styled(Detail)`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 860px) {
    display: none;
  }
`

const VerticalItem = styled.div`
  display: flex;
  h5 {
    margin: 0;
  }

  & > h5 {
    max-width: 80px;
  }

  & > .detail {
    p {
      max-width: 268px;
      margin: 10px 0 0;
      opacity: 0.72;
      font-weight: lighter;
      font-size: 14px;
      color: #000000;
      letter-spacing: 0.12px;
      line-height: 24px;
    }
  }
`

const VerticalSeparator = styled.div`
  border-left: 2px solid #f6c94a;
  display: flex;
  flex-direction: column;
  margin: 0 3px 0 17px;
  padding-bottom: 200px;

  &::before {
    content: '\\A';
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #f6c94a;
    display: inline-block;
    position: relative;
    left: -7px;
  }
`


export default function() {
  return (
    <OuterSection>
      <InnerSection>
        <Title>路线图</Title>
        <Horizontal className="horizontal">
          <HorizontalList>
            <HorizontalItem>
              <div className="tit">2019年5月</div>
              <p className="txt">ChainX 1.0 上线</p>
              <p className="txt">X-BTC 1.0 上线</p>
            </HorizontalItem>
            <HorizontalItem>
              <div className="tit">2021年01</div>
              <p className="txt">X-BTC 2.0 上线</p>
              <p className="txt">Kusama 插槽竞拍</p>
              <p className="txt">Polkadot 插槽竞拍</p>
            </HorizontalItem>
            <HorizontalItem>
              <div className="tit">2021年03</div>
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
              <div className="tit">2021年02</div>
              <p className="txt">X-BTC 3.0 上线</p>
              <p className="txt">X-BTC 衍生品上线</p>
              <p className="txt">X-BTC 流通至 Polkadot</p>
            </HorizontalItems>
            <HorizontalItems>
              <div className="tit">2022年01</div>
              <p className="txt">波卡二级中继链上线</p>
            </HorizontalItems>
          </HorizontalLists>
        </Horizontal>

        {/* <Vertical>
          <VerticalItem>
            <h5>2019年5月</h5>
            <VerticalSeparator />
            <div className="detail">
              <h5>单链系统</h5>
              <p>
                作为独⽴链运行并发行系统币
                PCX，逐步开发目前主流链的转接桥，进行跨链资产整合，让更广泛的用户能够陆续参与跨链挖矿。
              </p>
            </div>
          </VerticalItem>
          <VerticalItem>
            <h5>2019年Q4 Polkadot 发布 v1 后上线</h5>
            <VerticalSeparator />
            <div className="detail">
              <h5>双链系统</h5>
              <p>
                ChainX 将新增一条转接桥链作为 Polkadot的平行链，完成与 Polkadot
                资产的互通，并将持续支持社区开发各类 DApp。
              </p>
            </div>
          </VerticalItem>
          <VerticalItem>
            <h5>2020年 Polkadot 发布 v2 后上线</h5>
            <VerticalSeparator />
            <div className="detail">
              <h5>多链系统</h5>
              <p>
                ChainX 将拆分为多链架构，作为 Polkadot的第二层中继⽹络运行。
                Polkadot 专注于底层消息跨链，ChainX 专注于实现其内部的资产跨链。
              </p>
            </div>
          </VerticalItem>
        </Vertical> */}
      </InnerSection>
    </OuterSection>
  )
}
