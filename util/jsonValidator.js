let  validate =(jsonString) => {
  try{
    let json = JSON.parse(jsonString);
    return({valid: true,json:json});
  }catch(e){
    return({valid:false,json:null})
  }
}

module.exports = {validate};

