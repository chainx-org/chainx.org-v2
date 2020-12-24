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
`

const Detail = styled.div`
  // p {
  //   margin-top: 30px;
  //   opacity: 0.56;
  //   font-size: 16px;
  //   color: #000000;
  //   letter-spacing: 0.12px;
  //   line-height: 28px;
  // }
`

const Title = styled.div`
  font-size: 48px;
  color: #282828;
  font-weight: bold;
  
`

const Contents = styled.p`
  width: 620px;
  font-size: 18px;
  color: #5C5C5C;
  line-height: 30px;
  margin: 24px 0 40px;
` 

const Linkbtn = styled.a`
  text-decoration: none;
  font-size: 16px;
  color: #282828;
  background: #F6C94A;
  border-radius: 6px;
  padding: 10px 40px;
  &:hover {
    text-decoration: none;
    color: #282828;
  }
` 

const Bannerbgpic = styled.p`
  width: 400px;
  height: 440px;
  background: url(${Bannerlogo});
  background-size: cover;
  margin: 0 0 0 137px;
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
        <div>
          <Bannerbgpic />
        </div>
      </InnerSection>
    </StyledSection>
  )
}
