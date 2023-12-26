import React from 'react';
import "./modal.css";

function del(name){
    Object.keys(localStorage).forEach(function (key) {
        let data = localStorage.getItem(key);
        if (data != null) {
            let obj = JSON.parse(data);
            if (obj.name === name)
                localStorage.removeItem(key);
        }
    });
}

const Modal = ({active,setActive,setFilmActive, name})=>{
    return(
        <div className={active ? 'modal1 active':' modal1'} onClick={()=>{setActive(false)}}>
            <div className="modal__content row" onClick={e=>e.stopPropagation()}>
            <button className="btn btn-danger yes w-100 col-lg-6" onClick={()=>{setFilmActive(false); del(name)}}>Удалить</button>
            <button className="btn btn-success no w-100 col-lg-6" onClick={()=>{setActive(false)}} >Закрыть</button>
            </div>
        </div>
    )
}

export default Modal;
