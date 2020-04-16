import React from 'react'
import styled from 'styled-components'
import CrossChainLogo from './cross-chain.svg'
import NodeLogo from './node.svg'
import FeeLogo from './fee.svg'

const StyledSection = styled.section`
  background: #ffffff;
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 840px) {
    padding: 0 20px;
    justify-content: space-between;
  }
`

export const InnerSection = styled.main`
  padding: 130px 0;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }

  @media screen and (min-width: 1080px) {
    width: 1080px;
  }

  @media screen and (min-width: 880px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  @media screen and (max-width: 880px) {
    flex-wrap: wrap;
  }
`

const Item = styled.section`
  display: flex;
  flex-direction: column;
  width: 268px;
  margin-top: 20px;

  svg {
    height: 61px;
  }

  h4 {
    opacity: 0.72;
    font-size: 24px;
    font-weight: 600;
    color: #000000;
    letter-spacing: 0.12px;
    margin-top: 24px;
    margin-bottom: 20px;
  }

  p {
    margin: 0;
    opacity: 0.56;
    font-size: 16px;
    color: #000000;
    letter-spacing: 0.12px;
    line-height: 28px;
  }

  @media screen and (min-width: 880px) {
    &:not(:first-of-type) {
      margin-left: 20px;
    }
  }
`

export default function() {
  return (
    <StyledSection>
      <InnerSection>
        <Item>
          <CrossChainLogo />
          <h4>资产跨链</h4>
          <p>
            真正去中⼼化的链间资产流通，采用多签合约和轻节点协议托管，任何人无法挪用跨链资产储备。
          </p>
        </Item>
        <Item>
          <NodeLogo />
          <h4>1000+节点</h4>
          <p>
            ChainX 将逐步建立起史上最大规模的 PoS
            网络，普通用户也可以成为验证节点，打破网络中心化垄断。
          </p>
        </Item>
        <Item>
          <FeeLogo />
          <h4>0 手续费</h4>
          <p>
            系统集成的去中心化交易所采⽤免费撮合模式，不收取任何形式的成交⼿续费，为⽤户节省⼤量交易成本。
          </p>
        </Item>
      </InnerSection>
    </StyledSection>
  )
}
