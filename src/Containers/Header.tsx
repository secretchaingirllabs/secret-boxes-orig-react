import React from 'react';
import { withRouter } from "react-router-dom";
import cx from "classnames";
import { css } from "@emotion/css";
import Fade from 'react-reveal/Fade';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

import discordIcon from "../Assets/discord.svg"
import telegramIcon from "../Assets/telegram.svg"
import youtubeIcon from "../Assets/youtube.svg"
import twittIcon from "../Assets/twitt.svg"
import logoIcon from "../Assets/logo.svg"
import arrowUp from "../Assets/arrow_up.svg"
import arrowDown from "../Assets/arrow_down.svg"


function Header() {

  const [languages, setLanguages] = React.useState<boolean>(false)
  const { t, i18n } = useTranslation();

  const changeLanguage = (value: string) => {
    i18n.changeLanguage(value)
    setLanguages(false)
    localStorage.setItem('language', value);
  }

  return (
    <div className={cx(css`width: 100%;
        font-family: Source Sans Pro;
        position: fixed;
        z-index: 2;
        width: 100%;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 26px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100px;
        box-shadow: 0px 8px 16px rgba(17, 17, 17, 0.06);
        padding: 0 140px;
        box-sizing: border-box;
      `)}>
      <Link to="/"><img src={logoIcon} width={48} height={48} /></Link>
      <div className={cx(css`
          display: flex;
          & > div{
            margin-left: 100px;
            cursor: pointer;
          }
        `)}>
        <div><Link to="/" className={cx(css`text-decoration:none; color:inherit;`)}>{t('Boxes')}</Link></div>
        <div><a href="#">{t('SCG Foundation')}</a></div>
        <div><a href="#">{t('About')}</a></div>
        <div><a href="#">{t('Docs')}</a></div>
        <div className={cx(css`position: relative;`)}>
          <div onClick={() => setLanguages(!languages)} className={cx(css`display: flex; align-items: center;`)}>
            <span className={cx(css`margin-right: 15px;`)}>{t('Languages')}</span>
            <img width="15px" src={languages ? arrowUp : arrowDown} />
          </div>
          {languages && <Fade right><div className={cx(css`
                position: absolute;
                background-color: #e2d7a5;
                color: grey;
                flex-direction: column;
                width: fit-content;
                display: flex;
                max-height: 500px;
                transition: max-height 0.30s ease-out;
                overflow: hidden;
                padding: 0 5px;
                box-sizing: border-box;
                width: max-content;
                margin-top: 20px;
                font-size: 16px;
                min-width: 160px;
                & > div {
                  padding-bottom: 5px;
                }
                & > div:hover {
                  color: #282828;
                }
            `)}>
            <div onClick={() => changeLanguage('en')}>{t('English')}</div>
            <div onClick={() => changeLanguage('pt')}>{t('Portuguese')}</div>
          </div></Fade>}
        </div>
      </div>

      <div className={cx(css`
          display: flex;
          & img{
            margin-left: 30px;
            opacity: 1;
            transition: all 0.3s ease;
            cursor: pointer;
          }
        `)}>
        <a href="#"><img width="20px" src={discordIcon} /></a>
        <a href="#"><img width="20px" src={telegramIcon} /></a>
        <a href="#"><img width="20px" src={youtubeIcon} /></a>
        <a href="#"><img width="20px" height={17} src={twittIcon} /></a>
      </div>

    </div>

  );
}

export default withRouter(Header);
