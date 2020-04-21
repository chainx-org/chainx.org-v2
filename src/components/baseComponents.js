import styled from 'styled-components'
import { PrimaryButton } from '@chainx/ui'

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

export const YellowButton = styled(PrimaryButton)`
  margin-top: 40px;
  width: 160px;
  font-size: 14px !important;
  font-weight: 600 !important;
  padding: 12px 36px !important;
  border-radius: 28px !important;

  span {
    line-height: 1;
  }
`

export const DarkButton = styled(YellowButton)`
  background: #3f3f3f !important;
  color: #ffffff !important;
`
