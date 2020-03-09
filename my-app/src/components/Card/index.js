import React from 'react';
import '../Card/Card.css';
import { CardMedia } from '@material-ui/core/CardMedia';


function Card(props) {
    console.log('card props', props)
    return (
        <div>

            <img
                className='img'
                style={{ width: '200px', height: '200px' }}
                src={props.img}
                onClick={() => props.onClick(props.id)}
            />

        </div>
    );
}

export default Card;
