import * as ACTIONS from "../constants/actions";
import * as STATUS from "../constants/AppStatus";

const initialState = {
  status: STATUS.EMPTY

};

function rootReducer(state = initialState, action) {
  switch (action.type){
    case ACTIONS.CHANGE_APP_STATUS:
      return {status: action.payload};
    default:
      return state
  }


}

export default rootReducer;
