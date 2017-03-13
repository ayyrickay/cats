import { API_URL } from '../../constants'

export const DELETE_CARD = 'DELETE_CARD'
export const SET_CARDS = 'SET_CARDS'
export const GET_FACTS_FAILURE = 'GET_FACTS_FAILURE'
export const GET_PICTURES_FAILURE = 'GET_PICTURES_FAILURE'

export function getPictures () {
  return dispatch => {
    window.fetch(`${API_URL}/catpics`)
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, 'text/xml'))
    .then(data => {
      const images = Array.from(data.getElementsByTagName('image'))
      const imageObjects = images.map(imageXML => {
        const imageObject = {}
        imageObject['url'] = imageXML.getElementsByTagName('url')[0].childNodes[0].nodeValue
        imageObject['id'] = imageXML.getElementsByTagName('id')[0].childNodes[0].nodeValue
        imageObject['source_url'] = imageXML.getElementsByTagName('source_url')[0].childNodes[0].nodeValue
        return imageObject
      })

      dispatch(getFacts(imageObjects))
    })
    .catch((error) => {
      dispatch(getFactsFailure(error))
    })
  }
}

export function getFacts (cardObjects) {
  return dispatch => {
    window.fetch(`${API_URL}/catfacts`)
    .then(response => response.json())
    .then(data => {
      if (cardObjects) {
        data.facts.forEach((fact, i) => {
          cardObjects[i]['fact'] = fact
        })
      }

      dispatch(setCards(cardObjects))
    })
    // .then(pics => {
    //   console.log(pics)
    //   dispatch(setPictures(pics))
    // })
  }
}

export function getPicturesFailure (error) {
  return {
    type: GET_PICTURES_FAILURE,
    loading: false,
    error: error
  }
}

export function getFactsFailure (error) {
  return {
    type: GET_FACTS_FAILURE,
    loading: false,
    error: error
  }
}

export function setCards (cards) {
  return {
    type: SET_CARDS,
    loading: true,
    error: null,
    cards
  }
}

export function deleteCard (id) {
  return {
    type: DELETE_CARD,
    toRemove: id
  }
}
