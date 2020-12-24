import React from 'react'
import styled from 'styled-components'
import Sysframework from './sysframework.png'

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

  return (
    <StyledSection>
      <InnerSection>
        <div>
          <Sysbgpic />
        </div>
        <Detail>
          <Title>系统架构</Title>
          <Contents>ChainX 2.0 建立在通用基础链框架 Substrate 2.0 之上，实现了混合 PoS 共识、链上理事会治理、Wasm 虚拟机、智能合约原生执行、高效轻客户端协议、Off-chain worker、多重签名等功能，同时与 Polkadot 网络具有高度兼容性。</Contents>
        </Detail>
      </InnerSection>
    </StyledSection>
  )
}
