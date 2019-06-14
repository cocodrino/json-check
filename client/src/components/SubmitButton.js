import React from 'react';
import {connect} from "react-redux";
import * as STATUS from "../constants/AppStatus";

const mapStateToProps = state => {
  return {status: state.status}
};

let SubmitButtonComponent = (props) => {

  let isDisabled = props.status !== STATUS.WAITING_SUBMIT ;

  //disabled react att seems not works with tailwind
  let classButton = "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded inline-block";

  //disabled react att seems not works with tailwind
  if(isDisabled){
    classButton += " opacity-50 cursor-not-allowed"
  }


  return (
    <div className="inline-block mx-10 mt-8">
      <button
        type="button"

        className={classButton}
        onClick={props.handleSubmit}>SUBMIT</button>
    </div>
  )

};



let SubmitButton = connect(mapStateToProps)(SubmitButtonComponent);
export default SubmitButton
