import React from 'react'
import styled from 'styled-components'
import bitplat from './bitplat.png'
import numplat from './numplat.png'
import padplat from './padplat.png'

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
  // @media screen and (max-width: 550px){
  //   padding: 50px 0 20px;
  // }
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
const Item = styled.div`
  @media screen and (min-width:1280px){
    width: 1280px;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  // @media screen and (max-width:768px){
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: center;
  //   &.picCon {
  //     display: flex;
  //     flex-direction: column-reverse;
  //   }
  // }
`

const BitPic = styled.div`
  // @media screen and (min-width:770px) and (max-width:1080px){
  //   width: 300px;
  //   height: 200px;
  // }
  // @media screen and (min-width:520px) and (max-width:750px){
  //   width: 500px;
  //   height: 400px;
  // }
  // @media screen and (min-width:380px) and (max-width:520px){
  //   width: 360px;
  //   height: 260px;
  // }
  // @media screen and (max-width:380px){
  //   width: 300px;
  //   height: 200px;
  // }
  width: 200px;
  height: 200px;
  background: url(${bitplat});
  background-size: cover;
  margin: 0 240px;
`
const NumPic = styled.div`
  // @media screen and (min-width:770px) and (max-width:1080px){
  //   width: 300px;
  //   height: 200px;
  // }
  // @media screen and (min-width:520px) and (max-width:750px){
  //   width: 500px;
  //   height: 400px;
  // }
  // @media screen and (min-width:380px) and (max-width:520px){
  //   width: 360px;
  //   height: 260px;
  // }
  // @media screen and (max-width:380px){
  //   width: 300px;
  //   height: 200px;
  // }
  width: 200px;
  height: 200px;
  background: url(${numplat});
  background-size: cover;
  margin: 120px 240px;
  // @media screen and (max-width:1080px){
  //   margin: 0;
  // }
`
const PadPic = styled.div`
  // @media screen and (min-width:770px) and (max-width:1080px){
  //   width: 300px;
  //   height: 200px;
  // }
  // @media screen and (min-width:520px) and (max-width:750px){
  //   width: 500px;
  //   height: 400px;
  // }
  // @media screen and (min-width:380px) and (max-width:520px){
  //   width: 360px;
  //   height: 260px;
  // }
  // @media screen and (max-width:380px){
  //   width: 300px;
  //   height: 200px;
  // }
  width: 200px;
  height: 200px;
  background: url(${padplat});
  background-size: cover;
  margin: 0 240px;
`

const PlatMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  // @media screen and (min-width:1280px){
  //   margin: 0 0 0 240px;
  // }
  // @media screen and (min-width:750px) and (max-width:1080px){
  //   padding: 30px;
  // }
  // @media screen and (max-width:750px){
  //   padding: 30px;
  // }
`

const PlatTit = styled.div`
  font-size: 30px;
  color: #282828;
  margin-bottom: 20px;
  @media screen and (min-width: 1280px){
    width: 560px;
  }
`

const PlatCon = styled.p`
  font-size: 16px;
  color: #5C5C5C;
  margin-bottom: 16px;
  @media screen and (min-width:1280px){
    width: 580px;
  }
`

export default function() {
  
  return (
    <PlatSection>
      <InnerSection>
        <Item>
          <PlatMain>
            <PlatTit>比特币衍生平台</PlatTit>
            <PlatCon>ChainX 将成为比特币最大的 Layer2 金融衍生平台，逐步上线比特币期货、期权、合成资产及互换协议等衍生品。旨在促进比特币价值流动、丰富比特币金融衍生及完善比特币投资对冲工具。</PlatCon>
          </PlatMain>
          <BitPic />
        </Item>
        <Item className="picCon">
          <NumPic /> 
          <PlatMain>
            <PlatTit>数字资产网关</PlatTit>
            <PlatCon>ChainX 加密资产网关主要由去中心化 BTC 资产托管方案和镜像资产跨链两部分组成。</PlatCon>
            <PlatCon>用户通过充值抵押 BTC 来获得 X-BTC，再使用 X-BTC 交易其他加密货币的合成资产，实现所有加密货币同链交易的场景。</PlatCon>
          </PlatMain>
        </Item>
        <Item>
          <PlatMain>
            <PlatTit>波卡二级中继链</PlatTit>
            <PlatCon>Polkadot 平行链可以使用不同类型的区块链底层技术进行开发，中继链负责全网的共享安全共识和平行链的跨链交易转发。中继链本身不包含任何应用，应用均在平行链上进行开发和部署。</PlatCon>
            <PlatCon> ChainX 将在 Polkadot v2 版本发布以后，拆分为多链架构，作为 Polkadot 的第二层网络运行。</PlatCon>
          </PlatMain>
          <PadPic />
        </Item>
      </InnerSection>
    </PlatSection>
  )
}
