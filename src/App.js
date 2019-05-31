import React from 'react';
import {Route} from 'react-router-dom';
import Header from './header/header';
import Sidebar from './sidebar/sidebar';
import Main from './main/main';
import DATA from './dummy-store';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      folders: [],
      notes: [],
    };
  }

  componentDidMount() {
    // Update state with the dummy folder and note data
    this.setState({
      folders: DATA.folders,
      notes: DATA.notes,
    });
  }

  render() {
    return (
      <>
        <Header />
        <main className='app'>
          <Sidebar />
          <Main />
        </main>
      </>
    );
  }
}

export default App;