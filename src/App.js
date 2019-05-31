import React from 'react';
import {Route} from 'react-router-dom';
import Header from './header/header';
import Sidebar from './sidebar/sidebar';
import Main from './main/main';
import SidebarDetail from './sidebar_detail/sidebar_detail';
import MainDetail from './main_detail/main_detail';
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
          <Route exact path='/' render={(routerProps) => {
            return(
              <>
                <Sidebar folders={this.state.folders} detailView={false} />
                <Main notes={this.state.notes}/>
              </>)
            }}
          />
          <Route path='/folder/:folderId' render={(routerProps) => {
            return(
              <>
                <Sidebar folders={this.state.folders} />
                <Main notes={this.state.notes.filter(n => n.folderId === routerProps.match.params.folderId)} />
              </>)
            }}
          />
          <Route path='/note/:noteId' render={(routerProps) => {
              // Get the note that's been selected...
              let selectedNote = this.state.notes.find(n => n.id === routerProps.match.params.noteId)
              // So that we can get the corresponding folder...
              let parentFolder = this.state.folders.find(f => f.id === selectedNote.folderId)
              
              return(
                <>
                  <SidebarDetail folder={parentFolder} />
                  <MainDetail note={selectedNote} detailNote={true} />
                </>)
              }
            } />
        </main>
      </>
    );
  }
}

export default App;