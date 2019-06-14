import React from 'react';
import {connect} from "react-redux";
import * as STATUS from "../constants/AppStatus";

const mapStateToProps = state => {
  return {status: state.status}
};

let MessageComponent = (props) => {
  let status;

  switch (props.status) {
    case (STATUS.INVALID_JSON):
      status = <div className="text-red-500 font-bold text-xl">the <span className="text-gray-800">JSON</span>  is invalid</div>;
      break;
    case (STATUS.VALID_JSON):
      status = <div className="text-gray-800 font-bold text-xl">your input is a valid <span className="text-red-800">JSON</span></div>;
      break;
    case (STATUS.WAITING_RESPONSE):
      status = <div className="text-green-700 font-bold text-xl">Please wait...</div>;
      break;
    default:
      status = <div className="text-gray-800 font-bold text-xl">please insert a <span className="text-red-800">JSON</span>  and press <span className="font-extrabold">Submit</span> </div> ;
      break;
  }

  return (
    <div className="py-5">
      {status}
    </div>
  )

};



let Message = connect(mapStateToProps)(MessageComponent);
export default Message
