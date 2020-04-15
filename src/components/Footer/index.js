import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  background: #222222;
  padding-top: 60px;
`

export default function() {
  return (
    <StyledFooter>
      © {new Date().getFullYear()}, Fuck with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </StyledFooter>
  )
}
