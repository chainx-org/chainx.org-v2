import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { OutlineButton } from '@chainx/ui/dist'

const StyledSection = styled.section`
  background: #3f3f3f;
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    padding-left: 20px;
  }
`

const InnerSection = styled.main`
  padding: 150px 0;

  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }

  @media screen and (min-width: 1080px) {
    width: 1080px;
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
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif, Arial, 'Helvetica Neue', HelveticaNeue,
      Helvetica, Microsoft YaHei, sans-serif !important;
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
        <Img fixed={data.scanImage.childImageSharp.fixed} />
        <Detail>
          <h3>ChainX 区块浏览器</h3>
          <Separator />
          <dl>
            <dt>完整的链上数据</dt>
            <dd>
              您可以使用区块浏览器查询和验证 ChainX 上任何一笔交易的详细数据。
            </dd>
            <dt>同步更新</dt>
            <dd>
              ChainX 区块浏览器会实时同步链上数据，让您可以更快的获得交易信息。
            </dd>
          </dl>
          <OutlineButton style={{ width: 140 }}>查看数据</OutlineButton>
        </Detail>
      </InnerSection>
    </StyledSection>
  )
}
