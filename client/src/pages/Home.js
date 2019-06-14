import React,{useState} from 'react';
import {connect} from "react-redux";
import {submitJson,changeAppStatus} from "../actions";
import * as STATUS from '../constants/AppStatus'
import Message from "../components/Message";
import SubmitButton from "../components/SubmitButton";
import ClearButton from "../components/ClearButton";

const mapStateToProps = state => {
  return {status: state.status}
};


let HomeComponent = (props) => {
  const [jsonInput, setJsonInput] = useState("");

  const handleInputChange = e => {
    if (e.target.value.length > 0) {
      props.dispatch(changeAppStatus(STATUS.WAITING_SUBMIT));
    }
    else{
      props.dispatch(changeAppStatus(STATUS.EMPTY));
    }

    setJsonInput(e.target.value);
  };

  const clearInput = () => {
    props.dispatch(changeAppStatus(STATUS.EMPTY));
    setJsonInput("");
  };

  const handleSubmit = () => {
    props.dispatch(submitJson(jsonInput));
  };


  return (
    <div>
      <div className="text-5xl text-yellow-900 pt-12">
        <span className="text-red-800 font-bold">JSON </span>
        <span className="font-light italic">validator</span>
      </div>
      <div className="mt-5 w-4/6 mx-auto">
        <textarea name="" id="" cols="50" rows="6" onChange={handleInputChange} value={jsonInput}/>
        <Message/>
        <SubmitButton handleSubmit={handleSubmit}/>
        <ClearButton clearInput={clearInput}/>
      </div>


    </div>

  )
};


let Home = connect(mapStateToProps)(HomeComponent);
export default Home
