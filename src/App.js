import React from 'react';
import {Route, withRouter} from 'react-router-dom';
import Header from './header/header';
import Sidebar from './sidebar/sidebar';
import Main from './main/main';
import SidebarDetail from './sidebar_detail/sidebar_detail';
import MainDetail from './main_detail/main_detail';
// import DATA from './dummy-store';
import NotefulContext from './NotefulContext';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      folders: [],
      notes: [],
    };
  }

  url = 'http://localhost:9090';

  componentDidMount() {
    // Update state with the dummy folder and note data
    // this.setState({
    //   folders: DATA.folders,
    //   notes: DATA.notes,
    // });
    fetch(this.url + '/folders')
    .then(response => {
      if(!response.ok) {
        throw new Error('Folder fetch failed')
      }
      return response.json()
    })
    .then(data => {
      this.setState({
        folders: data,
      })
    })
    .catch(e => console.log(e))

    fetch(this.url + '/notes')
    .then(response => {
      if(!response.ok) {
        throw new Error('Notes fetch failed')
      }
      return response.json()
    })
    .then(data => {
      this.setState({
        notes: data,
      })
    })
    .catch(e => console.log(e))
  }

  handleDeleteNote = noteId => {
    fetch(this.url + '/notes/' + noteId, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      }
    })
    .then(response => {
      if(!response.ok) {
        throw new Error('Delete unsucccessful')
      }
      return response.json()
    })
    .then(data => {
      console.log(data)
      let newNotes = this.state.filter(n => n.id !== noteId)
      this.setState({
        notes: newNotes,
      })
      this.props.children.push('/')
    })
  }

  render() {
    // console.log('App props.match:', this.props.match);
    // console.log('App props.location: ', this.props.location);
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      path: this.props.location,
      deleteNote: this.handleDeleteNote,
    }

    return (
      <>
        <Header />
        <NotefulContext.Provider value={contextValue}>
          <main className='app'>
            <Route exact path='/' render={(routerProps) => {
              return(
                <>
                  <Sidebar />
                  <Main />
                </>)
              }}
            />
            <Route path='/folder/:folderId' render={(routerProps) => {
              return(
                <>
                  <Sidebar />
                  <Main />
                </>)
              }}
            />
            <Route path='/note/:noteId' render={(routerProps) => {
                return(
                  <>
                    <SidebarDetail />
                    <MainDetail />
                  </>)
                }
              } />
          </main>
        </NotefulContext.Provider>
      </>
    );
  }
}

export default withRouter(App);