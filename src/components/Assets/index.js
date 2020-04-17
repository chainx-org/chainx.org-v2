import React from 'react'
import styled from 'styled-components'
import Slogan from './Slogan'

const StyledSection = styled.section`
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 960px) {
    padding: 0 20px;
  }
`

export default function() {
  return (
    <StyledSection>
      <Slogan />
    </StyledSection>
  )
}
