import React from "react"
import styled from "styled-components"

const Footer = styled.footer`
  background: #222222;
  padding-top: 60px;
`

export default function() {
  return <Footer>
    © {new Date().getFullYear()}, Fuck with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </Footer>
}
