import axios from 'axios'

export function getContent({id, category}) {
  return axios
    .get(`http://localhost:6508/card/${category}/${id}`)
    .then(res => res.data[0])
    .catch(err => {throw err});
}

export function getContents({keyword, category}) {
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

export function getRecentContents(category = '') {
  return axios
    .get(`http://localhost:6508/card/${category}`)
    .then(res => res.data)
    .catch(err => console.log(err))
}