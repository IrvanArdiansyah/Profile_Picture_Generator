import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './style/Style.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      profil: '',
    }
  }

  render() {

    let klik = (e) => {
      this.setState({
        profil: `https://robohash.org/${this.refs.nama.value}`
      })
      return (
        <img src={this.state.profil}/>
      )
    }

    return (
      <div className="App">
        <input ref="nama" type="text" placeholder="Kertik Nama Anda.." /><br/>
        <button onClick={klik} className="btn btn-success">Buat Profilku</button>
        <div>
          <img className="imgbg" src={this.state.profil}/>
        </div>
      </div>
    );
  }
}

export default App;
