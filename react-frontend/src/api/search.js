import axios from "axios";

export function getContent({ id, category }) {
  return axios
    .get(`${process.env.REACT_APP_YERAMDRI_URL}/card/${category}/${id}`)
    .then(res => res.data[0])
    .catch(err => { throw err });
}

export function getContents({ keyword, category }) {
  const path =
    category === "results"
      ? `http://www.yeramdri.net/card/result?search=${keyword}`
      : `http://www.yeramdri.net/card/${category}/result?search=${keyword}`;
  return axios
    .get(path)
    .then(res => res)
    .catch(err => { throw err });
}

export function getAllContents() {
  return axios
    .get(`http://www.yeramdri.net/card/`)
    .then(res => res)
    .catch(err => { throw err });
}

export function getRecentContents(category = "") {
  return axios
    .get(`${process.env.REACT_APP_YERAMDRI_URL}/card/${category}`)
    .then(res => res.data)
    .catch(err => { throw err });
}

export function tempGetContent(id) {
  return axios
    .get(`http://www.yeramdri.net/card/life/${id}`)
    .then(res => res)
    .catch(err => { throw err });
}