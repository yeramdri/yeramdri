import axios from 'axios'

export function getContents({ keyword, category }) {
  const path = category === 'results'
    ? `https://www.yeramdri.com/card/result?search=${keyword}`
    : `https://www.yeramdri.com/card/${category}/result?search=${keyword}`
  return axios
    .get(path)
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
