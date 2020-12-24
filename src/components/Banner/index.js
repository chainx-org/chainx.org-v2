import React from 'react'
import styled from 'styled-components'
import Bannerlogo from './banner-logo.png'

const StyledSection = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 180px 0 52px;

`

export const InnerSection = styled.main`
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 1023px) {
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-width: 768px) {
    padding: 0 30px;
    .bglogo {
      display: flex;
      justify-content: center;
    }
  }
  
`

const Detail = styled.div`
  margin-bottom: 20px;
`

const Title = styled.div`
  font-size: 48px;
  color: #282828;
  font-weight: bold;
  @media screen and (max-width: 539px) {
    font-size: 38px;
  }
  
`

const Contents = styled.p`
  font-size: 18px;
  color: #5C5C5C;
  line-height: 30px;
  margin: 24px 0 40px;
  @media screen and (min-width: 1024px) and (max-width: 1280px) {
    width: 400px;
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 620px;
  }
  @media screen and (min-width: 1280px) {
    width: 620px;
  }
` 

const Linkbtn = styled.a`
  text-decoration: none;
  font-size: 16px;
  color: #282828;
  background: rgba(246,201,74,1);
  border-radius: 6px;
  padding: 10px 40px;
  &:hover {
    text-decoration: none;
    color: #282828;
    background: rgba(246,201,74,.8);
  }
` 

const Bannerbgpic = styled.p`
  width: 400px;
  height: 440px;
  background: url(${Bannerlogo});
  background-size: cover;
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    margin: 0 0 0 137px;
  }
  @media screen and (min-width: 1024px) and (max-width: 1280px) {
    margin: 0 0 0 30px;
  }
  @media screen and (min-width: 1280px) {
    margin: 0 0 0 137px;
  }
  @media screen and (max-width: 539px) {
    width: 300px;
    height: 330px;
  }
`

export default function() {

  return (
    <StyledSection>
      <InnerSection>
        <Detail>
          <Title>打破链间壁垒，</Title>
          <Title>促进加密资产流动</Title>
          <Contents>ChainX 是波卡生态最早上线的项目，致力于 BTCLayer2 拓展、数字资产网关及波卡二级中继链的开发研究，以实现跨链资产互通，引领比特币 Cross-Defi 新方向。</Contents>
          <Linkbtn href="/">白皮书</Linkbtn>
        </Detail>
        <div className="bglogo">
          <Bannerbgpic />
        </div>
      </InnerSection>
    </StyledSection>
  )
}
