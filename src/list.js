import React from 'react';
import Card from './Card'

function List(props) {
    const cardArr = props.cards.map(card => 
        <Card title={card.title} content={card.content}/>
    );

    return (
        <section class="List">
            <header class="List-header">
            <h2>{props.header}</h2>
            </header>>

            <div class="List-cards">
                {cardArr}
                <button type="button" class="List-add-button">
                + Add Random Card
                </button>
            </div>


        </section>
    );
}

export default List;

