import React from 'react'
import styled from 'styled-components'
import $t from '../../locale'

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
      <Title>{$t('asset_power')}</Title>
      <Detail>{$t('asset_power_desc')}</Detail>
    </InnerSection>
  )
}
