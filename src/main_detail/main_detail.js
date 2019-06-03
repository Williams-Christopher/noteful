import React from 'react';
import Note from '../note/note';
import Button from '../button/button';
import NotefulContext from '../NotefulContext';

function MainDetail() {
    return (
        <NotefulContext.Consumer>
            {(context) => (
                <section className='main'>
                    <h2 className='main__heading'>Note detail:</h2>
                    <Note {...context.note} detailNote={context.detailNote}/>
                    <Button buttonText='Add note' />
                </section>
            )}
        </NotefulContext.Consumer>
    )
}

MainDetail.defaultProps = {
    note: '',
}

export default MainDetail;
