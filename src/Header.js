// import logo from './images/kin.png';

// function addFilm() {
//     const apiUrl = 'https://api.kinopoisk.dev/v1.3/movie/random';
//     fetch(apiUrl, { 
//         headers: {
//           'Accept': 'application/json',
//           'X-API-KEY': 'VRZPSBY-V3SME8B-N3A4TAN-QZF2GE6',
//         }})
//       .then((response) => response.json())
//       .then((result) =>{console.log('This is your data', result);
//       localStorage.setItem(result.name, JSON.stringify(result));
//     });
      
//   }

// function Header() {
//     return (
//         <header className="p-3 text-bg-dark">
//         <div className="container">
//             <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
//                 <a href="#" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
//                     <img src={logo} alt=""/>
//                 </a>

//                 <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
//                     <li><a href="#" className="nav-link px-2 text-white">Главная</a></li>
//                     <li><a href="#" className="nav-link px-2 text-white tst" onClick={addFilm}>Добавить тестовые данные</a></li>
//                     <li><a href="#" className="nav-link px-2 text-white filter">Фильтры</a></li>
//                 </ul>

//                 <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
//                     <input type="search" className="form-control form-control-dark text-bg-dark" id="search" placeholder="Поиск..."
//                         aria-label="Search"/>
//                 </form>

//                 <div className="text-end">
//                     <button type="button" id="searchbtn" className="btn btn-outline-light me-2">Поиск</button>
//                 </div>
//                 </div>
//             </div>
            
//         </header>
//       );
// }

// export default Header;