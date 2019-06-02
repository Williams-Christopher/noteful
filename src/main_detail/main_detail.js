import React from 'react';
import Note from '../note/note';
import Button from '../button/button';

function MainDetail(props) {
    return (
        <section className='main'>
            <h2 className='main__heading'>Note detail:</h2>
            <Note {...props.note} detailNote={true}/>
            <Button buttonText='Add note' />
        </section>
    )
}

MainDetail.defaultProps = {
    note: '',
}

export default MainDetail;
