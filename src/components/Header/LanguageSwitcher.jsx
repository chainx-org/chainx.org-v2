import classNames from 'classnames'
import {
  changeLocale,
  injectIntl,
  IntlContextConsumer,
} from 'gatsby-plugin-intl'
import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
const StyledIntl = styled.header`
  div {
    position: relative;
    .local {
      display: inline-block;
      font-size: 16px;
      line-height: 16px;
      cursor: pointer;
      margin: 0;
      font-size: 16px;
      color: rgba(255, 255, 255, 0.8);
      @media screen and (max-width: 768px) {
        color: #969696;
      }
      text-align: center;
      line-height: 16px;
    }
    ul {
      @media screen and (max-width: 768px) {
        margin: 0;
        padding: 0 0 10px;
        width:130px;
        border: 1px solid #dce0e2;
        border-top: none;
        box-shadow: none;
        border-radius:0 0 4px 4px;
        top: 36px;
      }
      width: 143px;
      // height: 124px;
      background: rgba(255, 255, 255, 0.98);
      box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.3);
      border-radius: 4px;
      position: absolute;
      right: -1px;
      top: 40px;
      padding: 8px 0;
      display: flex;
      flex-direction: column;
      align-items: baseline !important;
      // height: 20px !important;
      li {
        display: inline-flex;
        padding: 10px 20px;
        width: 100%;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #282828;
        line-height: 20px;
        @media screen and (max-width: 768px) {
          height: 43px;
          justify-content: center;
          align-items: center;
        }
        span.pitchon {
          @media screen and (max-width: 768px) {
            color: #969696 !important;
            font-size: 16px !important;
          }
        }
      }
    }
  }
`

class LanguageSwitcher extends Component {
  renderLanguageChoice(code, label, currentLocale) {
    return (
      <>
        <span
          key={code}
          className={classNames('pitchon', {
            active: currentLocale === code,
          })}
          onClick={() => {
            changeLocale(code)
          }}
        >
          {label}
        </span>
      </>
    )
  }

  render() {
    const { showIntl } = this.props
    return (
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) => (
          <div>
            <Helmet>
              <html lang={currentLocale} />
            </Helmet>
            <StyledIntl>
              <div className="languageList">
                <div className="local">
                  {currentLocale === 'zh'
                    ? '中文/简'
                    : currentLocale === 'en'
                    ? 'English'
                    : currentLocale === 'tr'
                    ? 'Turkish'
                    : null}
                </div>
                {showIntl ? (
                  <ul>
                    <li>
                      {this.renderLanguageChoice(
                        'zh',
                        '中文/简',
                        currentLocale
                      )}
                    </li>
                    <li>
                      {this.renderLanguageChoice(
                        'en',
                        'English',
                        currentLocale
                      )}
                    </li>
                    <li>
                      {this.renderLanguageChoice(
                        'tr',
                        'Turkish',
                        currentLocale
                      )}
                    </li>
                  </ul>
                ) : null}
              </div>
            </StyledIntl>
          </div>
        )}
      </IntlContextConsumer>
    )
  }
}

export default injectIntl(LanguageSwitcher)
