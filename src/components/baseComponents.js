import styled from 'styled-components'

export const BaseInner = styled.main`
  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }

  @media screen and (min-width: 1080px) {
    width: 1080px;
    display: flex;
    justify-content: space-between;
  }
`
