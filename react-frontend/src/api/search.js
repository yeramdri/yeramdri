import axios from 'axios'

export function getContents({ keyword, category }) {
  return axios
    .get(`https://www.yeramdri.com/${category}-card/result?search=${keyword}`)
    .then(res => res)
    .catch(err => {
      throw err
    })
}

export function getAllContents() {
  return axios
    .get(`https://www.yeramdri.com/bible-card/result`)
    .then(res => res)
    .catch(err => console.log(err))
}
