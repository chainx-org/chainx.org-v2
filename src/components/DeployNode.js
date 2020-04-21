import React from 'react'
import styled from 'styled-components'
import { DarkButton } from './baseComponents'

const StyledSection = styled.section`
  padding: 80px 0;
  text-align: center;
  background-color: #f6c94a;

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
      <h3>部署并运行 ChainX 节点</h3>
      <p>
        如果你想要在 ChainX 上运行节点，你首先需要在 ChainX 钱包上注册成为节点
      </p>
      <DarkButton>节点部署文档</DarkButton>
    </StyledSection>
  )
}
