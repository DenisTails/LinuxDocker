import React from 'react';
import img from './images/close.png';


class myComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state ={ data: {}, isFetching: true, error: null };
    }

  addFilm() {
    const apiUrl = 'https://api.kinopoisk.dev/v1.3/movie/random';
    fetch(apiUrl, { 
        headers: {
          'Accept': 'application/json',
          'X-API-KEY': 'VRZPSBY-V3SME8B-N3A4TAN-QZF2GE6',
        }})
      .then((response) => response.json())
      .then((result) => {this.setState({data: result, isFetching: false })
      console.log('This is your data', result);
      localStorage.setItem(result.name, JSON.stringify(result))});
  }
  render() {return}
}
export default myComponent;