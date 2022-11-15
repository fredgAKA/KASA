import React, { Component } from "react";
import Banner from "./Banner";
import Accommodation from "./Accommodation";


export default class Home extends Component {
    constructor(props) {
    super(props);
    this.state = {
      datas: this.props.datas,
      info: {
        type: "banner-homepage",
        text:"Chez vous, partout et ailleurs"
      }
    }
  }
  render() {
        return (
            <main>
              <Banner info={this.state.info} />
              <Accommodation datas={this.state.datas} />
            </main>
        )
    }
}
