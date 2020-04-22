import React from 'react'
import { InnerSection, Item, Items, OuterSection } from './styledComponents'
import { CommunityTitle } from '../baseComponents'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

export default function() {
  const {
    bitpie,
    math,
    imtoken,
    bitportal,
    bitx,
    trezor,
    wookong,
    coinb,
  } = useStaticQuery(graphql`
    query {
      bitpie: file(relativePath: { eq: "bitpie.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      math: file(relativePath: { eq: "mathwallet.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      imtoken: file(relativePath: { eq: "imtoken.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      bitportal: file(relativePath: { eq: "bitportal.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      bitx: file(relativePath: { eq: "bitx.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      trezor: file(relativePath: { eq: "trezor.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      wookong: file(relativePath: { eq: "wookong.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      coinb: file(relativePath: { eq: "coinb.png" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const items = [
    {
      img: bitpie,
      title: '比特派',
      desc: '比特派钱包是比太团队开发的全球领先的多链钱包。',
    },
    {
      img: math,
      title: '麦子钱包',
      desc: '麦子钱包是一个强大和安全的跨链钱包。',
    },
    {
      img: imtoken,
      title: 'imToken',
      desc: 'imToken 是享誉全球的简单、安全且功能强大的移动轻钱包。',
    },
    {
      img: bitportal,
      title: '币通',
      desc: '安全可靠的多币种钱包。',
    },
    {
      img: bitx,
      title: 'BitX',
      desc: 'BitX 是由 PolkaX 团队开发的一款简单易用的 BTC 桌面钱包。',
    },
    {
      img: trezor,
      title: 'Trezor',
      desc: 'TREZOR 是一款安全可靠的硬件钱包。',
    },
    {
      img: wookong,
      title: 'WOOKONG',
      desc: 'WOOKONG 团队开发的一款银行级别安全的硬件钱包。',
    },
    {
      img: coinb,
      title: 'coinb.in',
      desc: 'Coinbin 是一个基于 Web 的开源钱包。',
    },
  ]

  return (
    <OuterSection>
      <InnerSection>
        <CommunityTitle>支持 OP_RETURN 的钱包</CommunityTitle>
        <p>
          在跨链过程中您发送的交易需要携带 OP_RETURN 信息，用以建立与 ChainX
          的连接。
        </p>
        <Items>
          {items.map(item => {
            return (
              <Item key={item.title}>
                <Img fixed={item.img.childImageSharp.fixed} />
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </Item>
            )
          })}
        </Items>
      </InnerSection>
    </OuterSection>
  )
}
