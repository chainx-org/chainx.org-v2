import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { BaseInner } from '../baseComponents'
import { PrimaryButton } from '@chainx/ui'
import $t from '../../locale'

const StyledSection = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 130px 0;

  @media screen and (max-width: 1080px) {
    padding: 130px 20px;
  }
`

export const InnerSection = styled(BaseInner)`
  @media screen and (min-width: 1080px) {
    & > div:last-of-type {
      margin-left: 37px;
    }
  }

  @media screen and (max-width: 1080px) {
    & > div:last-of-type {
      margin-top: 30px;
    }
  }
`

const Detail = styled.div`
  p {
    margin-top: 30px;
    opacity: 0.56;
    font-size: 16px;
    color: #000000;
    letter-spacing: 0.12px;
    line-height: 28px;
  }

  .MuiButton-containedPrimary {
    margin-top: 40px;
    width: 160px;
    font-size: 14px !important;
    padding: 12px 36px;
    border-radius: 28px;

    span {
      line-height: 1;
    }
  }
`

const Title = styled.h2`
  margin: 0;
  opacity: 0.72;
  font-weight: 600;
  font-size: 50px;
  color: #000000;
  line-height: 68px;
`

export default function() {
  const data = useStaticQuery(graphql`
    query {
      bannerImage: file(relativePath: { eq: "banner-logo.png" }) {
        childImageSharp {
          fixed(width: 400) {
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
          <Title>{$t('connect_chains')}</Title>
          <Title>{$t('build_ecology')}</Title>
          <p>{$t('chainx_desc')}</p>
          <PrimaryButton>{$t('join_chainx')}</PrimaryButton>
        </Detail>
        <div>
          <Img fixed={data.bannerImage.childImageSharp.fixed} />
        </div>
      </InnerSection>
    </StyledSection>
  )
}
