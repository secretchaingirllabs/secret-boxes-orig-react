import React from 'react';
import { Route, withRouter, RouteComponentProps } from "react-router-dom";
import cx from "classnames";
import { css } from "@emotion/css";
import Header from './Containers/Header';
import Home from './Containers/Home';
import Counter from './Containers/Counter';
import { useTranslation } from 'react-i18next';

function App() {

  const { t, i18n } = useTranslation();

  React.useEffect(() => {
    try {
      const language = localStorage.getItem('language') || 'en'
      i18n.changeLanguage(language)
    } catch (error) { }

  }, []);

  return (
    <div className={cx(css`color: #282828;
      height: 100vh;
      width: 100%;
      font-family: Gobold Bold;
      background-color: #F8D948;
    `)}>

      <Header />
      <div className={cx(css`display: flex;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-sizing: border-box;
        position: relative;
        padding-top:100px;
        height: 100%;
        
      `)}>
        <Route exact path={"/"}><Home /></Route>
        <Route exact path={"/counter"}><Counter /></Route>
      </div>

    </div>
  );
}

export default withRouter(App);
