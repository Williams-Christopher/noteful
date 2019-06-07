import React from 'react';
import Note from '../note/note';
import Button from '../button/button';
import NotefulContext from '../NotefulContext';

function MainDetail(props) {
    return (
        <NotefulContext.Consumer>
            {(context) => {
                //let noteId = context.path.pathname.split('/')[2];
                let noteId = props.match.params.noteId;
                let note = context.notes.find(n => n.id === noteId);
                return(
                    <section className='main'>
                        <h2 className='main__heading'>Note detail:</h2>
                        <Note {...note} detailNote={true}/>
                        <Button buttonText='Add note' />
                    </section>
                )
            }}
        </NotefulContext.Consumer>
    )
}

MainDetail.defaultProps = {
    note: '',
}

export default MainDetail;
