import * as ACTIONS from "../constants/actions";

import * as STATUS from "../constants/AppStatus"
import * as axios from "axios";
import store from "../store";



export const changeAppStatus = (payload) => {
  return {type: ACTIONS.CHANGE_APP_STATUS, payload}
};

export const submitJson = (payload) => (dispatch) => {
  dispatch(changeAppStatus(STATUS.WAITING_RESPONSE));


 axios.post("/validate-json",{json:payload})
    .then((response)=>{
      let result = response.data.valid;
      if(result === true){
        dispatch(changeAppStatus(STATUS.VALID_JSON))
      }else
        dispatch(changeAppStatus(STATUS.INVALID_JSON));
    })



};
