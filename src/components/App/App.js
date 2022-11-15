import React, { Component } from 'react';
import './App.css';
import { getUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: []
    }
  }

  componentDidMount() {
    this.displayUrls()
  }

  displayUrls = async () => {
    const data = await getUrls()
    console.log(data.urls);
    this.setState({urls:[...data.urls]})
  }
  
  getNewURl= ()=> {
    this.displayUrls()
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1 className='title'>URL Shortener</h1>
          <UrlForm getNewURl={this.getNewURl} />
        </header>

        <UrlContainer urls={this.state.urls}/>
      </main>
    );
  }
}

export default App;
