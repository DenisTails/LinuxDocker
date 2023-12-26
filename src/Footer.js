import logo from './images/kin.png';

function Footer() {
  return (
    <div className="container">
        
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <p className="col-md-4 mb-0 text-white">© 2023 Денис</p>

            <a href="#"
                className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <img src={logo} alt=""/>
            </a>

            <ul className="nav col-md-4 justify-content-end">
                <li className="nav-item"><a href="#" className="nav-link px-2 text-white">Главная</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-white tst">Добавить тестовые данные</a></li>
                <li><a href="#" className="nav-link px-2 text-white filter">Фильтры</a></li>
            </ul>
        </footer>
    </div>
    
  );
}



export default Footer;
