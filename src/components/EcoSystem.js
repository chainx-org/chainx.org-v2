import React from 'react'
import styled from 'styled-components'
import { PrimaryButton } from '@chainx/ui/dist'
import $t, { getLocale } from '../locale'
import { enWhitePaper, zhWhitePaper } from '../constants'

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
    border-radius: 28px;
  }

  .MuiButton-label {
    line-height: 1;
  }
`

export default function() {
  const locale = getLocale()
  const url = locale === 'zh' ? zhWhitePaper : enWhitePaper

  const open = () => window.open(`${url}#page=5`, '_blank')

  return (
    <StyledSection>
      <h3>{$t('ecosystem_issuance')}</h3>
      <h3>{$t('ecosystem_halved')}</h3>
      <ButtonWrapper>
        <PrimaryButton onClick={open}>{$t('check_ecosystem')}</PrimaryButton>
      </ButtonWrapper>
    </StyledSection>
  )
}
