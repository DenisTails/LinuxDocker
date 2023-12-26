import "./modal.css";
import React, { useState } from "react";

const Filter = ({ active, setActive, setFilter }) => {
  const [agearr, setAgearr] = useState(1);
  const [genres, setGenres] = useState("");
  const [dir, setDir] = useState("");
  const [age, setAge] = useState(0);
  const [cun, setCun] = useState('');


  return (
    <div
      className={active ? "modal1 active" : " modal1"}
      onClick={() => {
        setActive(false);
      }}
    >
      <div className=" row" onClick={(e) => e.stopPropagation()}>
        <div className="row ov">
          <div className="col-sm-3">
            <label className="form-label text-white">Жанр</label>
            <input
              type="text"
              className="form-control"
              id="jan1"
              placeholder="Жанр"
              value={genres} 
                onChange={(event) => setGenres(event.target.value)}
            />
          </div>
          <div className="col-sm-3">
            <label className="form-label text-white">Режиссёр</label>
            <input
              type="text"
              className="form-control"
              id="dir1"
              placeholder="Режиссёр"
              value={dir} 
            onChange={(event) => setDir(event.target.value)}
            />
          </div>
          <div className="col-sm-3">
            <label className="form-label text-white">Возростной рейтинг</label>
            <select id="sel" value={agearr} 
            onChange={(event) => setAgearr(event.target.value)}>
              <option value="1">{">="}</option>
              <option value="2">{"<="}</option>
            </select>
            <input
              type="number"
              className="form-control"
              id="age1"
              placeholder="Возраст"
              min="0"
              max="18"
              value={age} 
                onChange={(event) => setAge(event.target.value)}
            />
          </div>
          <div className="col-sm-3">
            <label className="form-label text-white">Страна</label>
            <input
              type="text"
              className="form-control"
              id="con1"
              placeholder="Страна"
              value={cun} 
                onChange={(event) => setCun(event.target.value)}
            />
          </div>
          <button className="btn btn-success w-100 fil" onClick={()=>{
              setFilter({
                agearr: agearr,
                genres:genres,
                dir: dir,
                age: age,
                cun:cun
              });
              setActive(false);

          }}>Приминить</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
