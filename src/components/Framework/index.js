import React from 'react'
import styled from 'styled-components'
import Sysframework from './sysframework.png'

const StyledSection = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 100px 0;

`

export const InnerSection = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-image: linear-gradient(-45deg, #EFEFEF 0%, #ABABAB 100%);
  padding: 70px 40px;
`

const Detail = styled.div`
  margin-left: 120px;
`

const Title = styled.div`
  font-size: 36px;
  color: #282828;
  line-height: 48px;
`

const Contents = styled.p`
  width: 480px;
  font-size: 16px;
  color: #5C5C5C;
  line-height: 30px;
  margin: 20px 0 0;
` 

const Sysbgpic = styled.p`
  width: 601px;
  height: 300px;
  background: url(${Sysframework});
  background-size: cover;
  margin: 0;
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
