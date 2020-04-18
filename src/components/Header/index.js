import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import Logo from './logo.svg'
import { BaseInner } from '../baseComponents'
import LanguageIcon from './language.svg'

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

  li {
    display: inline-block;
    opacity: 0.72;
    font-size: 14px;
    color: #000000;
    line-height: 24px;
    cursor: pointer;

    a {
      color: #000000;
      text-decoration: none;
    }

    &:not(:first-of-type) {
      margin-left: 40px;
    }
  }
`

const Header = () => (
  <StyledHeader>
    <InnerSection>
      <Logo height={32} width={148} />
      <ul>
        <li>社区</li>
        <li>
          <a href="https://dapps.chainx.org" target="_blank">
            钱包
          </a>
        </li>
        <li>
          <a href="https://scan.chainx.org" target="_blank">
            区块浏览器
          </a>
        </li>
        <li>
          <a href="https://stats.chainx.org/" target="_blank">
            监控台
          </a>
        </li>
        <li>白皮书</li>
        <li>帮助</li>
        <li>
          <LanguageIcon />
        </li>
      </ul>
    </InnerSection>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
