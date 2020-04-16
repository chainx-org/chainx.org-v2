import React from 'react'
import styled from 'styled-components'
import { InnerSection } from './Scan'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { PrimaryButton } from '@chainx/ui/dist'

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
    }
  }

  .MuiButton-containedPrimary {
    margin-top: 40px;
    width: 140px;
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
          <h3>ChainX 去中心化钱包</h3>
          <Separator />
          <dl>
            <dt>易于使用的界面</dt>
            <dd>
              简单直观的功能界面，符合用户使用习惯的操作流程，不断优化的交互体验。
            </dd>
            <dt>经验证的稳定性</dt>
            <dd>
              自 2019年5月25日上线，已有 180+ 节点在 ChainX 稳定运行，为 ChainX
              提供强大的计算性能。
            </dd>
            <dt>透明公开的数据</dt>
            <dd>
              使用 ChainX
              区块浏览器查询所有链上数据，包括但不限于资产信息、节点信息、投票信息和交易信息。
            </dd>
          </dl>
          <PrimaryButton>开始使用</PrimaryButton>
        </Detail>
        <Img fixed={data.walletImage.childImageSharp.fixed} />
      </InnerSection>
    </StyledSection>
  )
}
