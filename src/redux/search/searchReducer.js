const initialState = {
    loading: false,
    photos: [],
    error: false,
    query:"",
  };
  
  const searchPhotosReducer = (state = initialState, action) => {
    switch (action.type) {
      case "Fetch-Search-Photos-Request":
        return {
          ...state,
          loading: true,
        };
      case "Fetch-Search-Photos-Success":
        return {
            ...state,
          loading: false,
          photos: action.payload,
          error: false,
          query:action.query
          
        };
      case "Fetch-Search-Photos-Failure":
        return {
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default searchPhotosReducer;
  