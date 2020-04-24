import React from 'react'
import styled from 'styled-components'
import { InnerSection } from './Scan'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { PrimaryButton } from '@chainx/ui/dist'
import $t from '../locale'

const StyledSection = styled.section`
  background: #fafafa;
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
`

const Detail = styled.div`
  @media screen and (min-width: 768px) {
    width: 50%;
    padding-right: 40px;
  }

  @media screen and (max-width: 1080px) {
    padding-left: 20px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  display: flex;
  flex-direction: column;

  dl {
    margin-top: 16px;
    margin-bottom: 0;

    dt {
      margin-top: 20px;
      font-weight: 600;
      font-size: 20px;
      color: #000;
      letter-spacing: 0.1px;
    }

    dd {
      margin-top: 16px;
      margin-bottom: 0;
      opacity: 0.56;
      font-size: 16px;
      color: #000;
      letter-spacing: 0.12px;
      line-height: 28px;
      text-align: justify;
    }
  }

  .MuiButton-containedPrimary {
    margin-top: 40px;
    width: 200px;
    font-size: 14px !important;
    padding: 12px 36px;
    border-radius: 28px;

    span {
      line-height: 1;
    }
  }
`

export const Separator = styled.hr`
  background: rgba(0, 0, 0, 0.2);
  width: 100px;
  margin: 0;
`

export default function() {
  const data = useStaticQuery(graphql`
    query {
      walletImage: file(relativePath: { eq: "chainx-wallet.png" }) {
        childImageSharp {
          fixed(width: 499) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <StyledSection>
      <InnerSection>
        <Detail>
          <h3>{$t('chainx_wallet')}</h3>
          <Separator />
          <dl>
            <dt>{$t('wallet_easy')}</dt>
            <dd>{$t('wallet_easy_detail')}</dd>
            <dt>{$t('wallet_reliability')}</dt>
            <dd>{$t('wallet_reliability_desc')}</dd>
            <dt>{$t('wallet_open')}</dt>
            <dd>{$t('wallet_open_desc')}</dd>
          </dl>
          <PrimaryButton onClick={() => open('https://dapps.chainx.org/')}>
            {$t('wallet_use')}
          </PrimaryButton>
        </Detail>
        <div style={{ textAlign: 'right' }}>
          <Img fixed={data.walletImage.childImageSharp.fixed} />
        </div>
      </InnerSection>
    </StyledSection>
  )
}
