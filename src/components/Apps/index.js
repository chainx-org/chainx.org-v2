import {
  Apps,
  InnerSection,
  Item,
  OuterSection,
  Separator,
} from './styledComponents'
import React from 'react'
import { CommunityTitle } from '../baseComponents'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import DefaultButton from '@chainx/ui/dist/Button/DefaultButton'

export default function() {
  const { signer, bitx, tools } = useStaticQuery(graphql`
    query {
      signer: file(relativePath: { eq: "chainx-signer.png" }) {
        childImageSharp {
          fixed(width: 64, height: 64) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      bitx: file(relativePath: { eq: "bitx.png" }) {
        childImageSharp {
          fixed(width: 64, height: 64) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      tools: file(relativePath: { eq: "ChainXTools.png" }) {
        childImageSharp {
          fixed(width: 64, height: 64) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const open = url => window.open(url, '_blank')

  const openExtension = () =>
    open(
      'https://chrome.google.com/webstore/detail/chainx-extension/dffjlgnecfafjfmkknpipapcbgajflge'
    )
  const openSignerReleases = () =>
    open('https://github.com/chainx-org/chainx-signer/releases')

  return (
    <OuterSection>
      <InnerSection>
        <CommunityTitle style={{ textAlign: 'center' }}>
          社区应用
        </CommunityTitle>
        <Separator>
          <hr />
        </Separator>
        <Apps>
          <Item>
            <Img fixed={signer.childImageSharp.fixed} />
            <h4>ChainX Signer</h4>
            <p>
              ChainX Signer 是由 PolkaX
              团队开发的一款安全可靠的签名器，用于创建和管理 ChainX
              账户，并对其交易签名。
            </p>
            <div>
              <DefaultButton onClick={openExtension}>Chrome 插件</DefaultButton>
              <DefaultButton onClick={openSignerReleases}>
                客户端下载
              </DefaultButton>
            </div>
          </Item>
          <Item>
            <Img fixed={bitx.childImageSharp.fixed} />
            <h4>BitX</h4>
            <p>BitX 是由 PolkaX 团队开发的一款简单易用的 BTC 桌面钱包。</p>
            <div>
              <DefaultButton
                onClick={() =>
                  open('https://github.com/chainx-org/BitX/releases')
                }
              >
                开始使用
              </DefaultButton>
            </div>
          </Item>
          <Item>
            <Img fixed={tools.childImageSharp.fixed} />
            <h4>ChainXTools</h4>
            <p>ChainXTools 是一款用于整合和分析ChainX 链上数据的出色应用。</p>
            <div>
              <DefaultButton onClick={() => open('https://chainxtools.com/')}>
                开始使用
              </DefaultButton>
            </div>
          </Item>
        </Apps>
      </InnerSection>
    </OuterSection>
  )
}
