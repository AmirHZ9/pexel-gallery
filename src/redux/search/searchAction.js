import { createClient } from "pexels";
const client = createClient(
  "563492ad6f917000010000013b47ddb432494d65bc94ad9bfd042882"
);

const color = ""
const per_page = 51
const page = 1
const fetchSearchPhotosRequset = () => {
  return { type: "Fetch-Search-Photos-Request" };
};
const fetchSearchPhotosSuccess = (photos,query) => {
  return { type: "Fetch-Search-Photos-Success", payload: photos,query:query };
};
const fetchSearchPhotosFailure = (error) => {
  return { type: "Fetch-Search-Photos-Failure", payload: error };
};

const fetchSearchPhotos = (query,page) => {
  return async (dispatch) => {
    dispatch(fetchSearchPhotosRequset());
    await client.photos
      .search({ query, color, per_page, page })
      .then((response) => dispatch(fetchSearchPhotosSuccess(response.photos,query)))
      .catch(error => dispatch(fetchSearchPhotosFailure(error)))
  };
};
export default fetchSearchPhotos