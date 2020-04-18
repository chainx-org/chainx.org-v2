import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { BaseInner } from '../baseComponents'
import { PrimaryButton } from '@chainx/ui'

const StyledSection = styled.section`
  background: #fafafa;
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 1080px) {
    padding: 0 20px;
  }
`

export const InnerSection = styled(BaseInner)`
  padding: 130px 0;

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
          <Title>打破链间资产壁垒</Title>
          <Title>实现多币种融合的公链生态</Title>
          <p>
            目前区块链系统的资产被困于自己的系统内，无法产生链间分工和协作：BTC
            建立了最大范围共识，却交易效率低下；ZEC
            建立了隐私功能，却没有智能合约能力；ETH 建立了智能合约，却无法迁移至
            PoS 系统。ChainX
            通过去中心化的的方式将链间资产进行统一转化，任何链只需建立与 ChainX
            的连接，就可以与所有链进行资产互通。
          </p>

          <PrimaryButton>加入 ChainX</PrimaryButton>
        </Detail>
        <div>
          <Img fixed={data.bannerImage.childImageSharp.fixed} />
        </div>
      </InnerSection>
    </StyledSection>
  )
}
