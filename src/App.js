import React from 'react';
import {Route} from 'react-router-dom';
import Header from './header/header';
import Sidebar from './sidebar/sidebar';
import Main from './main/main';
import SidebarDetail from './sidebar_detail/sidebar_detail';
import MainDetail from './main_detail/main_detail';
import AddFolderForm from './add_folder_form/add_folder_form';
import AddNoteForm from './add_note_form/add_note_form';
import NotefulContext from './NotefulContext';
import config from './config';
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
    // this.setState({
    //   folders: DATA.folders,
    //   notes: DATA.notes,
    // });
    fetch(config.url + '/folders')
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

    fetch(config.url + '/notes')
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

  deleteNote = noteId => {
    let newNotes = this.state.notes.filter(n => n.id !== noteId);
    this.setState({
      notes: newNotes,
    });
  }

  addFolder = folder => {
    let newFolders = [...this.state.folders, folder];
    this.setState({
      folders: newFolders
    });
  }

  addNote = note => {
    let newNotes = [...this.state.notes, note];
    this.setState({
      notes: newNotes,
    });
  }

  render() {
    // console.log('App props.match:', this.props.match);
    // console.log('App props.location: ', this.props.location);
    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      deleteNote: this.deleteNote,
      addFolder: this.addFolder,
      addNote: this.addNote,
    }

    return (
      <>
        <Header />
        <NotefulContext.Provider value={contextValue}>
          <main className='app'>
            {/* <Route exact path='/' render={(routerProps) => {
              console.log('router props: ', routerProps);
              return(
                <>
                  <Sidebar />
                  <Main />
                </>)
              }}
            /> */}
            {/* <Route path='/folder/:folderId' render={(routerProps) => {
              return(
                <>
                  <Sidebar />
                  <Main />
                </>)
              }}
            /> */}
            {/* <Route path='/note/:noteId' render={(routerProps) => {
                return(
                  <>
                    <SidebarDetail />
                    <MainDetail />
                  </>)
                }
              } /> */}
            <Route exact path='/' component={Sidebar} />
            <Route exact path='/' component={Main} />
            <Route path='/folder/:folderId' component={Sidebar} />
            <Route path='/folder/:folderId' component={Main} />
            <Route path='/note/:noteId' component={SidebarDetail} />
            <Route path='/note/:noteId' component={MainDetail} />
            <Route path='/addFolder' component={Sidebar} />
            <Route path='/addFolder' component={AddFolderForm} />
            <Route path='/addNote' component={Sidebar} />
            <Route path='/addNote' component={AddNoteForm} />
          </main>
        </NotefulContext.Provider>
      </>
    );
  }
}

export default App;