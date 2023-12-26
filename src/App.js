import { Routes, Route,Link } from "react-router-dom";
import Info from './pages/Info';
import Err404 from './pages/err404';
import Content from "./pages/Content";
import logo from "./images/kin.png";
import React, { useState } from "react";
import Filter from "./modal/Filters";

function addFilm(setCount) {
  const apiUrl = "https://api.kinopoisk.dev/v1.3/movie/random";
  fetch(apiUrl, {
    headers: {
      Accept: "application/json",
      "X-API-KEY": "VRZPSBY-V3SME8B-N3A4TAN-QZF2GE6",
    },
  })
    .then((response) => response.json())
    .then((result) => {
      console.log("This is your data", result);
      result.see = 0;
      localStorage.setItem(result.name, JSON.stringify(result));
      setCount(Math.floor(Math.random()*100));
    });
}

function App() {
  const [count, setCount] = useState(0);
  const [modalActive, setModalActive] = useState(false);
  const [filter, setFilter] = useState({
    agearr: 1,
                genres:"",
                dir: "",
                age: "",
                cun:""
  });

  return (
    <div className="App">
      <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link
              to="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              <img src={logo} alt="" />
            </Link>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <Link to="/" className="nav-link px-2 text-white">
                  Главная
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="nav-link px-2 text-white tst"
                  onClick={() => {
                    addFilm(setCount);
                  }}
                >
                  Добавить рандомный фильм
                </Link>
              </li>
              <li>
                <Link to="/" className="nav-link px-2 text-white filter" onClick={()=>{setModalActive(true)}}>
                  Фильтры
                </Link>
              </li>
            </ul>
            <Filter active={modalActive} setActive={setModalActive} setFilter={setFilter} />
            <form
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search"
            >
              <input
                type="search"
                className="form-control form-control-dark text-bg-dark"
                id="search"
                placeholder="Поиск..."
                aria-label="Search"
              />
            </form>

            <div className="text-end">
              <button
                type="button"
                id="searchbtn"
                className="btn btn-outline-light me-2"
              >
                Поиск
              </button>
            </div>
          </div>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Content filter={filter}/>}/>
        <Route path="/Info" element={<Info/>}/>
        <Route path="*" element={<Err404/>}/>
      </Routes>
    </div>
  );
}

export default App;
