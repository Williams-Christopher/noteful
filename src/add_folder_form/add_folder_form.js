import React from 'react';
// import cuid from 'cuid';
import NotefuleContext from '../NotefulContext';
import config from '../config';
import './add_folder_form.css';

function ErrorHelp(props) {
    return <span className='form__error'>{props.errorMessage}</span>
}

class AddFolderForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: true,
            errorMessage: '',
            newFolderName: '',
            APIError: '',
        }
    }

    static contextType = NotefuleContext;

    handleAddFolder = e => {
        e.preventDefault();
        let {folder_name} = e.target;
        let requestObject = {"name": folder_name.value};

        fetch(config.url + '/folders', {
            method: 'POST',
            body: JSON.stringify(requestObject),
            headers: {'content-type': 'application/json'}
        })
        .then(response => {
            if(!response.ok) {
                throw new Error('The was an error creating your new folder. Please try again in a moment.')
            }
            return response.json()
        })
        .then(folder => {
            this.context.addFolder(folder)
            this.props.history.push('/folder/' + folder.id)
        })
        .catch(e => this.setState({APIError: e.message}));
    }

    handleCancelButton = () => {
        this.props.history.push('/')
    }

    updateNewFolderName(newName) {
        this.setState({newFolderName: newName}, () => this.validateFolderName(newName))
    }

    validateFolderName(newName) {
        let errorMessage = '';
        let error = false;
        // Folder name can't be empty
        if(newName === '') {
            error = true;
            errorMessage = 'Folder name can not be empty.';
        } else if(!this.context.folders.find(f => f.name.toLowerCase() === newName.toLowerCase()) === false) {
            // Folder name must be unique
            error = true;
            errorMessage = 'Folder name must be unique.'
        } else {
            error = false;
            errorMessage = '';
        }

        this.setState({
            error,
            errorMessage,
        });
    }

    render() {
        return(
            <section className='form'>
                <h2>Add a new folder:</h2>
                <form className='form__add' onSubmit={this.handleAddFolder}>
                    <label className='form__add_label' htmlFor='folder_name'>Name: </label>
                    <input className='form__add_text' type='text' name='folder_name' id='folder_name' placeholder='Big Ideas' onChange={e => this.validateFolderName(e.target.value)}required />
                    <br />
                    <ErrorHelp errorMessage={this.state.errorMessage} />
                    <div className='form__button_container'>
                        <button className='form__add_button' type='submit' disabled={this.state.error}>Add</button>
                        {' '}
                        <button className='form__add_button' onClick={this.handleCancelButton}>Cancel</button>
                    </div>
                </form>
                <h2>{this.state.APIError}</h2>
            </section>
        )
    }
}

export default AddFolderForm;