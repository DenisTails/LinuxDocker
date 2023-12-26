import { useLocation } from 'react-router-dom';
import Person from '../Person';

function Info() {
  const location = useLocation()
  const { film } = location.state
  const filmdata = film.film;
  const length = filmdata.persons.length;
  let str=[];
  if(filmdata.ageRating!=null){
    filmdata.ageRating=16;
  }
  for(let i = 0;i<length;i++){
    
    if(filmdata.persons[i].name!=null&&filmdata.persons[i].name!=="")
    str[i]= filmdata.persons[i].name+" : Группа "+ filmdata.persons[i].profession;
    else if(filmdata.persons[i].enName!=null)
    str[i]= filmdata.persons[i].enName+" : Группа "+ filmdata.persons[i].profession;
  }
  let gener="";
    for(let i = 0;i<filmdata.genres.length;i++){
      if(i!==filmdata.genres.length-1)
      gener+= filmdata.genres[i].name+", ";
      else
      gener+= filmdata.genres[i].name;
    }
    return (

    <div className="row about container">
    <div className="col-lg-4"><img src={filmdata.poster.url} alt="" /></div>
    <div className="col-lg-8 whiteb">
      <p className="Title">{filmdata.name}</p>
      <p>Жанр: {gener}</p>
      <p>Возростной рейтинг: {filmdata.ageRating}+</p>
      <p>Мировая премьера: {filmdata.premiere.world ? new Date(filmdata.premiere.world).toLocaleDateString("en-GB"): "Нету данных"}</p>
      <p>Странна: {filmdata.countries[0].name ? filmdata.countries[0].name:"Нету данных"}</p>
      <p>Продолжительность: {filmdata.movieLength ? filmdata.movieLength + " минут":"Нету данных"} </p>
      <p>{filmdata.description ? filmdata.description : ""}</p>
      <hr/>
      <p>Люди:</p>
      {str.map((item, index)=>(
        <Person key={index} name={item} />
      ))}
    </div>
    </div>
    );
  }
  
  export default Info;