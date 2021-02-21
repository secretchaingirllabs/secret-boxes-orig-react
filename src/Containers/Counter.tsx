import React from 'react';
import { withRouter } from "react-router-dom";
import cx from "classnames";
import { css } from "@emotion/css";
import Fade from 'react-reveal/Fade';
import { useTranslation } from 'react-i18next';

import boxImage from "../Assets/box.svg"
import background from "../Assets/background.png"
import placeholder from "../Assets/placeholder_image.svg"


function Counter() {

  const { t, i18n } = useTranslation();

  return (
    <div className={cx(css`
      display: flex;
      color: #070707;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background: url(${background}) no-repeat;
      background-size: 100% 100%;
      min-height: 600px;
      min-width: 900px;
      padding: 40px 100px;
      box-sizing: border-box;
      position: relative;
    `)}>
      <Fade left>
        <div className={cx(css`height: fit-content;
          display: flex; 
          flex-direction: column; 
          font-size: 24px;
          font-family: Source Sans Pro; 
          width: 100%;
          min-width: 300px;
        `)}>
          <div className={cx(css`height: fit-content;
            display: flex; 
            flex-direction: column;             
          `)}>

            <span className={cx(css`color: #F8D948; font-family: Gobold High; font-size: 130px;line-height: 162px;`)}>Secret Counter</span>
            <span className={cx(css`color: white; font-family: Poppins; font-size: 24px;line-height: 32px;`)}>A simple counter box app</span>
          </div>

          <div className={cx(css`
            display: flex; 
            flex-direction: column;
            font-family: Source Sans Pro; 
            margin-top: 100px;
            & > div  {
              margin-top: 20px;
              font-size: 16px;
              display: flex;
              & > span {
                margin-left: 15px;
                max-width: 300px;
              }
            }
          `)}>
            <span className={cx(css`
              font-family: Gobold High;
              font-size: 34px;
              
            `)}>{t('Learn how to')}</span>
            <div>
              <img src={placeholder} width="50" />
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ligula at a egestas at arcu in
              </span>
            </div>

            <div>
              <img src={placeholder} width="50" />
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ligula at a egestas at arcu in
              </span>
            </div>

            <div>
              <img src={placeholder} width="50" />
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ligula at a egestas at arcu in
              </span>
            </div>

            <div>
              <img src={placeholder} width="50" />
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ligula at a egestas at arcu in
              </span>
            </div>
          </div>

        </div>
      </Fade>


      <img src={boxImage} className={cx(css`
        width: 16%;
        height: 18%;
        position: absolute;
        bottom: 18%;
        left: 26%;
        cursor: pointer;
      `)} />
    </div>

  );
}

export default withRouter(Counter);
