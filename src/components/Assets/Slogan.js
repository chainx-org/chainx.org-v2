import React from 'react'
import styled from 'styled-components'

const InnerSection = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 80px 0 70px;

  h3,
  p {
    margin: 0;
  }

  @media screen and (max-width: 960px) {
    display: flex;
    flex-wrap: wrap;
    p {
      margin-top: 20px;
    }
  }

  @media screen and (min-width: 960px) {
    p {
      flex: 1;
      margin-left: 200px;
    }
  }

  @media screen and (min-width: 1080px) {
    width: 1080px;
  }
`

const Title = styled.h3`
  line-height: 56px;
  min-width: 204px;
  opacity: 0.72;
  font-weight: 600;
  font-size: 40px;
  color: #000000;
  letter-spacing: 0.2px;
`

const Detail = styled.p`
  opacity: 0.56;
  font-size: 16px;
  color: #000000;
  letter-spacing: 0.12px;
  line-height: 28px;
`

export default function() {
  return (
    <InnerSection>
      <Title>币值即权利</Title>
      <Detail>
        ChainX 根据用户跨链充值的 BTC、DOT、ETH、ERC20、EOS
        等多种数字资产的市值衡量挖矿算力，没有
        ICO和预挖，并尽力使节点规模化、平民化，使用 PoS
        算法建立起首个可以长期博弈的区块链网络。
      </Detail>
    </InnerSection>
  )
}
