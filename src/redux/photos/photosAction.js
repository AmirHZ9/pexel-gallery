import { createClient } from "pexels";
const client = createClient(
  "563492ad6f917000010000013b47ddb432494d65bc94ad9bfd042882"
);

const color = ""
const per_page = 51

const fetchPhotosRequset = () => {
  return { type: "Fetch-Photos-Request" };
};
const fetchPhotosSuccess = (photos) => {
  return { type: "Fetch-Photos-Success", payload: photos };
};
const fetchPhotosFailure = (error) => {
  return { type: "Fetch-Photos-Failure", payload: error };
};

const fetchPhotos = (query) => {
  return async (dispatch) => {
    dispatch(fetchPhotosRequset());
    await client.photos
      .search({ query, color, per_page })
      .then((response) => dispatch(fetchPhotosSuccess(response.photos)))
      .catch(error => dispatch(fetchPhotosFailure(error)))
  };
};
export default fetchPhotos