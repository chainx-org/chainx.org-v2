import classNames from "classnames"
import {
  changeLocale,
  injectIntl,
  IntlContextConsumer,
} from "gatsby-plugin-intl"
import React, { Component } from "react"
import { Helmet } from "react-helmet"

class LanguageSwitcher extends Component {


  renderLanguageChoice(code, label, currentLocale) {
    return (
      <span
        key={code}
        className={classNames("pitchon", {
          active: currentLocale === code,
        })}
        onClick={() => {
          changeLocale(code)
        }}
      >
        {label}
      </span>
    )
  }

  render() {

    return (
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) => (
          <div>
            <Helmet>
              <html lang={currentLocale} />
            </Helmet>
            {this.renderLanguageChoice("zh", "简", currentLocale)}
            <span className="lang">/</span>
            {this.renderLanguageChoice("en", "EN", currentLocale)}
          </div>
        )}
      </IntlContextConsumer>
    )
  }
}

export default injectIntl(LanguageSwitcher)
