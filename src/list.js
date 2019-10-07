import React from 'react';
import Card from './card'
import './list.css'

function List(props) {
    const cardArr = props.cards.map(card => 
        <Card title={card.title} content={card.content} key ={card.id}/>
    );

    return (
        <section className="List">
            <header className="List-header">
            <h2>{props.header}</h2>
            </header>

            <div className="List-cards">
                {cardArr}
                <button type="button" className="List-add-button">
                + Add Random Card
                </button>
            </div>
        </section>
    );
}

export default List;

