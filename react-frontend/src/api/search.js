import axios from 'axios'

export function getContents(keyword, type) {
  console.log(type, keyword)
  debugger
  return axios
    .get(`http://localhost:6508/${type}-card/result?search=${keyword}`)
    .then(res => res)
    .catch(err => console.log(err))
}

export function getAllContents() {
  return axios
    .get(`http://localhost:6508/bible-card/result`)
    .then(res => res)
    .catch(err => console.log(err))
}