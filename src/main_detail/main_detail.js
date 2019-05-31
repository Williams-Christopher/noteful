import React from 'react';
import Note from '../note/note';
import Button from '../button/button';
import './main_detail.css';

function MainDetail(props) {
    console.log('MainDetail');
    console.log(props);
    // let notes = props.notes.map((n, i) =>
    //     <Note {...n} detailNote={true}/>
    // );

    return (
        <section className='main'>
            <h1>MainDetail placeholder</h1>
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