import React from 'react';
import cx from "classnames";
import { css } from "@emotion/css";
import { Link } from "react-router-dom";

type LinkType = {
  name: string,
  url: string,
  external?: boolean
}

type Props = { title: string, text?: string, links?: Array<LinkType> }

function Cube({ title = "Unknown", text, links = [] }: Props) {

  const renderLink = (link: LinkType) => {
    return <div key={link.name} className={cx(css`
        background-color: #E3E3E3;
        border-radius: 5px;
        padding: 5px 7px;
        margin: 3px;
        transition: background-color 0.15s ease-in;

        &:hover {
          background:#C4C4C4;
          transition: background-color 0.15s ease-out;

        }
    `)}>
      {link.external ? <a href={link.url} target="_blank">{link.name}</a> : <Link to={link.url}>{link.name}</Link>}
    </div>
  }

  return (
    <div className={cx(css`
      display: flex;
      & .square1 {
        width: 100px;
        height: 100px;
        transform: skew(180deg, 210deg);
        position: absolute;
        top: 43px;
        left: 1px;
        transition: top 0.15s ease-in, left 0.15s ease-in;
        background: #939597;
      }

      & .square2 {
        width: 100px;
        height: 100px;
        transform: skew(180deg, 150deg);
        position: absolute;
        left: 101px;
        top: 43px;
        transition: top 0.15s ease-in, left 0.15s ease-in;
        background: #4E4B66;
      }

      & .square3 {
        width: 113px;
        height: 99px;
        transform: rotate(150deg) translate(-40px, -16px) skew(30deg, 0deg);
        position: absolute;
        left: 1px;
        top: -30px;
        border: 1px solid  #6E7191;
        transition: top 0.15s ease-in, left 0.15s ease-in;
        background: #6E7191;
      }

      &:hover {
        & .square1 {
          top: 53px;
          left: -10px;
          transition: top 0.15s ease-out, left 0.15s ease-out;
        }

        & .square2 {
          left: 111px;
          top: 53px;
          transition: top 0.15s ease-out, left 0.15s ease-out;
        }

        & .square3 {
          left: 1px;
          top: -40px;
          transition: top 0.15s ease-out, left 0.15s ease-out;
        }

        & .cube-info-container{
          transition: opacity 0.15s ease-out;
          opacity: 1;
        }

      }

      & .cube-info-container{
        opacity: 0;
        transition: opacity 0.15s ease-in;
        display: flex; 
        flex-direction: column; 
        font-family: Source Sans Pro;
        min-width: 260px;
        font-size: 16px;
      }

    `)}>
      <div className={cx(css`
        position: relative;
        width: 206px;
        height: 190px;
        margin: 0px auto;
        transform: scale(0.6);
      `)}>
        <div className="square1"></div>
        <div className="square2"></div>
        <div className="square3"></div>
      </div>
      <div className={cx(css`margin-top: 45px; margin-left: 60px;`)}>
        <span className={cx(css`
          font-size: 34px;
          line-height: 43px;
          font-family: Gobold High;
        `)}>{title}</span>
        <div className="cube-info-container">
          <span className={cx(css`margin-top: 10px; color: black;`)}>
            {text}
          </span>
          <div className={cx(css`display: flex; margin-top: 10px; flex-wrap: wrap;`)}>
            {links.map(link => renderLink(link))}
          </div>
        </div>
      </div>

    </div>

  );
}

export default Cube;
