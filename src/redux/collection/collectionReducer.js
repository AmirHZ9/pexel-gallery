const initialState = {
  photosSelected: [],
};
const collectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Add_To_List":
      if (!state.photosSelected.find((item) => item.id === action.payload.id)) {
        state.photosSelected.push({ ...action.payload });

        return {
          ...state,
          photosSelected: state.photosSelected,
        };
      } else if (
        state.photosSelected.find((item) => item.id === action.payload.id)
      ) {
        const fitlerItem = state.photosSelected.filter(
          (item) => item.id !== action.payload.id
        )

        return {
          ...state,
          photosSelected: fitlerItem
        }
      };

    default:
      return state;
  }
};
export default collectionReducer;
