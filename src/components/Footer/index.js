import React from 'react'
import styled from 'styled-components'
import Logo from './logo.svg'
import Twitter from './twitter.svg'
import Telegram from './telegram.svg'
import Github from './github.svg'
import Email from './email.svg'
import $t from '../../locale'

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #222222;

  main {
    @media screen and (max-width: 568px) {
      width: 100%;
    }

    @media screen and (min-width: 768px) {
      width: 100%;
    }

    @media screen and (min-width: 1080px) {
      width: 1080px;
    }

    display: flex;
    flex-wrap: wrap;
    margin-bottom: 60px;
  }

  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`

const StyledSection = styled.section`
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 20px;
  }

  @media screen and (min-width: 768px) {
    width: 50%;
    padding-left: 20px;
  }

  @media screen and (min-width: 960px) {
    width: 25%;
  }

  margin-top: 60px;

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
  @media screen and (max-width: 1080px) {
    width: 100%;
    padding: 24px 20px;
  }

  @media screen and (min-width: 1080px) {
    width: 1080px;
  }

  max-width: 1080px;
  padding: 24px 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`

const Rights = styled.div`
  display: flex;
  align-items: center;

  opacity: 0.32;
  font-size: 14px;
  color: #ffffff;
`

const Contacts = styled.div`
  flex: 1;
  text-align: right;

  ol,
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  ol {
    display: flex;
    justify-content: flex-end;
  }

  li:not(:first-of-type) {
    margin-left: 24px;
  }

  li:last-of-type {
    margin-right: 20px;
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
          <header>{$t('products')}</header>
          <ul>
            <li>
              <a href="https://dapps.chainx.org/" target="_blank">
                {$t('wallet')}
              </a>
            </li>
            <li>
              <a href="https://scan.chainx.org/" target="_blank">
                {$t('explorer')}
              </a>
            </li>
            <li>
              <a href="https://stats.chainx.org/" target="_blank">
                {$t('telemetry')}
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://github.com/chainx-org/chainx-signer/releases"
              >
                {$t('signer')}
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://chrome.google.com/webstore/detail/chainx-extension/dffjlgnecfafjfmkknpipapcbgajflge"
              >
                {$t('extension')}
              </a>
            </li>
          </ul>
        </StyledSection>
        <StyledSection>
          <header>{$t('community')}</header>
          <ul>
            <li>
              <a href="https://dapps.chainx.org/" target="_blank">
                {$t('community')}
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://github.com/chainx-org/chainx/wiki/Join-ChainX-Mainnet"
              >
                {$t('deploy')}
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://github.com/chainx-org/chainx/wiki/%E6%99%BA%E8%83%BD%E5%90%88%E7%BA%A6"
              >
                {$t('contract')}
              </a>
            </li>
          </ul>
        </StyledSection>
        <StyledSection>
          <header>{$t('white_paper')}</header>
          <ul>
            <li>
              <a
                target="_blank"
                href="https://chainx-static.oss-cn-hangzhou.aliyuncs.com/chainx_cn.pdf"
              >
                白皮书
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://chainx-static.oss-cn-hangzhou.aliyuncs.com/chainx_en.pdf"
              >
                White Paper
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://chainx-static.oss-cn-hangzhou.aliyuncs.com/chainx_ru.pdf"
              >
                Белая бумага
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://chainx-static.oss-cn-hangzhou.aliyuncs.com/chainx_vi.pdf"
              >
                giấy trắng
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://chainx-static.oss-cn-hangzhou.aliyuncs.com/chainx_it.pdf"
              >
                Carta Bianca
              </a>
            </li>
          </ul>
        </StyledSection>
        <StyledSection>
          <header>{$t('manual')}</header>
          <ul>
            <li>
              <a href="https://dapps.chainx.org/">什么是 ChainX Signer？</a>
            </li>
            <li>
              <a href="https://dapps.chainx.org/">如何跨链充值 BTC？</a>
            </li>
            <li>
              <a href="https://dapps.chainx.org/">如何跨链锁仓 BTC？</a>
            </li>
            <li>
              <a href="https://dapps.chainx.org/">帮助中心</a>
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
        </Contacts>
        <Logo style={{ width: 112, height: 24 }} />
      </Bottom>
    </StyledFooter>
  )
}
