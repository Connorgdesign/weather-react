import React, { Component } from 'react';



class ZipForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      zipcode:""
    }
    this.inputUpdated = this.inputUpdated.bind(this);
    this.submitZipCode = this.submitZipCode.bind(this);
  }


  inputUpdated(e) {
      const zipcode = e.target.value;
      this.setState({zipcode: zipcode});
  }

  submitZipCode(e){
    e.preventDefault();
    const{zipcode} = this.state;
    const {onSubmit} = this.props;
    onSubmit(zipcode);
    this.setState({zipcode: ""});
  }

  render(){

    return(
    <div className="zip-form">
    <form id="ZipForm" onSubmit={this.submitZipCode}>
      <div className="flex-parent">
        <label htmlFor="zipcode">Zip</label>
        <input onInput={this.inputUpdated} className="form-control" type="input" id="zipcode" value={this.state.zipcode}  ></input>
        <button type="submit" className="btn btn-success">Get the forcast!</button>
      </div>
    </form>
    </div>);

  }

}


export default ZipForm;
