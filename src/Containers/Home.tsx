import React from 'react';
import { withRouter } from "react-router-dom";
import cx from "classnames";
import { css } from "@emotion/css";
import Fade from 'react-reveal/Fade';
import { useTranslation } from 'react-i18next';

import Cube from '../Components/Cube'


function Home() {

  const { t, i18n } = useTranslation();

  return (
    <div className={cx(css`height: 100%;display: flex; justify-content: space-around; align-items: center; padding: 0 40px 0 200px;`)}>
      <Fade top>
        <div className={cx(css`height: fit-content;
          display: flex; 
          flex-direction: column; 
          font-size: 24px;
          font-family: Source Sans Pro; 
          width: 100%;
          min-width: 300px;
        `)}>
          <span className={cx(css`font-family: Gobold High; font-size: 96px;`)}>Secret Boxes</span>
          <span className={cx(css`margin-top: 15px;`)}>Loren ipsum Dolor Sit Amet</span>
          <div className={cx(css`text-align: center; 
            background: #282828; 
            color: white; 
            padding: 13px 62px; 
            margin-top: 15px; 
            width: fit-content;
            font-size: 16px;
            font-family: Poppins;
            cursor: pointer;
          `)}>{t('Learn More')}</div>
        </div>
      </Fade>
      <Fade top>
        <div className={cx(css`height: fit-content;display: flex; width: 100%; justify-content: space-between;`)}>
          <Cube
            title={t('Build Apps')}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. A enim velit amet."
            links={[{ name: "Secret Counter", url: "/counter" }, { name: "Secret App 2", url: "#" }, { name: "Secret App 3", url: "#" }]}
          />
          <Cube
            title={t('Figment Learn')}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. A enim velit amet."
            links={[{ name: "Figment Learn", url: "https://learn.figment.io/", external: true }, { name: "DataHub", url: "#" }, { name: "Rust", url: "#" }]}
          />
        </div>
      </Fade>
    </div>

  );
}

export default withRouter(Home);
