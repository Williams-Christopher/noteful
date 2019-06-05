import React from 'react';
import Note from '../note/note';
import Button from '../button/button';
import NotefulContext from '../NotefulContext';
import './main.css';

// function Main(props) {
//     return (
//         <NotefulContext.Consumer>
//             {(context) => (
//             <section className='main'>
//                 <h2 className='main__heading'>Notes:</h2>
//                     {context.notes.map((n, i) =>
//                         <Note {...n} />
//                     )}
//                 <Button buttonText='Add note' />
//             </section>
//             )}
//         </NotefulContext.Consumer>
//     )
// }

// Main.defaultProps = {
//     notes: [],
// }
class Main extends React.Component {
    static contextType = NotefulContext;
    notesForRoute = () => {
        if(this.context.path.pathname.split('/')[1] === '') {
            return this.context.notes;
        } else {
            return this.context.notes.filter(n => n.folderId === this.context.path.pathname.split('/')[2]);
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
