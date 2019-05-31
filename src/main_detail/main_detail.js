import React from 'react';
import Note from '../note/note';
import Button from '../button/button';

function MainDetail(props) {
    return (
        <section className='main'>
            <h2 className='main__heading'>Note detail:</h2>
            {/* <p>Dynamic route: {props.match.params.dynamic}</p> */}
            <Note {...props.note} detailNote={true}/>
            <Button buttonText='Add note' />
        </section>
    )
}

MainDetail.defaultProps = {
    notes: [],
}

export default MainDetail;
