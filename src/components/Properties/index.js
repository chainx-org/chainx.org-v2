import React from 'react'
import styled from 'styled-components'
import CrossChainLogo from './cross-chain.svg'
import NodeLogo from './node.svg'
import FeeLogo from './fee.svg'
import $t from '../../locale'

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
          <h4>{$t('inter_chain_asset')}</h4>
          <p>{$t('inter_chain_asset_desc')}</p>
        </Item>
        <Item>
          <NodeLogo />
          <h4>1000+{$t('node')}</h4>
          <p>{$t('node_desc')}</p>
        </Item>
        <Item>
          <FeeLogo />
          <h4>{$t('zero_fee')}</h4>
          <p>{$t('zero_fee_desc')}</p>
        </Item>
      </InnerSection>
    </StyledSection>
  )
}
