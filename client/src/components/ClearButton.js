import React from 'react';
import {connect} from "react-redux";
import * as STATUS from "../constants/AppStatus";

const mapStateToProps = state => {
  return {status: state.status}
};

let ClearButtonComponent = (props) => {

  let isDisabled = props.status === STATUS.WAITING_RESPONSE || props.status === STATUS.EMPTY;

  let classButton = "bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded";

  //disabled react att seems not works with tailwind
  if(isDisabled){
    classButton += " opacity-50 cursor-not-allowed"
  }



  return (
    <div className="inline-block">
      <button
        className={classButton}
        onClick={props.clearInput}>CLEAR</button>
    </div>
  )

};



let ClearButton = connect(mapStateToProps)(ClearButtonComponent);
export default ClearButton
