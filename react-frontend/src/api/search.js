import axios from 'axios'

export function getContents(keyword) {
  return axios
    .post('http://localhost:6508/bible-card', { search: keyword })
    .then(res => res)
    .catch(err => console.log(err))
}