import styled from 'styled-components'

export const OuterSection = styled.section`
  display: flex;
  justify-content: space-around;
  background: #fff;
`

export const InnerSection = styled.main`
  padding: 80px 0 120px;

  @media screen and (min-width: 1080px) {
    width: 1080px;
  }
`

export const Separator = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-around;

  hr {
    background: rgba(0, 0, 0, 0.2);
    width: 100px;
    margin: 0;
  }
`

export const Apps = styled.main`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  @media screen and (min-width: 960px) {
    justify-content: space-between;
  }
`

export const Item = styled.div`
  margin: 80px 10px 0;
  display: inline-flex;
  flex-direction: column;
  align-items: center;

  h4 {
    margin: 20px 0 12px;
    opacity: 0.72;
    font-weight: 600;
    font-size: 20px;
    color: #000000;
    text-align: center;
  }

  p {
    opacity: 0.56;
    font-size: 14px;
    color: #000000;
    text-align: center;
    line-height: 24px;
    flex: 1;
    max-width: 268px;
  }

  @media screen and (min-width: 960px) {
    //width: 33%;
  }

  & > div {
    display: flex;
    button {
      background: #f2f3f4;
      border-radius: 28px;
      padding: 8px 24px;
      font-weight: 600;
      font-size: 14px;
      color: #090909;
      letter-spacing: 0.16px;
      line-height: 24px;

      &:last-of-type {
        margin-left: 8px;
      }

      span {
        opacity: 0.72;
      }
    }
  }
`
