const initialState = {
    loading: true,
    photos: [],
    error: false,

  };
  
  const photosIDReducer = (state = initialState, action) => {
    switch (action.type) {
      case "Fetch-Photos-ID-Request":
        return {
          ...state,
          loading: true,
        };
      case "Fetch-Photos-ID-Success":
        return {
          ...state,
          loading: false,
          photos: action.payload, 
          error: false,
       
        };
      case "Fetch-Photos-ID-Failure":
        return {
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default photosIDReducer;
  