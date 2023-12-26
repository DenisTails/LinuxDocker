import { useState } from 'react';
import { Link } from 'react-router-dom';
import close from './images/close.png';
import Modal from './modal/Modal';
import Eye from './modal/eye';

function Film({film}) {
  const [count, setCount] = useState(0);
  const [modalActive, setModalActive]=useState(false);
  const [FilmActive, setFilmActive]=useState(true);

    if(film.ageRating==null ) film.ageRating = 16;
    let gener="";
    for(let i = 0;i<film.genres.length;i++){
      if(i!==film.genres.length-1)
      gener+= film.genres[i].name+", ";
      else
      gener+= film.genres[i].name;
    }
    if(FilmActive)
  return (
    <article className={FilmActive ? '' : 'none'}>
            <div className="article-wrapper">
            
                <Link to={"/Info"} state={{ film: {film} }}>
                <figure>
                  <img src={film.poster.url} alt="" />
                </figure>
                </Link>
                <div className="article-body">
                  <h2>  {film.name}  </h2>
                  <p>
                    Возраст: {film.ageRating}+ 
                  </p>
                  <p>
                    Жанар: { gener}  
                  </p>
                </div>
              </div>
              <Modal active={modalActive} setActive={setModalActive} setFilmActive={setFilmActive} name={film.name}/>
              <img src={close} className="close" onClick={()=>{setModalActive(true)}} alt=""/>
              <Eye film={film}/>
            </article>
  );
}

export default Film;
