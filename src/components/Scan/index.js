import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { OutlineButton } from '@chainx/ui/dist'
import $t from '../../locale'

const StyledSection = styled.section`
  background: #3f3f3f;
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
`

export const InnerSection = styled.main`
  padding: 150px 0;

  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    & > div:last-of-type {
      margin-top: 20px;
    }
  }

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;

    & > div {
      flex: 1;
    }
  }

  @media screen and (min-width: 1080px) {
    width: 1080px;
  }
`

const Detail = styled.div`
  @media screen and (min-width: 768px) {
    width: 50%;
    padding-left: 40px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  display: flex;
  flex-direction: column;

  h3 {
    font-size: 40px;
    font-weight: 600;
    color: #f6c94a;
    letter-spacing: 0.2px;
  }

  dl {
    margin-top: 20px;

    dt {
      margin-top: 20px;
      font-weight: 600;
      font-size: 20px;
      color: #ffffff;
      letter-spacing: 0.1px;
    }

    dd {
      margin-top: 16px;
      margin-bottom: 0;
      opacity: 0.7;
      font-size: 16px;
      color: #ffffff;
      letter-spacing: 0.08px;
      line-height: 28px;
    }
  }

  .MuiButton-outlinedPrimary {
    background: unset;
    font-size: 14px !important;
    padding: 12px 36px;
    border-radius: 28px;

    span {
      line-height: 1;
    }
  }
`

const Separator = styled.hr`
  background: rgba(255, 255, 255, 0.32);
  width: 100px;
  margin: 0;
`

export default function() {
  const data = useStaticQuery(graphql`
    query {
      scanImage: file(relativePath: { eq: "chainx-scan.png" }) {
        childImageSharp {
          fixed(width: 388) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <StyledSection>
      <InnerSection>
        <div>
          <Img fixed={data.scanImage.childImageSharp.fixed} />
        </div>
        <Detail>
          <h3>{$t('chainx_explorer')}</h3>
          <Separator />
          <dl>
            <dt>{$t('scan_data')}</dt>
            <dd>{$t('scan_data_desc')}</dd>
            <dt>{$t('scan_sync')}</dt>
            <dd>{$t('scan_sync_desc')}</dd>
          </dl>
          <OutlineButton
            onClick={() => open('https://scan.chainx.org/')}
            style={{ width: 200 }}
          >
            {$t('scan_view')}
          </OutlineButton>
        </Detail>
      </InnerSection>
    </StyledSection>
  )
}
