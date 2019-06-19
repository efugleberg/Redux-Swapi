import { FETCH_CHARACTER_START, FETCH_CHARACTER_SUCCESS, FETCH_CHARACTER_ERROR } from "../actions";

const initialState = {
  characters: [],
  isLoading: false,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  console.log('reducer', action);
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCH_CHARACTER_START:
      return {
        ...state,
        error:'',
        isLoading: true
      }
      case FETCH_CHARACTER_SUCCESS:
        return {
          ...state,
          isLoading: false,
          characters: action.payload
        }
        case FETCH_CHARACTER_ERROR:
          return {
            ...state,
            isLoading: false,
            error: action.payload
          }

    default:
      return state;
  }
};
