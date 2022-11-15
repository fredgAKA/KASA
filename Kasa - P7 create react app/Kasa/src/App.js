import React, { Component } from "react";
import RouteConfig from "./Routes";
import './App.scss';


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      datas: [],
      isLoading: false,
      error: null,
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(`${process.env.PUBLIC_URL}/hotels.json`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong...');
        }
        })
      .then(data => this.setState({ datas: data, isLoading: false })) 
      .catch(error => this.setState({ error, isLoading: false }));
  }
  render() {
    
    if (this.state.error) {
      console.log(this.state.error);
      return <p>{this.state.error.message}</p>;
    }
 
    if (this.state.isLoading) {
      return <p className="loading">Loading ...</p>;
    }

    
    return (
      <RouteConfig datas={this.state.datas}/>
    )
      
    
  }
}
