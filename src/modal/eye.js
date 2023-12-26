import React from 'react';
import { useState, useEffect } from 'react';
import ceye from '../images/closeeye.png';
import oeye from '../images/openeye.png';
import leye from '../images/letereye.png';

function ChangeEye(film, eye){

    let f = JSON.parse(localStorage[film.name]);
    f.see = eye;
    localStorage.setItem(f.name, JSON.stringify(f));
}



const Eye = ({film})=>{

    film= JSON.parse(localStorage[film.name]);
    const [eye, setEye]=useState(film.see);
    if(eye!==film.see) setEye(film.see);
    if(eye===1){
    return(
        <img src={oeye} className="ceye" onClick={()=>{ChangeEye(film,2);setEye(2);}} title="Просмотренно!" alt=""/ >  
    )}
    else if(eye===2){
    return(
        <img src={leye} className="ceye" onClick={()=>{ChangeEye(film,0);setEye(0);}} title="Посмотреть позже!" alt=""/>  
    )}
    else if(eye===0){ 
    return(
        <img src={ceye} className="ceye" onClick={()=>{ChangeEye(film,1);setEye(1);}} title="Не просмотренно!" alt=""/>  
    )}
}

export default Eye;
