import React from 'react'

const Card = (card) =>
  <li className='card-grid__card'>
    {console.log(card)}
    <div className='card__photo-container'>
      <img src={card.url} alt='a photo of a cat' className='card__photo' />
    </div>
    <p className='card__text'>{card.fact}</p>
    <button className='card__button' onClick={card.onDelete(card.id)}> This Cat Fact Displeases Me</button>
  </li>

// const mapDispatchtoProps = dispatch => ({
//   deleteCard (id) {
//     return () => {
//       dispatch(deleteCard(id))
//     }
//   }
// })

export default Card
