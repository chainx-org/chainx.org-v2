import React, { useRef, useState, useEffect } from 'react'
import { IntlContextConsumer, useIntl } from "gatsby-plugin-intl"
import jquery from 'jquery'
import Logoen from "./ChainXLogo.svg"
import ChainxLogo from "./ChainXLogoWhite.svg"
import CatalogIcon from "./catalog.svg"
import styled from 'styled-components'
import useOutsideClick from './useClickOutside'
import LanguageSwitcher from "./LanguageSwitcher"
import ChainXWhitePaper from './ChainXWhitePaper.pdf'
import ChainX from './ChainX.pdf'

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
  @media screen and (min-width:1400px) {
    display: flex;
    width: 1280px;
    justify-content: space-between;
  }
  @media screen and (min-width:1200px) and (max-width:1399px) {
    display: flex;
    width: 1080px;
    justify-content: space-between;
  }
  @media screen and (min-width:1024px) and (max-width:1199px) {
    display: flex;
    width: 950px;
    justify-content: space-between;
  }
  @media screen and (min-width:900px) and (max-width:1023px) {
    display: flex;
    width: 800px;
    justify-content: space-between;
  }
  ul {
    display: flex;
    align-items: center;
    @media screen and (max-width:760px) {
      display: none;
    }
  }
`
const NavList = styled.ul`
  list-style: none;
  margin: 0;
  .tit, .langtab {
    margin: 0 16px;
    @media screen and (min-width:760px) and (max-width:820px) {
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
      color: #969696;
    }
    span:hover {
      color: #ffffff;
    }
    .active {
      color: #ffffff;
    }
  }
  li a {
    text-decoration: none;
    font-size: 16px;
    color: rgba(255,255,255,0.8);
    text-align: center;
    line-height: 16px;
    &:hover {
      color: rgba(255,255,255,1);
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
      fill: #333333;
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
  ul, li {
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
      background: rgba(246,201,74,.9);
      a {
        color: #282828;
      } 
    }
  }
  ul {
    .langtab {
      cursor: pointer;
      .lang {
        margin: 0 12px;
        color: #969696;
      }
      .pitchon {
        color: #969696;
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

  useEffect(()=>{

    jquery(document).on("mousewheel DOMMouseScroll", function (event) {
      const delta = (event.originalEvent.wheelDelta && (event.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  
                  (event.originalEvent.detail && (event.originalEvent.detail > 0 ? -1 : 1));             
      let scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
      if (scrollTop === 0) {
        jquery(".wrap_head").removeClass("head_white").css({"top":"0"}).fadeIn();
      } else if(scrollTop > 0 && scrollTop < 160)  {
        jquery(".wrap_head").css({"top":"0"}).addClass("head_white");
      } else if(delta < 0 && scrollTop > 160) {
        jquery(".wrap_head").css({"top":"-80px"});
      } else if(delta > 0) {
        jquery(".wrap_head").css({"top":"0"}).addClass("head_white");
      }
    });
   
    jquery(function(){
      const clientWidth = document.body.clientWidth
      if(clientWidth<760) {
        jquery(".wrappers").removeClass("wrap_head");
      } else {
        jquery(".wrappers").addClass("wrap_head");
      }
    });

  })

  const intl = useIntl()

  return (
    <StyledHeader className="wrap_head wrappers">
      <InnerSection>
        <div className="logoicon">
          <a href="/" >
            <div>
              <ChainxLogo />
            </div>  
          </a>
        </div>
        <NavList className="navlists">
          <li className="tit">
            <a href="https://dapps.chainx.org/" className="txt" target="_blank" rel="noreferrer">
            {intl.formatMessage({ id: "wallet" })}
            </a>
          </li>
          <li className="tit">
            <a href="https://scan.chainx.org/" className="txt" target="_blank" rel="noreferrer">
            {intl.formatMessage({ id: "browser" })}
            </a>
          </li>
          <li className="tit">
            <a href="http://telemetry.chainx.org/" className="txt" target="_blank" rel="noreferrer">
            {intl.formatMessage({ id: "monitoring" })}
            </a>
          </li>
          <li className="tit">
            <IntlContextConsumer>
              {({ languages, language: currentLocale }) => (
                <a>
                  <a style={{display: ( "zh" === currentLocale ) ? "block" : "none"}} href={ChainX} className="txt" target="_blank" rel="noreferrer">
                  白皮书
                  </a>
                  <a style={{display: ( "en" === currentLocale ) ? "block" : "none"}} href={ChainXWhitePaper} className="txt" target="_blank" rel="noreferrer">
                    White Paper
                  </a>
                </a>
              )}
            </IntlContextConsumer>
          </li>
          <li className="tit">
            <a href="https://chainx-doc.gitbook.io/chainx-user-doc/" target="_blank" rel="noreferrer" className="txt">
            {intl.formatMessage({ id: "help" })}
            </a>
          </li>
          <li className="langtab">
            <LanguageSwitcher />
          </li>
        </NavList>
        <MenuToggle>
          <span onClick={() => setShowMenu(!showMenu)}>
            <CatalogIcon />
          </span>
        </MenuToggle>
      </InnerSection>
      {showMenu && (
        <Menu ref={refMenu}>
        <ul>
          <li className="tit">
            <a href="https://dapps.chainx.org/" className="txt" target="_blank" rel="noreferrer">
            {intl.formatMessage({ id: "wallet" })}
            </a>
          </li>
          <li className="tit">
            <a href="https://scan.chainx.org/" className="txt" target="_blank" rel="noreferrer">
            {intl.formatMessage({ id: "browser" })}
            </a>
          </li>
          <li className="tit">
            <a href="http://telemetry.chainx.org/" className="txt" target="_blank" rel="noreferrer">
            {intl.formatMessage({ id: "monitoring" })}
            </a>
          </li>
          <li className="tit">
            <IntlContextConsumer>
              {({ languages, language: currentLocale }) => (
                <a>
                  <a style={{display: ( "zh" === currentLocale ) ? "block" : "none"}} href={ChainX} className="txt" target="_blank" rel="noreferrer">
                  白皮书
                  </a>
                  <a style={{display: ( "en" === currentLocale ) ? "block" : "none"}} href={ChainXWhitePaper} className="txt" target="_blank" rel="noreferrer">
                    White Paper
                  </a>
                </a>
              )}
            </IntlContextConsumer>
          </li>
          <li className="tit">
            <a href="https://chainx-doc.gitbook.io/chainx-user-doc/" target="_blank" rel="noreferrer" className="txt">
            {intl.formatMessage({ id: "help" })}
            </a>
          </li>
          <li className="langtab">
            <LanguageSwitcher />
          </li>
        </ul>
        </Menu>
      )}
    </StyledHeader>
  )
}
