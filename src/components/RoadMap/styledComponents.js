import styled from 'styled-components'

export const OuterSection = styled.section`
  display: flex;
  justify-content: space-around;
  background: #fff;
`

export const InnerSection = styled.main`
  padding: 100px 0 100px;

  @media screen and (min-width: 860px) {
    margin: 0 20px;
    width: 100%;
  }

  @media screen and (min-width: 1080px) {
    margin: unset;
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

  @media screen and (max-width: 859px) {
    position: relative;
    right: 94px;
  }
`

export const Title = styled.h3`
  text-align: center;
  margin: 0;
  opacity: 0.72;
  font-weight: 600;
  font-size: 40px;
  color: #000000;
  letter-spacing: 0.2px;

  @media screen and (max-width: 859px) {
    position: relative;
    right: 94px;
  }
`

const Detail = styled.div`
  margin-top: 36px;
`

export const Horizontal = styled(Detail)`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 859px) {
    display: none;
  }
`

export const HorizontalItem = styled.div`
  flex: 1;

  h5 {
    margin: 0;
  }

  hr {
    margin: 17px 0;
    background: #f6c94a;
    height: 2px;

    &::before {
      content: '\\A';
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: #f6c94a;
      display: inline-block;
      position: relative;
      top: -12px;
    }
  }

  p {
    max-width: 268px;
    margin: 10px 0 0;
    opacity: 0.72;
    font-weight: lighter;
    font-size: 14px;
    color: #000000;
    letter-spacing: 0.12px;
    line-height: 24px;
  }
`

export const Vertical = styled(Detail)`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 860px) {
    display: none;
  }
`

export const VerticalItem = styled.div`
  display: flex;
  h5 {
    margin: 0;
  }

  & > h5 {
    max-width: 80px;
  }

  & > .detail {
    p {
      max-width: 268px;
      margin: 10px 0 0;
      opacity: 0.72;
      font-weight: lighter;
      font-size: 14px;
      color: #000000;
      letter-spacing: 0.12px;
      line-height: 24px;
    }
  }
`

export const VerticalSeparator = styled.div`
  border-left: 2px solid #f6c94a;
  display: flex;
  flex-direction: column;
  margin: 0 3px 0 17px;
  padding-bottom: 200px;

  &::before {
    content: '\\A';
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #f6c94a;
    display: inline-block;
    position: relative;
    left: -7px;
  }
`
