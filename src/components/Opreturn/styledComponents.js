import styled from 'styled-components'

export const OuterSection = styled.section`
  display: flex;
  justify-content: space-around;
  background: #fafafa;
`

export const InnerSection = styled.main`
  padding: 80px 0 120px;

  @media screen and (max-width: 1080px) {
    padding: 80px 20px 120px;
  }

  @media screen and (min-width: 1080px) {
    width: 1080px;
  }

  p {
    margin-top: 30px;
    opacity: 0.56;
    font-size: 16px;
    color: #000000;
    letter-spacing: 0.12px;
    line-height: 28px;
  }
`

export const Items = styled.main`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  @media screen and (max-width: 960px) {
    justify-content: space-between;
  }
`

export const Item = styled.div`
  margin-top: 64px;
  display: inline-flex;

  @media screen and (min-width: 960px) {
    width: 33%;
  }

  & > div:first-of-type {
    margin-right: 20px;
  }

  & > div {
    h4 {
      margin: 0;
      opacity: 0.72;
      font-weight: 600;
      font-size: 20px;
      color: #000000;
    }
    p {
      margin: 4px 0 0;
      width: 208px;
      opacity: 0.56;
      font-size: 14px;
      color: #000000;
      line-height: 24px;
    }
  }
`
