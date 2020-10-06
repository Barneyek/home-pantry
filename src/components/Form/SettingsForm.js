import React from "react";
import styles from "./SettingsForm.module.scss";
import { Redirect } from "react-router-dom";
import Button from '../Button/Button';
import { withTranslation } from 'react-i18next/hooks';
import i18n from '../../i18n';

class SettingsForm extends React.Component {
    state = {
        language: localStorage.getItem("language"),
        isFormSubmited: false
    };

    setFormSubmited = () => {
        this.setState({ isFormSubmited: true });
    };

    changeFn = lang => {
        this.setState({ language: lang });
    };

    render() {
    const { t } = this.props;
    
    if (this.state.isFormSubmited) return <Redirect to="/" />;
    return (
          <div className={styles.wrapper}>
            <h2>{t("title.settings")}</h2>
            <p className={styles.paragraph}>{t("choose_language")}</p>
            <form
                className={styles.form}
                onSubmit={e => {
                    e.preventDefault();
                    i18n.changeLanguage(this.state.language);
                    localStorage.setItem("language", this.state.language);
                    this.setFormSubmited();
                }}
            >       
                <label>
                    <input
                    id="lang"
                    type="radio"
                    name="language"
                    checked={this.state.language === "en"}
                    onChange={() => this.changeFn("en")}
                    />
                    {t("english")}
                </label>
                <label>
                    <input
                    id="lang"
                    type="radio"
                    name="language"
                    checked={this.state.language === "pl"}
                    onChange={() => this.changeFn("pl")}
                    />
                    {t("polish")}
                </label>
                <Button>{t("button.save_changes")}</Button>
            </form>
          </div>
        );
    }
}

const SettingsFormTranslated = withTranslation("translation")(SettingsForm);

export default SettingsFormTranslated;