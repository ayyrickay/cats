// Understands how to render and interact with a list of cards
import React from 'react'
import { connect } from 'react-redux'
import { deleteCard } from '../reducer/cards/actions.js'

import Card from './Card.js'

const CardGrid = ({ cards, deleteCard }) =>
  <div>
    {cards.loading ? <h3 className='loader'> loading... </h3> : null}
    <ul className='card-grid'>
      {cards.cardList.map(card =>
        <Card
          key={card.id}
          onDelete={deleteCard}
          {...card} />
      )}
    </ul>
  </div>

const mapStateToProps = ({ cards }) => ({
  cards
})

const mapDispatchtoProps = dispatch => ({
  deleteCard (id) {
    return () => {
      dispatch(deleteCard(id))
    }
  }
})

export default connect(mapStateToProps, mapDispatchtoProps)(CardGrid)
