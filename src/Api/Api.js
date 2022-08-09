import { createClient } from "pexels";
const client = createClient(
  "563492ad6f917000010000013b47ddb432494d65bc94ad9bfd042882"
);
const query = "nature";
const color = ""
const per_page = 51
const getData = async (query,color) => {
  const photos = await client.photos.search({ query,color, per_page});

  return photos.photos;
};

export default getData;
