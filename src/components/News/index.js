import React from 'react'
import { Content, InnerSection, OuterSection } from './styledComponents'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { PrimaryButton, OutlineButton } from '@chainx/ui/dist'

export default function() {
  const data = useStaticQuery(graphql`
    query {
      newsImage: file(relativePath: { eq: "news.png" }) {
        childImageSharp {
          fixed(width: 1080, height: 420) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const openDetail = () =>
    window.open(
      'https://mp.weixin.qq.com/s/RN9CHTHtdIHXVW6lqbpHGQ?scene=25#wechat_redirect',
      '_blank'
    )

  return (
    <OuterSection>
      <InnerSection>
        <Img fixed={data.newsImage.childImageSharp.fixed} />
        <Content>
          <h2>ChainX 最新动态</h2>
          <p>
            ChainX 创始人受邀参加在柏林 Funkhaus 举办的 2019 Web3 峰会，
            与理查德·马修·斯托曼、爱德华·斯诺登、Gavin Wood 等同台演讲。
          </p>
          <div>
            <PrimaryButton onClick={() => openDetail()}>查看详情</PrimaryButton>
            <OutlineButton>更多动态</OutlineButton>
          </div>
        </Content>
      </InnerSection>
    </OuterSection>
  )
}
