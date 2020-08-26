import React, { Component } from "react";
import ReactDOM from "react-dom";

class Fetchapi extends Component{
  constructor(){
    super();
    this.state = {
      hasErrors : false,
      planets: {}
    };
  }
  componentDidMount(){
    fetch("https://swapi.co/api/planets/")
    .then(res => res.json)
    .then(res =>this.setState({planets : res}))
    .catch(() => this.setState({hasErrors : true}))
  }
  render(){
    return(
      <>
      <div>JSON.stringify(this.state.planets}</div>
      </>
    )
  }
}
ReactDOM.render(<Fetchapi/>,document.getElementById("root"));