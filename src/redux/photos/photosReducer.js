const initialState = {
  loading: false,
  photos: [],
  error: false,
};

const photosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Fetch-Photos-Request":
      return {
        ...state,
        loading: true,
      };
    case "Fetch-Photos-Success":
      return {
        loading: false,
        photos: action.payload,
        error: false,
      };
    case "Fetch-Photos-Failure":
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default photosReducer;
