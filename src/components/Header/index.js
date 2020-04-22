import PropTypes from 'prop-types'
import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import Logo from './chainx-header-logo.svg'
import { BaseInner } from '../baseComponents'
import LanguageIcon from './language.svg'
import $t from '../../locale'
import { getLocale, toggleLocale } from '../../locale'
import { enWhitePaper, zhWhitePaper } from '../../constants'
import CatalogIcon from './catalog.svg'
import useOutsideClick from '../../utils/useClickOutside'

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-around;
  position: relative;
`

const InnerSection = styled(BaseInner)`
  @media screen and (max-width: 1080px) {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 36px 20px 0;
  }

  padding-top: 36px;
  ul,
  li {
    list-style: none;
    margin: 0;
  }

  ul {
    display: flex;
    align-items: center;
  }

  li {
    display: inline-block;
    opacity: 0.72;
    font-size: 14px;
    color: #000000;
    line-height: 24px;
    cursor: pointer;

    & > span {
      margin-left: 8px;
    }

    a {
      color: #000000;
      text-decoration: none;
    }

    &:not(:first-of-type) {
      margin-left: 40px;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 36px 20px 0;
    & > ul {
      display: none;
    }
  }
`

const MenuToggle = styled.div`
  display: inline-flex;
  align-items: center;
  & > span {
    margin-right: 20px;
    display: inline-flex;
    align-items: center;

    & > span {
      margin-left: 5px;
    }
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`

const Menu = styled.div`
  background: rgba(255, 255, 255, 0.98);
  border: 1px solid #dce0e2;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  width: 150px;
  padding: 10px 0;

  position: absolute;
  top: 66px;
  right: 20px;

  ul,
  li {
    list-style: none;
    margin: 0;
  }

  li {
    padding: 0 20px;
    &:hover {
      background: #f5f6f7;
    }
  }

  a {
    text-decoration: none;
    opacity: 0.72;
    font-size: 14px;
    color: #000000;
    letter-spacing: 0.12px;
    line-height: 20px;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`

const Header = () => {
  const locale = getLocale()
  const url = locale === 'zh' ? zhWhitePaper : enWhitePaper
  const isCommunityPage = window.location.pathname === '/community'

  const [showMenu, setShowMenu] = useState(false)
  const refMenu = useRef(null)

  useOutsideClick(refMenu, () => {
    if (showMenu) {
      setShowMenu(false)
    }
  })

  return (
    <StyledHeader style={{ background: isCommunityPage ? '#FFF' : '' }}>
      <InnerSection>
        <a href="/">
          <Logo height={32} width={148} />
        </a>
        <ul>
          <li>
            <a href="/community">{$t('community')}</a>
          </li>
          <li>
            <a href="https://dapps.chainx.org" target="_blank">
              {$t('wallet')}
            </a>
          </li>
          <li>
            <a href="https://scan.chainx.org" target="_blank">
              {$t('explorer')}
            </a>
          </li>
          <li>
            <a href="https://stats.chainx.org/" target="_blank">
              {$t('telemetry')}
            </a>
          </li>
          <li>
            <a target="_blank" href={url}>
              {$t('white_paper')}
            </a>
          </li>
          <li>{$t('help')}</li>
          <li onClick={toggleLocale}>
            <LanguageIcon />
            <span>{locale === 'zh' ? 'English' : '中文'}</span>
          </li>
        </ul>
        <MenuToggle>
          <span onClick={toggleLocale}>
            <LanguageIcon width={16} height={16} />
            <span>{locale === 'zh' ? 'English' : '中文'}</span>
          </span>
          <span onClick={() => setShowMenu(!showMenu)}>
            <CatalogIcon width={24} height={24} />
          </span>
        </MenuToggle>
      </InnerSection>
      {showMenu && (
        <Menu ref={refMenu}>
          <ul>
            <li>
              <a href="/community">{$t('community')}</a>
            </li>
            <li>
              <a href="https://dapps.chainx.org" target="_blank">
                {$t('wallet')}
              </a>
            </li>
            <li>
              <a href="https://scan.chainx.org" target="_blank">
                {$t('explorer')}
              </a>
            </li>
            <li>
              <a href="https://stats.chainx.org/" target="_blank">
                {$t('telemetry')}
              </a>
            </li>
            <li>
              <a target="_blank" href={url}>
                {$t('white_paper')}
              </a>
            </li>
            <li>
              <a href="https://dapps.chainx.org" target="_blank">
                {$t('help')}
              </a>
            </li>
          </ul>
        </Menu>
      )}
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
