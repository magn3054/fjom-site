import React from 'react';
import style from './IconSeries.module.css';

import SendIcon from '../assets/henvendelse.svg';
import CalcIcon from '../assets/lommeregner.svg';
import TalkIcon from '../assets/dialog.svg';
import ComputerIcon from '../assets/computer.svg';
import PokalIcon from '../assets/pokal.svg';

export default function IconFlow () {
    return (
        <div className={style.gridContainer}>
            <div className={style.icon}><img src={SendIcon} alt="Send ikon" /></div>
            <svg className={style.arrow} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 56"><path d="M0,.4l27.2,16.7v22L0,55.8v-16.7l17.9-10.9L0,17.2V.4ZM54.8.2l45.2,27.7-45.2,27.7v-16.7l17.7-10.8-17.7-10.8V.2ZM27.2.4l27.6,16.9v21.6l-27.6,16.9v-16.7l18-11-18-11V.4Z" /></svg>
            <div className={style.icon}><img src={CalcIcon} alt="Lommeregner ikon" /></div>
            <svg className={style.arrow} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 56"><path d="M0,.4l27.2,16.7v22L0,55.8v-16.7l17.9-10.9L0,17.2V.4ZM54.8.2l45.2,27.7-45.2,27.7v-16.7l17.7-10.8-17.7-10.8V.2ZM27.2.4l27.6,16.9v21.6l-27.6,16.9v-16.7l18-11-18-11V.4Z" /></svg>
            <div className={style.icon}><img src={TalkIcon} alt="Tale ikon" /></div>
            <svg className={style.arrow} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 56"><path d="M0,.4l27.2,16.7v22L0,55.8v-16.7l17.9-10.9L0,17.2V.4ZM54.8.2l45.2,27.7-45.2,27.7v-16.7l17.7-10.8-17.7-10.8V.2ZM27.2.4l27.6,16.9v21.6l-27.6,16.9v-16.7l18-11-18-11V.4Z" /></svg>
            <div className={style.icon}><img src={ComputerIcon} alt="Computer ikon" /></div>
            <svg className={style.arrow} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 56"><path d="M0,.4l27.2,16.7v22L0,55.8v-16.7l17.9-10.9L0,17.2V.4ZM54.8.2l45.2,27.7-45.2,27.7v-16.7l17.7-10.8-17.7-10.8V.2ZM27.2.4l27.6,16.9v21.6l-27.6,16.9v-16.7l18-11-18-11V.4Z" /></svg>
            <div className={style.icon}><img src={PokalIcon} alt="Pokal ikon" /></div>
        </div>
    )
}