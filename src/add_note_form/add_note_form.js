import React from 'react';
import NotefuleContext from '../NotefulContext';
import config from '../config';
import '../add_folder_form/add_folder_form.css';

function ErrorHelp(props) {
    return <span className='form__error'>{props.errorMessage}</span>
}

class AddNoteForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formValid: false,
            validName: false,
            validFolder: false,
            errorMessages: {nameError: '', folderError: '',},
            newNoteName: '',
            newNoteContent: '',
            newNoteFolder: '',
            APIError: '',
        }
    }

    static contextType = NotefuleContext;

    handleAddNote = e => {
        e.preventDefault();
        this.setState({APIError: ''});
        let {note_name, note_content, note_folder} = e.target;
        let requestBody = {
            "name": note_name.value,
            "content": note_content.value,
            "folderId": note_folder.value,
            "modified": new Date().toISOString(),
        };

        fetch(config.url + '/notes', {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {'content-type': 'application/json'}
        })
        .then(response => {
            if(!response.ok) {
                throw new Error('The was an error creating the your note. Please try again in a moment.')
            }
            return response.json()
        })
        .then(note => {
            this.context.addNote(note)
            this.props.history.push('/note/' + note.id)
        })
        .catch(e => this.setState({APIError: e.message}));
    }

    handleCancelButton = () => {
        this.props.history.push('/')
    }

    noteNameChanged(newName) {
        this.setState({newNoteName: newName}, () => this.validateNoteName(newName))
    }

    validateNoteName(newName) {
        let errorMessages = {...this.state.errorMessages};
        let validName = false;
        // Note name can't be empty
        if(newName === '') {
            validName = false;
            errorMessages.nameError = 'Note name can not be empty.';
        } else {
            validName = true;
            errorMessages.nameError = '';
        }

        this.setState({
            validName,
            errorMessages,
        }, this.formIsValid);
    }

    noteContentChanged(newNoteContent) {
        this.setState({
            newNoteContent
        })
    }

    folderChanged(folderId) {
        this.setState({newNoteFolder: folderId}, () => this.validateFolder(folderId));
    }

    validateFolder(folderId) {
        let errorMessages = {...this.state.errorMessages};
        let validFolder = false;
        // folderId can't be empty
        if(folderId === '') {
            errorMessages.folderError = 'Please select a folder.';
            validFolder = false;
        } else {
            errorMessages.folderError = '';
            validFolder = true;
        }

        this.setState({
            errorMessages,
            validFolder,
        }, this.formIsValid)
    }

    formIsValid() {
        this.setState({
            formValid: this.state.validName && this.state.validFolder,
        })
    }

    render() {
        let folders = this.context.folders.map(f => <option value={f.id}>{f.name}</option>);
        return(
            <section className='form'>
                <h2>Add a new note:</h2>
                <form className='form__add' onSubmit={this.handleAddNote}>
                    <label className='form__add_label' htmlFor='note_name'>Name: </label>
                    <input className='form__add_text' type='text' name='note_name' id='note_name' placeholder='How to bake a cake' required onChange={e => this.noteNameChanged(e.target.value)}/>
                    <br />
                    <ErrorHelp errorMessage={this.state.errorMessages.nameError} />
                    <br />
                    <label className='form__add_label' htmlFor='note_content'>Content:</label>
                    <textarea className='form__add_textarea' name='note_content' id='note_content' wrap='hard' onChange={e => this.noteContentChanged(e.target.value)} />
                    <br />
                    <select className='form__add_select' name='note_folder' required onChange={e => this.folderChanged(e.target.value)}>
                        <option value=''>Select a folder...</option>
                        {folders}
                    </select>
                    <br />
                    <ErrorHelp errorMessage={this.state.errorMessages.folderError} />
                    <div className='form__button_container'>
                        <button className='form__add_button' type='submit' disabled={!this.state.formValid} >Add</button>
                        {' '}
                        <button className='form__add_button' onClick={this.handleCancelButton}>Cancel</button>
                    </div>
                </form>
                <h2>{this.state.APIError}</h2>
            </section>
        )
    }
}

export default AddNoteForm;