import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Logo from './chainx-header-logo.svg'
import { BaseInner } from '../baseComponents'
import LanguageIcon from './language.svg'
import $t from '../../locale'
import { getLocale, toggleLocale } from '../../locale'
import { enWhitePaper, zhWhitePaper } from '../../constants'

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-around;
`

const InnerSection = styled(BaseInner)`
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
`

const Header = () => {
  const locale = getLocale()
  const url = locale === 'zh' ? zhWhitePaper : enWhitePaper

  return (
    <StyledHeader>
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
      </InnerSection>
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
