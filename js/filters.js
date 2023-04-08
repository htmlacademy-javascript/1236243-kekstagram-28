import { compareComments } from './util.js';

const PICTURES_COUNT = 10

const imgFilters = document.querySelector('.img-filters')

let picturesLoaded = []

const sortRandom = () => Math.random() - 0.5

const removeClassFilter = (evt) => {
    imgFilters
        .querySelector('.img-filters__button--active')
        .classList.remove('img-filters__button--active')
    evt.target.classList.add('img-filters__button--active')
}

const clickFilterButton = (cb) => {
  imgFilters.addEventListener('click', (evt) => {
    if(!evt.target.closest('.img-filters__button')) {
      return
    }

    if(evt.target.id === 'filter-discussed') {
        removeClassFilter(evt)
        cb([...picturesLoaded].sort(compareComments))
      
    }
    if(evt.target.id === 'filter-default') {
        removeClassFilter(evt)
        cb([...picturesLoaded])
    }

    if(evt.target.id === 'filter-random') {
        removeClassFilter(evt)
      cb([...picturesLoaded].sort(sortRandom).slice(0, PICTURES_COUNT))
      
    }
  })
}

const filterPictures = (cb, data) => {
    imgFilters.classList.remove('img-filters--inactive')  
  picturesLoaded = [...data]
  clickFilterButton(cb)
}

export { filterPictures }