import React from 'react'
import styled from 'styled-components'
import Slogan from './Slogan'
import Assets from './Assets'

const StyledSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 960px) {
    padding: 0 20px;
  }
`

export default function() {
  return (
    <StyledSection>
      <Slogan />
      <Assets />
    </StyledSection>
  )
}
