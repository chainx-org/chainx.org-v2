import React from 'react'
import styled from 'styled-components'
import { PrimaryButton } from '@chainx/ui/dist'

const StyledSection = styled.section`
  padding: 80px 0;
  text-align: center;
  background-color: #f6c94a;

  h3 {
    margin: 0;
    &:last-of-type {
      margin-top: 10px;
    }
  }
`

const ButtonWrapper = styled.div`
  margin-top: 40px;
  .MuiButton-containedPrimary {
    padding: 12px 36px;
    background: #3f3f3f !important;
    color: #ffffff !important;
    font-size: 14px !important;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif, Arial, 'Helvetica Neue', HelveticaNeue,
      Helvetica, Microsoft YaHei, sans-serif !important;
    border-radius: 28px;
  }

  .MuiButton-label {
    line-height: 1;
  }
`

export default function() {
  return (
    <StyledSection>
      <h3>ChainX 发行的加密货币 PCX 总量 2100万枚</h3>
      <h3>每两年发行量减半</h3>
      <ButtonWrapper>
        <PrimaryButton>查看经济系统</PrimaryButton>
      </ButtonWrapper>
    </StyledSection>
  )
}
