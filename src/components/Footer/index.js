import React from 'react'
import styled from 'styled-components'
import Logo from './logo.svg'
import Twitter from './twitter.svg'
import Telegram from './telegram.svg'
import Github from './github.svg'
import Email from './email.svg'

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #222222;

  main {
    width: 1080px;
    padding: 60px 0;
    display: flex;
    justify-content: space-between;
  }

  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`

const StyledSection = styled.section`
  & > header {
    opacity: 0.8;
    font-size: 14px;
    font-weight: 500;
    color: #ffffff;
    line-height: 1;
    margin-bottom: 20px;
  }

  li {
    line-height: 1;

    &:not(:first-of-type) {
      margin-top: 12px;
    }
  }

  a {
    text-decoration: none;
    opacity: 0.56;
    font-size: 14px;
    color: #ffffff;
  }
`

const Separator = styled.hr`
  background: rgba(255, 255, 255, 0.12);
  width: 100%;
  margin: 0;
`

const Bottom = styled.div`
  width: 1080px;
  padding: 24px 0;

  display: flex;
  justify-content: space-between;
`

const Rights = styled.div`
  display: flex;
  align-items: center;

  opacity: 0.32;
  font-size: 14px;
  color: #ffffff;
`

const Contacts = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ol,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  ol {
    display: flex;
  }

  li:not(:first-of-type) {
    margin-left: 24px;
  }

  li:last-of-type {
    margin-right: 100px;
  }

  a {
    display: flex;
    text-decoration: none;
  }
`

export default function() {
  return (
    <StyledFooter>
      <main>
        <StyledSection>
          <header>产品</header>
          <ul>
            <li>
              <a href="https://dapps.chainx.org/" target="_blank">
                钱包
              </a>
            </li>
            <li>
              <a href="https://scan.chainx.org/" target="_blank">
                区块浏览器
              </a>
            </li>
            <li>
              <a href="https://stats.chainx.org/" target="_blank">
                监控台
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://chrome.google.com/webstore/detail/chainx-extension/dffjlgnecfafjfmkknpipapcbgajflge"
              >
                钱包插件
              </a>
            </li>
          </ul>
        </StyledSection>
        <StyledSection>
          <header>社区</header>
          <ul>
            <li>
              <a href="https://dapps.chainx.org/" target="_blank">
                社区
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://github.com/chainx-org/chainx/wiki/Join-ChainX-Mainnet"
              >
                节点部署文档
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://github.com/chainx-org/chainx/wiki/%E6%99%BA%E8%83%BD%E5%90%88%E7%BA%A6"
              >
                智能合约开发文档
              </a>
            </li>
          </ul>
        </StyledSection>
        <StyledSection>
          <header>白皮书</header>
          <ul>
            <li>
              <a href="https://dapps.chainx.org/">白皮书</a>
            </li>
            <li>
              <a href="javascript:;">White Paper</a>
            </li>
            <li>
              <a href="javascript:;">Белая бумага</a>
            </li>
            <li>
              <a href="javascript:;">giấy trắng</a>
            </li>
            <li>
              <a href="javascript:;">Carta Bianca</a>
            </li>
          </ul>
        </StyledSection>
        <StyledSection>
          <header>钱包使用帮助</header>
          <ul>
            <li>
              <a href="javascript:;">什么是 ChainX Signer？</a>
            </li>
            <li>
              <a href="javascript:;">如何跨链充值 BTC？</a>
            </li>
            <li>
              <a href="javascript:;">如何跨链锁仓 BTC？</a>
            </li>
            <li>
              <a href="javascript:;">帮助中心</a>
            </li>
          </ul>
        </StyledSection>
      </main>
      <Separator />
      <Bottom>
        <Rights>All rights reserved © 2020 ChainX</Rights>
        <Contacts>
          <ol>
            <li>
              <a href="https://twitter.com/chainx_org" target="_blank">
                <Twitter />
              </a>
            </li>
            {/*<li>*/}
            {/*  <a href="" target="_blank"><Medium /></a>*/}
            {/*</li>*/}
            <li>
              <a href="https://t.me/chainx_org" target="_blank">
                <Telegram />
              </a>
            </li>
            {/*<li>*/}
            {/*  <a href="" target="_blank"><Wechat /></a>*/}
            {/*</li>*/}
            <li>
              <a href="http://github.com/chainx-org" target="_blank">
                <Github />
              </a>
            </li>
            <li>
              <a href="mailto:hi@chainx.org">
                <Email />
              </a>
            </li>
          </ol>
          <Logo style={{ width: 112, height: 24 }} />
        </Contacts>
      </Bottom>
    </StyledFooter>
  )
}
