import styled from 'styled-components'
import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { useIntl } from "gatsby-plugin-intl"
import Logo from "./ChainXLogoWhite.svg"

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
  }
`

export const Botlogo = styled.div`
  display: flex;
  align-items: center;
  .imgicon {
    padding: 0 12px;
    display: flex;
    align-items: center;
    img {
      margin: 0;
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

  return (
    <StyledFooter>
      <InnerSection>
        <Detail>
          <span>All rights reserved © 2021 ChainX</span>
        </Detail>
        <Botlogo >
          <div className="imgicon">
            <Img fixed={twitter.childImageSharp.fixed} />
          </div>
          <div className="imgicon">
            <Img fixed={medium.childImageSharp.fixed} />
          </div>
          <div className="imgicon">
            <Img fixed={telegram.childImageSharp.fixed} />
          </div>
          <div className="imgicon">
            <Img fixed={wechat.childImageSharp.fixed} />
          </div>
          <div className="imgicon">
            <Img fixed={github.childImageSharp.fixed} />
          </div>
          <div className="imgicon">
            <Img fixed={email.childImageSharp.fixed} />
          </div>
          <a href="/" className="logoicon">
            <Logo />
          </a> 
        </Botlogo>
      </InnerSection>
    </StyledFooter>
  )
}
