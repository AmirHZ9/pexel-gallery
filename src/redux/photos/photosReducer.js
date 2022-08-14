const initialState = {
  loading: false,
  photos: [],
  error: false,
  query:''
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
        ...state,
        loading: false,
        photos: action.payload, 
        error: false,
        query:action.query
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
