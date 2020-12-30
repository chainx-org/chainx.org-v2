import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { useIntl } from "gatsby-plugin-intl"
import Logo from "./ChainXLogoWhite.svg"
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Wechats from './wechat.png'

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-evenly;
  z-index: 2;
  height: 80px;
  font-size: 14px;
  color: #8E8E8E;
  background: #282828;
`

export const InnerSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  @media screen and (min-width:1280px) {
    width: 1280px;
    justify-content: space-between;
    align-items: center;
  }
  @media screen and (max-width:768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
`
export const Detail = styled.div`
  margin: 0;
  span {
    font-size: 14px;
    color: #8E8E8E;
    &:hover {
      color: #FFF;
    }
  }
`

export const Botlogo = styled.div`
  display: flex;
  align-items: baseline;
  .copytoggle {
    position: relative;
    .copyemails {
      width: 150px;
      height: 42px;
      line-height: 42px;
      color: #fff;
      background: #E2B534;
      text-align: center;
      border-radius: 4px;
      position: absolute;
      bottom: 50px;
      .arrow {
        position: relative;
        &:after{
          content: "";
          border: 10px solid transparent;
          border-top-color: #E2B534;
          position: absolute;
          bottom: -32px;
          left: -12px;
        }
      }
    }
  }
  .imgicon {
    padding: 0 12px;
    display: flex;
    align-items: center;
    img {
      margin: 0;
    }
  }
  .iconwechats {
    position: relative; 
    .codes {
      position: absolute;
      bottom: 52px;
      left: -76px;
      display: none;
    }
    &:hover .codes {
      display: block;
    }
  }
  cursor: pointer;
  .logoicon {
    text-decoration: none;
    margin-left: 36px;
  }
  @media screen and (max-width: 539px) {
    .logoicon {
      margin-left: 5px;
    }
    .imgicon {
      padding: 0 6px;
    }
  }
`

export const Chatcode = styled.div`
  width: 190px;
  height: 190px;
  background: url(${Wechats});
  background-size: cover;
`

export default function () {
 
  const intl = useIntl()

  const { twitter, medium, telegram, wechat, github, email } = useStaticQuery(graphql`
    query {
      twitter: file(relativePath: { eq: "twitter.png" }) {
        childImageSharp {
          fixed(width: 24, height: 24) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      medium: file(relativePath: { eq: "medium.png" }) {
        childImageSharp {
          fixed(width: 24, height: 24) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      telegram: file(relativePath: { eq: "telegram.png" }) {
        childImageSharp {
          fixed(width: 24, height: 24) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      wechat: file(relativePath: { eq: "wechat.png" }) {
        childImageSharp {
          fixed(width: 24, height: 24) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      github: file(relativePath: { eq: "github.png" }) {
        childImageSharp {
          fixed(width: 24, height: 24) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      email: file(relativePath: { eq: "email.png" }) {
        childImageSharp {
          fixed(width: 24, height: 24) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  const [emails,setEmails] = useState()
  const [copied,setCopied] = useState(false)

  useEffect(()=>{
    setEmails("11234567890")
  },[])

  useEffect(()=>{
    const timer = setInterval(() => setCopied(false) ,3000);
    return () => {
      clearInterval(timer);
    };
  },[copied])

  return (
    <StyledFooter>
      <InnerSection>
        <Detail>
          <span>All rights reserved © 2021 ChainX</span>
        </Detail>
        <Botlogo >
          <div className="imgicon">
            <a href="https://twitter.com/chainx_org" target="_blank">
              <Img fixed={twitter.childImageSharp.fixed} />
            </a>
          </div>
          <div className="imgicon iconwechats">
            <div className="iconwechat">
              <Img fixed={wechat.childImageSharp.fixed} />
            </div>
            <Chatcode className="codes" />
          </div>
          <div className="imgicon">
            <a href="https://chainx-org.medium.com/" target="_blank">
              <Img fixed={medium.childImageSharp.fixed} />
            </a>
          </div>
          <div className="imgicon">
            <a href="https://t.me/chainx_org" target="_blank">
              <Img fixed={telegram.childImageSharp.fixed} />
            </a>
          </div>
          <div className="imgicon">
            <a href="https://github.com/chainx-org/ChainX" target="_blank">
              <Img fixed={github.childImageSharp.fixed} />
            </a>
          </div>
          <div className="copytoggle">
            <CopyToClipboard text={emails} onCopy={() => setCopied(true) }>
              <div className="imgicon">
                <Img fixed={email.childImageSharp.fixed} />
              </div>
            </CopyToClipboard>
            {copied ? <span className="copyemails">
              <span className="arrow">
                已复制邮箱地址
              </span>
            </span> : null}
          </div>
          <a href="/" className="logoicon">
            <Logo />
          </a> 
        </Botlogo>
      </InnerSection>
    </StyledFooter>
  )
}
