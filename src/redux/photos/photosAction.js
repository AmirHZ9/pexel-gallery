import { createClient } from "pexels";
const client = createClient(
  "563492ad6f917000010000013b47ddb432494d65bc94ad9bfd042882"
);

const color = ""
const per_page = 50

const fetchPhotosRequset = () => {
  return { type: "Fetch-Photos-Request" };
};
const fetchPhotosSuccess = (photos,query) => {
  return { type: "Fetch-Photos-Success", payload: photos ,query:query };
};
const fetchPhotosFailure = (error) => {
  return { type: "Fetch-Photos-Failure", payload: error };
};

const fetchPhotos = (query,page) => {
  return async (dispatch) => {
    dispatch(fetchPhotosRequset());
    await client.photos
      .search({ query, color, per_page ,page})

      .then((response) => dispatch(fetchPhotosSuccess(response,query)))
      .catch(error => dispatch(fetchPhotosFailure(error)))
  };
};
export default fetchPhotos