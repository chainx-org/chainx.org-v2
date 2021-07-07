import React, { useRef, useState, useEffect } from 'react'
import { IntlContextConsumer, useIntl } from 'gatsby-plugin-intl'
import jquery from 'jquery'
import Logoen from './ChainXLogo.svg'
import ChainxLogo from './ChainXLogoWhite.svg'
import CatalogIcon from './catalog.svg'
import styled from 'styled-components'
import useOutsideClick from './useClickOutside'
import LanguageSwitcher from './LanguageSwitcher.jsx'
import ChainXWhitePaper from '../../assetpdf/ChainXWhitePaper.pdf'
import ChainX from '../../assetpdf/ChainX.pdf'
import SherpaXLightpaper from '../../assetpdf/SherpaXLightpaper.pdf'
import SherpaX from '../../assetpdf/SherpaX.pdf'

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-around;
  height: 80px;
  // line-height: 50px;
  width: 100%;
  background: #000000;
  position: absolute;
  z-index: 100;
  transition: all 0.3s linear;
  -webkit-transition: all 0.3s linear;
  -moz-transition: all 0.3s linear;
  -ms-transition: all 0.3s linear;
  -o-transition: all 0.3s linear;

  &.head_white {
    background: #000000;
    position: fixed;
    // border-bottom: 1px solid #EFEFEF;
  }
`

const InnerSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  div a {
    display: flex;
  }
  @media screen and (min-width: 1400px) {
    display: flex;
    width: 1280px;
    justify-content: space-between;
  }
  @media screen and (min-width: 1200px) and (max-width: 1399px) {
    display: flex;
    width: 1080px;
    justify-content: space-between;
  }
  @media screen and (min-width: 1024px) and (max-width: 1199px) {
    display: flex;
    width: 950px;
    justify-content: space-between;
  }
  @media screen and (min-width: 900px) and (max-width: 1023px) {
    display: flex;
    width: 800px;
    justify-content: space-between;
  }
  ul {
    display: flex;
    align-items: center;
    @media screen and (max-width: 760px) {
      display: none;
    }
  }
`
const NavList = styled.ul`
  list-style: none;
  margin: 0;
  .tit,
  .langtab {
    margin: 0 16px;
    @media screen and (min-width: 760px) and (max-width: 820px) {
      margin: 0 10px;
    }
    .active {
      color: #ffffff;
    }
  }
  .langtab {
    cursor: pointer;
    .lang {
      margin: 0 12px;
      color: #969696;
    }
    .pitchon {
      // color: #969696;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #282828 !important;
      line-height: 20px;
      padding: 8px 0;
    }
    span:hover {
      color: #ffffff;
    }
    .active {
      color: #ffffff;
    }
  }
  li .posselect {
    position: relative;
    .childselect {
      display: none;
      position: absolute;
      padding: 16px 20px 0;
      margin: 16px 0 0 -16px;
      font-size: 14px;
      letter-spacing: 0.12px;
      line-height: 20px;
      background: rgba(255, 255, 255, 0.98);
      box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3);
      border-radius: 4px;
      &.selectzh {
        width: 160px;
      }
      &.selecten {
        width: 190px;
      }
      a {
        color: #5c5c5c;
        padding-bottom: 16px;
        &:hover {
          color: #2d2d2d;
        }
      }
    }
    &:hover .childselect {
      display: block;
    }
  }
  li {
    a,
    span {
      text-decoration: none;
      font-size: 16px;
      color: rgba(255, 255, 255, 0.8);
      text-align: center;
      line-height: 16px;
      &:hover {
        color: rgba(255, 255, 255, 1);
      }
    }
    span {
      padding: 20px 0;
    }
  }

  li {
    display: inline-block;
    font-size: 16px;
    line-height: 16px;
    cursor: pointer;
    margin: 0;
  }
`

const MenuToggle = styled.div`
  display: inline-flex;
  align-items: center;
  span svg {
    width: 28px;
    height: 16px;
    g g {
      fill: #fff;
    }
  }
  & > a {
    text-decoration: none;
    margin-left: 30px;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
  }
  @media screen and (min-width: 760px) {
    display: none;
  }
`

const Menu = styled.div`
  background: rgba(255, 255, 255, 0.98);
  border: 1px solid #dce0e2;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  width: 130px;
  position: absolute;
  top: 66px;
  right: 30px;
  z-index: 100;
  ul,
  li {
    list-style: none;
    margin: 0;
    padding: 10px 0;
  }
  ul li a {
    text-decoration: none;
    color: #969696;
  }
  li {
    text-align: center;
    &:hover {
      background: rgba(246, 201, 74, 0.9);
      a {
        color: #282828;
      }
    }
  }
  ul {
    .langtab {
      cursor: pointer;
      position: relative;
      .lang {
        margin: 0 12px;
        color: #969696;
      }
      .pitchon {
        // color: #969696;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #282828;
        line-height: 20px;
      }
      .active {
        color: #282828;
      }
    }
  }
  @media screen and (min-width: 760px) {
    display: none;
  }
`

export default function Header() {
  const [showMenu, setShowMenu] = useState(false)
  const refMenu = useRef(null)

  useOutsideClick(refMenu, () => {
    if (showMenu) {
      setShowMenu(false)
    }
  })

  useEffect(() => {
    jquery(document).on('mousewheel DOMMouseScroll', function (event) {
      const delta =
        (event.originalEvent.wheelDelta &&
          (event.originalEvent.wheelDelta > 0 ? 1 : -1)) ||
        (event.originalEvent.detail &&
          (event.originalEvent.detail > 0 ? -1 : 1))
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop
      if (scrollTop === 0) {
        jquery('.wrap_head')
          .removeClass('head_white')
          .css({ top: '0' })
          .fadeIn()
      } else if (scrollTop > 0 && scrollTop < 160) {
        jquery('.wrap_head').css({ top: '0' }).addClass('head_white')
      } else if (delta < 0 && scrollTop > 160) {
        jquery('.wrap_head').css({ top: '-80px' })
      } else if (delta > 0) {
        jquery('.wrap_head').css({ top: '0' }).addClass('head_white')
      }
    })

    jquery(function () {
      const clientWidth = document.body.clientWidth
      if (clientWidth < 760) {
        jquery('.wrappers').removeClass('wrap_head')
      } else {
        jquery('.wrappers').addClass('wrap_head')
      }
    })
  })

  const intl = useIntl()
  const [showIntl,setShowIntl] = useState(false)
  const handleShowIntl = () => {
    setShowIntl(!showIntl)
  }
  return (
    <StyledHeader className="wrap_head wrappers">
      <InnerSection>
        <div className="logoicon">
          <a href="/">
            <div>
              <ChainxLogo />
            </div>
          </a>
        </div>
        <IntlContextConsumer>
          {({ languages, language: currentLocale }) => (
            <NavList className="navlists">
              <li className="tit">
                <a
                  style={{ display: 'zh' === currentLocale ? 'block' : 'none' }}
                  href="https://dapps.chainx.org/"
                  className="txt"
                  target="_blank"
                  rel="noreferrer"
                >
                  钱包
                </a>
                <a
                  style={{ display: 'en' === currentLocale ? 'block' : 'none' }}
                  href="https://dapps.chainx.org/"
                  className="txt"
                  target="_blank"
                  rel="noreferrer"
                >
                  Wallet
                </a>
              </li>
              <li className="tit">
                <a
                  style={{ display: 'zh' === currentLocale ? 'block' : 'none' }}
                  href="https://scan.chainx.org/"
                  className="txt"
                  target="_blank"
                  rel="noreferrer"
                >
                  区块浏览器
                </a>
                <a
                  style={{ display: 'en' === currentLocale ? 'block' : 'none' }}
                  href="https://scan.chainx.org/"
                  className="txt"
                  target="_blank"
                  rel="noreferrer"
                >
                  Browser
                </a>
              </li>
              <li className="tit">
                <a
                  style={{ display: 'zh' === currentLocale ? 'block' : 'none' }}
                  href="http://telemetry.chainx.org/"
                  className="txt"
                  target="_blank"
                  rel="noreferrer"
                >
                  监控台
                </a>
                <a
                  style={{ display: 'en' === currentLocale ? 'block' : 'none' }}
                  href="http://telemetry.chainx.org/"
                  className="txt"
                  target="_blank"
                  rel="noreferrer"
                >
                  Monitoring
                </a>
              </li>
              <li className="tit">
                <div
                  style={{ display: 'zh' === currentLocale ? 'block' : 'none' }}
                  className="txt posselect"
                >
                  <span>白皮书</span>
                  <div className="childselect selectzh">
                    <a href={ChainX} target="_blank" rel="noreferrer">
                      ChainX 白皮书
                    </a>
                    <a href={SherpaX} target="_blank" rel="noreferrer">
                      SherpaX 轻皮书
                    </a>
                  </div>
                </div>
                <div
                  style={{ display: 'en' === currentLocale ? 'block' : 'none' }}
                  className="txt posselect"
                >
                  <span>White Paper</span>
                  <div className="childselect selecten">
                    <a href={ChainXWhitePaper} target="_blank" rel="noreferrer">
                      ChainX Whitepaper
                    </a>
                    <a
                      href={SherpaXLightpaper}
                      target="_blank"
                      rel="noreferrer"
                    >
                      SherpaX Lightpaper
                    </a>
                  </div>
                </div>
              </li>
              <li className="tit">
                <a
                  style={{ display: 'zh' === currentLocale ? 'block' : 'none' }}
                  href="https://chainx-doc.gitbook.io/chainx-user-guide-chinese/"
                  target="_blank"
                  rel="noreferrer"
                  className="txt"
                >
                  帮助
                </a>
                <a
                  style={{ display: 'en' === currentLocale ? 'block' : 'none' }}
                  href="https://chainx-doc.gitbook.io/chainx-user-guide-english/"
                  target="_blank"
                  rel="noreferrer"
                  className="txt"
                >
                  Help
                </a>
              </li>
              <li className="langtab" onClick={handleShowIntl}>
                <LanguageSwitcher showIntl={showIntl}/>
              </li>
            </NavList>
          )}
        </IntlContextConsumer>
        <MenuToggle>
          <span onClick={() => setShowMenu(!showMenu)}>
            <CatalogIcon />
          </span>
        </MenuToggle>
      </InnerSection>
      {showMenu && (
        <IntlContextConsumer>
          {({ languages, language: currentLocale }) => (
            <Menu ref={refMenu}>
              <ul>
                <li className="tit">
                  <a
                    style={{
                      display: 'zh' === currentLocale ? 'block' : 'none',
                    }}
                    href="https://dapps.chainx.org/"
                    className="txt"
                    target="_blank"
                    rel="noreferrer"
                  >
                    钱包
                  </a>
                  <a
                    style={{
                      display: 'en' === currentLocale ? 'block' : 'none',
                    }}
                    href="https://dapps.chainx.org/"
                    className="txt"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Wallet
                  </a>
                </li>
                <li className="tit">
                  <a
                    style={{
                      display: 'zh' === currentLocale ? 'block' : 'none',
                    }}
                    href="https://scan.chainx.org/"
                    className="txt"
                    target="_blank"
                    rel="noreferrer"
                  >
                    区块浏览器
                  </a>
                  <a
                    style={{
                      display: 'en' === currentLocale ? 'block' : 'none',
                    }}
                    href="https://scan.chainx.org/"
                    className="txt"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Browser
                  </a>
                </li>
                <li className="tit">
                  <a
                    style={{
                      display: 'zh' === currentLocale ? 'block' : 'none',
                    }}
                    href="http://telemetry.chainx.org/"
                    className="txt"
                    target="_blank"
                    rel="noreferrer"
                  >
                    监控台
                  </a>
                  <a
                    style={{
                      display: 'en' === currentLocale ? 'block' : 'none',
                    }}
                    href="http://telemetry.chainx.org/"
                    className="txt"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Monitoring
                  </a>
                </li>
                <li className="tit">
                  <a
                    style={{
                      display: 'zh' === currentLocale ? 'block' : 'none',
                    }}
                    href={ChainX}
                    className="txt"
                    target="_blank"
                    rel="noreferrer"
                  >
                    ChainX 白皮书
                  </a>
                  <a
                    style={{
                      display: 'en' === currentLocale ? 'block' : 'none',
                    }}
                    href={ChainXWhitePaper}
                    className="txt"
                    target="_blank"
                    rel="noreferrer"
                  >
                    ChainX Whitepaper
                  </a>
                </li>
                <li className="tit">
                  <a
                    style={{
                      display: 'zh' === currentLocale ? 'block' : 'none',
                    }}
                    href={SherpaX}
                    className="txt"
                    target="_blank"
                    rel="noreferrer"
                  >
                    SherpaX 轻皮书
                  </a>
                  <a
                    style={{
                      display: 'en' === currentLocale ? 'block' : 'none',
                    }}
                    href={SherpaXLightpaper}
                    className="txt"
                    target="_blank"
                    rel="noreferrer"
                  >
                    SherpaX Lightpaper
                  </a>
                </li>
                <li className="tit">
                  <a
                    style={{
                      display: 'zh' === currentLocale ? 'block' : 'none',
                    }}
                    href="https://chainx-doc.gitbook.io/chainx-user-guide-chinese/"
                    target="_blank"
                    rel="noreferrer"
                    className="txt"
                  >
                    帮助
                  </a>
                  <a
                    style={{
                      display: 'en' === currentLocale ? 'block' : 'none',
                    }}
                    href="https://chainx-doc.gitbook.io/chainx-user-guide-english/"
                    target="_blank"
                    rel="noreferrer"
                    className="txt"
                  >
                    Help
                  </a>
                </li>
                <li className="langtab" onClick={handleShowIntl}>
                  <LanguageSwitcher  showIntl={showIntl}/> 
                </li>
              </ul>
            </Menu>
          )}
        </IntlContextConsumer>
      )}
    </StyledHeader>
  )
}
