import Film from "../Film";
import React, { useState } from 'react';





function init(filter) {
  let Films = [];
  let janar = RegExp(filter.genres, 'g');
    let direc = RegExp(filter.dir, 'g');
    let count = RegExp(filter.cun, 'g');
    Films = [];
    Object.keys(localStorage).forEach(function (key) {
        let data = localStorage.getItem(key);
        if (data != null) {
            let obj = JSON.parse(data);
            let director=false;
            if(filter.dir!==""){
            for(let i = 0;i<obj.persons.length;i++){
              if(direc.test(obj.persons[i].name)&&obj.persons[i].profession==="режиссеры"){
                director=true;
              }
            }}else director=true;
            let gen=false;
            if(filter.genres!==""){
            for(let i = 0;i<obj.genres.length;i++){
              if(janar.test(obj.genres[i].name)){
                gen=true;
              }
            }}else gen=true;
            if (obj.countries != null && filter.cun !== "") {
                if (gen && director && count.test(obj.countries[0].name)) {
                    if (filter.agearr === 1) {
                        if (obj.ageRating >= filter.age)
                            Films[Films.length] = obj;
                    }
                    else if (filter.agearr === 2) {
                        if (obj.ageRating <= filter.age)
                            Films[Films.length] = obj;
                    }
                    else
                        Films[Films.length] = obj;
                }
            }
            else if (filter.cun === ""){
                if (gen && director) {
                    if (filter.agearr === 1) {
                        if (obj.ageRating >= filter.age)
                            Films[Films.length] = obj;
                    }
                    else if (filter.agearr === 2) {
                        if (obj.ageRating <= filter.age)
                            Films[Films.length] = obj;
                    }
                    else
                        Films[Films.length] = obj;
                }
        }}
    });
  return Films;
}

function Content({filter}) {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    const [genres, setGenres] = useState('');
    const [dir, setDir] = useState('');
    const [wri, setWri] = useState('');
    const [prod, setProd] = useState('');
    const [oper, setOper] = useState('');
    const [comp, setComp] = useState('');
    const [age, setAge] = useState('');
    const [dat, setDate] = useState('');
    const [cun, setCun] = useState('');
    const [len, setLen] = useState('');
    const [url, setUrl] = useState('');

    function addFilm() {
        let Film = {
            name: name,
            genres: [{name:genres}],
            persons:[{
                name: dir,
                profession: 'режиссеры'
            },
            {
                name: wri,
                profession: 'сценаристы'
            },
            {
                name: prod,
                profession: 'продюсеры'
            },
            {
                name: oper,
                profession: 'операторы'
            },
            {
                name: comp,
                profession: 'композиторы'
            }],
            ageRating: age,
            premiere: {world:dat},
            countries: [{name: cun}],
            movieLength: len,
            poster:{url: url},
            see: 0
        };
        if(name!==''&& url!==''&&genres!==''&&age!==''){
        localStorage.setItem(Film.name,JSON.stringify(Film));
        setCount(count + 1);}
    }

  return (
    <section>
      <div className="articles">
        {init(filter).map((item, index) => (
          <Film key={index} film={item}/>
        ))}
      </div>
      <div className="container">
        <hr className="my-4" />
      </div>
      <div className="addFilm container">
        <form className="needs-validation">
          <div className="row g-3">
            <div className="col-sm-4">
              <label className="form-label text-white">Название</label>
              <input 
                type="text"
                className="form-control"
                id="lab"
                placeholder="Название"
                required
                value={name} 
                onChange={(event) => setName(event.target.value)}
              />
            </div>

            <div className="col-sm-4">
              <label className="form-label text-white">Жанр</label>
              <input
                type="text"
                className="form-control"
                id="jan"
                placeholder="Жанр"
                required
                value={genres} 
                onChange={(event) => setGenres(event.target.value)}
              />
            </div>

            <div className="col-sm-4">
              <label className="form-label text-white">Режиссёр</label>
              <input
                type="text"
                className="form-control"
                id="dir"
                placeholder="Режиссёр"
                value={dir} 
                onChange={(event) => setDir(event.target.value)}
              />
            </div>

            <div className="col-sm-4">
              <label className="form-label text-white">Рейтинг возраста</label>
              <input
                type="number"
                className="form-control"
                id="age"
                placeholder="Рейтинг возраста"
                required
                value={age} 
                onChange={(event) => setAge(event.target.value)}
              />
            </div>

            <div className="col-sm-4">
              <label className="form-label text-white">Дата выхода</label>
              <input
                type="date"
                className="form-control"
                id="rel"
                placeholder="Дата выхода"
                value={dat} 
                onChange={(event) => setDate(event.target.value)}
              />
            </div>

            <div className="col-sm-4">
              <label className="form-label text-white">Страна</label>
              <input
                type="text"
                className="form-control"
                id="con"
                placeholder="Страна"
                value={cun} 
                onChange={(event) => setCun(event.target.value)}
              />
            </div>

            <div className="col-sm-4">
              <label className="form-label text-white">Сценарист</label>
              <input
                type="text"
                className="form-control"
                id="wri"
                placeholder="Сценарист"
                value={wri} 
                onChange={(event) => setWri(event.target.value)}
              />
            </div>
            <div className="col-sm-4">
              <label className="form-label text-white">Продюсер</label>
              <input
                type="text"
                className="form-control"
                id="prod"
                placeholder="Продюсер"
                value={prod} 
                onChange={(event) => setProd(event.target.value)}
              />
            </div>
            <div className="col-sm-4">
              <label className="form-label text-white">Оператор</label>
              <input
                type="text"
                className="form-control"
                id="oper"
                placeholder="Оператор"
                value={oper} 
                onChange={(event) => setOper(event.target.value)}
              />
            </div>
            <div className="col-sm-4">
              <label className="form-label text-white">Композитор</label>
              <input
                type="text"
                className="form-control"
                id="comp"
                placeholder="Композитор"
                value={comp} 
                onChange={(event) => setComp(event.target.value)}
              />
            </div>
            <div className="col-sm-4">
              <label className="form-label text-white">Длительность</label>
              <input
                type="text"
                className="form-control"
                id="long"
                placeholder="Длительность"
                value={len} 
                onChange={(event) => setLen(event.target.value)}
              />
            </div>

            <div className="col-12">
              <label className="form-label text-white">URL постера</label>
              <input
                type="text"
                className="form-control"
                id="imageurl"
                placeholder="URL"
                required
                value={url} 
                onChange={(event) => setUrl(event.target.value)}
              />
            </div>
          </div>

          <hr className="my-4" />

          <button
            className="w-100 btn btn-primary btn-lg"
            id="sub"
            type="submit"
            onClick={addFilm}
          >
            Добавить фильм
          </button>
        </form>
      </div>
      <div className="over"></div>
    </section>
  );
}

export default Content;
