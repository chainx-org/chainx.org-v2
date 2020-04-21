import React from 'react'
import styled from 'styled-components'
import { YellowButton } from './baseComponents'

const StyledSection = styled.section`
  padding: 80px 0;
  text-align: center;
  background-color: #ffffff;

  h3 {
    opacity: 0.72;
    font-weight: 600;
    font-size: 36px;
    color: #000000;
    letter-spacing: 0.18px;
    text-align: center;
  }

  p {
    margin-top: 20px;
    margin-bottom: 40px;
    opacity: 0.72;
    font-size: 16px;
    color: #000000;
    letter-spacing: 0.08px;
    line-height: 28px;
  }
`

export default function() {
  return (
    <StyledSection>
      <h3>使用 ChainX 的智能合约平台开发 DApp</h3>
      <p>全球首个 Bitcoin 智能合约开发平台</p>
      <YellowButton>查看开发文档</YellowButton>
    </StyledSection>
  )
}
