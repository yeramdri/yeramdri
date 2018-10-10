import axios from 'axios'

export function getContents(keyword) {
  return axios
    .get(`http://localhost:6508/bible-card/result?search=${keyword}`)
    .then(res => res)
    .catch(err => console.log(err))
}

export function getAllContents() {
  return axios
    .get(`http://localhost:6508/bible-card/result`)
    .then(res => res)
    .catch(err => console.log(err))
}