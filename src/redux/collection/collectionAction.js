export const addToList = (photos) => {
  return {
    type: "Add_To_List",
    payload: photos,
  };
};
