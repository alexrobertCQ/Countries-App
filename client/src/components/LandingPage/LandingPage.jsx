import React from "react";
import {Link} from 'react-router-dom';
import Style from './LandingPage.module.css';

export default function LandingPage(){
    return(
        <div className={Style.landing}>
            <h2 className={Style.title}>WELCOME TO MY PROJECT</h2>
                <div className={Style.textcontainer}>
                    <p className={Style.text}>Este es un proyecto del bootcamp de Henry
                         en el que encontrarás hasta 250 países
                         en todo el mundo, haz clic en start para ver
                         información específica de ese país que estas buscando y crear
                         una actividad para estos países a través de un formulario.
                    </p>
                </div>
            <Link to = "/countries">
                <span className={Style.button}>START</span>
            </Link>
        </div>
    );
}