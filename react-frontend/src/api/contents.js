import axios from "axios";

export const postContent = data => {
  return axios
    .post(
      `${process.env.REACT_APP_YERAMDRI_URL}/card`,
      data)
    .then(res => res)
    .catch(err => { throw err });
};