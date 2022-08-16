import { createClient } from "pexels";
const client = createClient(
  "563492ad6f917000010000013b47ddb432494d65bc94ad9bfd042882"
);



const fetchPhotosRequsetByID = () => {
  return { type: "Fetch-Photos-ID-Request" };
};
const fetchPhotosSuccessByID = (photos) => {
  return { type: "Fetch-Photos-ID-Success", payload: photos  };
};
const fetchPhotosFailureByID = (error) => {
  return { type: "Fetch-Photos-ID-Failure", payload: error };
};

const fetchPhotosByID = (ID) => {
  return async (dispatch) => {
    dispatch(fetchPhotosRequsetByID());
    await client.photos
      .show({id:ID})

      .then((response) => dispatch(fetchPhotosSuccessByID(response)))
      .catch(error => dispatch(fetchPhotosFailureByID(error)))
  };
};
export default fetchPhotosByID