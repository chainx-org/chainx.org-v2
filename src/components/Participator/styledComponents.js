import styled from 'styled-components'

export const OuterSection = styled.section`
  display: flex;
  justify-content: space-around;
  background: #ffffff;
`

export const InnerSection = styled.main`
  padding: 80px 0 100px;

  @media screen and (max-width: 1080px) {
    padding: 0 20px;
  }

  @media screen and (min-width: 1080px) {
    width: 1080px;
  }
`

export const Items = styled.main`
  margin-top: 28px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

export const Item = styled.div`
  display: inline-block;

  h4 {
    margin: 52px 0 0;
    opacity: 0.72;
    font-weight: 600;
    font-size: 20px;
    color: #000000;
    display: flex;
    align-items: center;

    &::before {
      content: '\\A';
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #f6c94a;
      display: inline-block;
      margin-right: 10px;
    }
  }

  p {
    box-sizing: content-box;
    width: 268px;
    margin: 12px 0 0;
    padding-left: 20px;
    opacity: 0.56;
    font-size: 14px;
    color: #000000;
    line-height: 24px;
  }
`
