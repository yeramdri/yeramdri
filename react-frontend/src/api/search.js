import axios from 'axios'

export function getContents({ keyword, category }) {
  return axios
    .get(`http://13.209.190.90:6508/${category}-card/result?search=${keyword}`)
    .then(res => res)
    .catch(err => {
      throw err
    })
}

export function getAllContents() {
  return axios
    .get(`http://13.209.190.90:6508/bible-card/result`)
    .then(res => res)
    .catch(err => console.log(err))
}
