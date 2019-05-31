import React from 'react';
import Note from '../note/note';
import Button from '../button/button';
import './main.css';

function MainDetail(props) {
    console.log('MainDetail');
    let notes = props.notes.map((n, i) =>
        <Note {...n} detailNote={true}/>
    );

    return (
        <section className='main'>
            <h1>MainDetail placeholder</h1>
            {/* <p>Dynamic route: {props.match.params.dynamic}</p> */}
            {notes}
            <Button buttonText='Add note' />
        </section>
    )
}

MainDetail.defaultProps = {
    notes: [],
}

export default MainDetail;