import React from 'react';
import {Route} from 'react-router-dom';
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

  componentDidMount() {
    const url = 'http://localhost:9090';
    // Update state with the dummy folder and note data
    // this.setState({
    //   folders: DATA.folders,
    //   notes: DATA.notes,
    // });
    fetch(url + '/folders')
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

    fetch(url + '/notes')
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

  render() {
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
    }

    return (
      <>
        <Header />
        <NotefulContext.Provider value={contextValue}>
          <main className='app'>
            <Route exact path='/' render={(routerProps) => {
              contextValue.folders = this.state.folders;
              contextValue.notes = this.state.notes;
              return(
   
                <>
                  <Sidebar />
                  <Main />
                </>)
              }}
            />
            <Route path='/folder/:folderId' render={(routerProps) => {
              contextValue.notes = this.state.notes.filter(n => n.folderId === routerProps.match.params.folderId)
              return(
                <>
                  <Sidebar />
                  <Main />
                </>)
              }}
            />
            <Route path='/note/:noteId' render={(routerProps) => {
                // Get the note that's been selected...
                let selectedNote = this.state.notes.find(n => n.id === routerProps.match.params.noteId)
                // So that we can get the corresponding folder...
                let parentFolder = this.state.folders.find(f => f.id === selectedNote.folderId)
                contextValue.folder = parentFolder;
                contextValue.note = selectedNote;
                contextValue.detailNote = true;
                console.log(contextValue);
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

export default App;