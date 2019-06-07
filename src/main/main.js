import React from 'react';
import Note from '../note/note';
import Button from '../button/button';
import NotefulContext from '../NotefulContext';
import './main.css';

class Main extends React.Component {
    static contextType = NotefulContext;
    notesForRoute = () => {
        // if(this.context.path.pathname.split('/')[1] === '') {
        //     return this.context.notes;
        // } else {
        //     return this.context.notes.filter(n => n.folderId === this.context.path.pathname.split('/')[2]);
        // }
        if(this.props.match.path === '/folder/:folderId') {
            return this.context.notes.filter(n => n.folderId === this.props.match.params.folderId);
        } else {
            return this.context.notes;
        }
    }

    render() {
        return(
            <section className='main'>
                <h2 className='main__heading'>Notes:</h2>
                     {this.notesForRoute().map((n, i) =>
                         <Note {...n} />
                     )}
                 <Button buttonText='Add note' />
             </section>
        )
    }
}

export default Main;
