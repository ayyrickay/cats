// understands how to update state tree for cards
import { SET_CARDS, DELETE_CARD, GET_FACTS_FAILURE, GET_PICTURES_FAILURE } from './actions'

const initialState = {
  cardList: [],
  loading: true,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CARDS:
      return {
        'cardList': action.cards,
        loading: false
      }
    case GET_FACTS_FAILURE:
      return {
        loading: false,
        error: action.error
      }
    case GET_PICTURES_FAILURE:
      return {
        loading: false,
        error: action.error
      }
    case DELETE_CARD:
      const filteredCards = state.cardList.filter((card) => {
        return card.id !== action.toRemove
      })
      return { 'cardList': filteredCards }
    default:
      return state
  }
}
