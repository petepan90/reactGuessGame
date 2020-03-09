import React from "react";
import '../Styles/Body.css';
import Card from '../Card/index'

function Body(props) {
    return (
        <div>
            {props.cards.map(card =>
                <Card
                    img={card.img}
                    selected={card.selected}
                    key={card.id}
                    id={card.id}
                    onClick={props.onClick}
                />
            )}
        </div>
    );
}

// a set of images, each rendered image needs the image, onClick, selected

export default Body;