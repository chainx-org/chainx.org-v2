import styled from 'styled-components'

export const OuterSection = styled.section`
  display: flex;
  justify-content: space-around;
  background: #fff;
`

export const InnerSection = styled.main`
  margin-top: 28px;
  position: relative;
`

export const Content = styled.div`
  position: absolute;
  top: 80px;
  left: 60px;

  h2 {
    font-weight: 600;
    font-size: 50px;
    color: #ffffff;
    line-height: 68px;
    margin-bottom: 20px;
  }

  p {
    max-width: 520px;
    font-size: 16px;
    color: #ffffff;
    letter-spacing: 0.12px;
    line-height: 28px;
  }

  & > div {
    button {
      font-weight: 600;
      font-size: 14px;
      color: #000000;
      letter-spacing: 0.16px;
      text-align: center;
      line-height: 24px;
      padding: 12px 36px;
      border-radius: 28px;

      &:last-of-type {
        margin-left: 20px;
        background: unset;
        color: #f6c94a;
      }
    }
  }
`
